import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { RetreatData, SupabaseConfig } from '../types/retreat';

function cleanBaseUrl(rawUrl: string): string {
  let url = (rawUrl || '').trim();
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  url = url.replace(/\/+$/, '');
  url = url.replace(/\/rest\/v1\/?$/i, '');
  return url;
}

let cachedClient: SupabaseClient | null = null;
let cachedUrl = '';
let cachedKey = '';

export function getSupabaseClient(config: SupabaseConfig): SupabaseClient | null {
  const url = cleanBaseUrl(config.url);
  const key = config.anonKey?.trim();
  if (!url || !key) return null;

  if (cachedClient && cachedUrl === url && cachedKey === key) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
    cachedUrl = url;
    cachedKey = key;
    return cachedClient;
  } catch (err) {
    console.error('Error creating Supabase client:', err);
    return null;
  }
}

export async function testSupabaseConnection(config: SupabaseConfig): Promise<{ success: boolean; message: string }> {
  const client = getSupabaseClient(config);
  if (!client) {
    return { success: false, message: 'URL ou Chave API inválida.' };
  }

  try {
    const { data, error } = await client
      .from('retreat_state')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Supabase test error:', error);
      return { 
        success: false, 
        message: `${error.message} (${error.code || 'Erro'})` 
      };
    }

    return { success: true, message: 'Conectado com sucesso ao Supabase!' };
  } catch (err: any) {
    console.error('Supabase connection test failed:', err);
    return { success: false, message: err.message || 'Falha de conexão.' };
  }
}

export async function syncWithSupabase(config: SupabaseConfig, data: RetreatData): Promise<{ success: boolean; message: string }> {
  const client = getSupabaseClient(config);
  if (!client) {
    return { success: false, message: 'Configuração do Supabase incompleta.' };
  }

  try {
    const { error } = await client
      .from('retreat_state')
      .upsert({
        id: 'default',
        payload: data,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });

    if (error) {
      console.error('Supabase sync error:', error);
      return { 
        success: false, 
        message: `Erro (${error.code || 'RLS'}): ${error.message}` 
      };
    }

    return { success: true, message: 'Dados sincronizados com sucesso no Supabase!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Falha na conexão com Supabase.' };
  }
}

export async function fetchFromSupabase(config: SupabaseConfig): Promise<RetreatData | null> {
  const client = getSupabaseClient(config);
  if (!client) return null;

  try {
    const { data, error } = await client
      .from('retreat_state')
      .select('*')
      .eq('id', 'default')
      .maybeSingle();

    if (error) {
      console.error('Supabase fetch error:', error);
      return null;
    }

    if (data && data.payload) {
      return data.payload as RetreatData;
    }
  } catch (err) {
    console.error('Failed to fetch from Supabase:', err);
  }
  return null;
}
