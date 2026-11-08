import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanBaseUrl(rawUrl) {
  let url = (rawUrl || '').trim();
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  url = url.replace(/\/+$/, '');
  url = url.replace(/\/rest\/v1\/?$/i, '');
  return url;
}

const rawUrl = process.env.SUPABASE_URL || process.argv[3] || 'https://njrmvlkmetwjpagrklpn.supabase.co';
const PROJECT_URL = cleanBaseUrl(rawUrl);
const ANON_KEY = (process.env.SUPABASE_ANON_KEY || process.argv[2] || '').trim();

if (!ANON_KEY) {
  console.log('\n❌ Supabase Anon Key não informada.');
  console.log('Uso: node scripts/sync_supabase.js <SUA_CHAVE_ANON>\n');
  process.exit(1);
}

// Read payload from update_supabase.sql
const sqlFile = path.resolve(__dirname, '../update_supabase.sql');
if (!fs.existsSync(sqlFile)) {
  console.error('Arquivo update_supabase.sql não encontrado.');
  process.exit(1);
}

const sqlContent = fs.readFileSync(sqlFile, 'utf8');
const match = sqlContent.match(/'({[\s\S]+?})'::jsonb/);

if (!match) {
  console.error('Não foi possível extrair o payload JSON de update_supabase.sql.');
  process.exit(1);
}

const payload = JSON.parse(match[1]);

console.log('Conectando ao Supabase:', PROJECT_URL);
console.log('Eventos a sincronizar:', payload.events.length);
console.log('Equipes a sincronizar:', payload.teams.length);
console.log('Músicas a sincronizar:', payload.songs.length);

const supabase = createClient(PROJECT_URL, ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

async function run() {
  console.log('Enviando dados para a tabela retreat_state...');
  const { data, error } = await supabase
    .from('retreat_state')
    .upsert({
      id: 'default',
      payload: payload,
      updated_at: new Date().toISOString()
    }, { onConflict: 'id' });

  if (error) {
    console.error('❌ Erro ao atualizar Supabase:', error.message);
    if (error.details) console.error('Detalhes:', error.details);
    if (error.hint) console.error('Dica:', error.hint);
    process.exit(1);
  }

  console.log('Consultando dados para confirmação...');
  const { data: verifyData, error: verifyError } = await supabase
    .from('retreat_state')
    .select('id, updated_at, payload')
    .eq('id', 'default')
    .single();

  if (verifyError) {
    console.error('⚠️ Salvo, mas erro ao verificar:', verifyError.message);
  } else {
    console.log('✅ Banco de dados no Supabase atualizado com sucesso!');
    console.log('ID:', verifyData.id);
    console.log('Data de Atualização:', verifyData.updated_at);
    console.log('Total de eventos salvos:', verifyData.payload.events?.length);
    console.log('Total de equipes salvas:', verifyData.payload.teams?.length);
    console.log('Total de músicas salvas:', verifyData.payload.songs?.length);
  }
}

run();
