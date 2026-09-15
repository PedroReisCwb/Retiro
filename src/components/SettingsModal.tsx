import React, { useState } from 'react';
import { X, Cloud, Download, Upload, RotateCcw, ShieldCheck, Check, AlertCircle, RefreshCw, ExternalLink, HelpCircle } from 'lucide-react';
import { RetreatData, SupabaseConfig } from '../types/retreat';
import { exportBackupJson, parseImportedJson, resetToDefaultData } from '../services/storage';
import { testSupabaseConnection, syncWithSupabase, fetchFromSupabase } from '../services/supabaseClient';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  retreatData: RetreatData;
  onUpdateRetreatData: (data: RetreatData) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  retreatData,
  onUpdateRetreatData,
}) => {
  const [supabaseUrl, setSupabaseUrl] = useState(retreatData.supabaseConfig?.url || '');
  const [supabaseKey, setSupabaseKey] = useState(retreatData.supabaseConfig?.anonKey || '');
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'cloud' | 'backup' | 'guide'>('cloud');

  if (!isOpen) return null;

  const handleTestAndSaveSupabase = async () => {
    setIsTesting(true);
    setTestResult(null);

    const config: SupabaseConfig = {
      url: supabaseUrl.trim(),
      anonKey: supabaseKey.trim(),
      isConnected: false
    };

    const result = await testSupabaseConnection(config);
    if (result.success) {
      config.isConnected = true;
      setTestResult({ success: true, message: result.message });
      const updated = { ...retreatData, supabaseConfig: config };
      onUpdateRetreatData(updated);
    } else {
      setTestResult({ success: false, message: result.message });
    }
    setIsTesting(false);
  };

  const handleSyncToSupabase = async () => {
    if (!retreatData.supabaseConfig?.url) {
      alert('Por favor configure a URL e a Anon Key do Supabase primeiro.');
      return;
    }

    setSyncStatus('Sincronizando dados com a nuvem...');
    const result = await syncWithSupabase(retreatData.supabaseConfig, retreatData);
    setSyncStatus(result.message);
  };

  const handleFetchFromSupabase = async () => {
    if (!retreatData.supabaseConfig?.url) {
      alert('Por favor configure a URL e a Anon Key do Supabase primeiro.');
      return;
    }

    setSyncStatus('Buscando dados da nuvem...');
    const cloudData = await fetchFromSupabase(retreatData.supabaseConfig);
    if (cloudData) {
      onUpdateRetreatData(cloudData);
      setSyncStatus('Dados atualizados da nuvem com sucesso!');
    } else {
      setSyncStatus('Nenhum dado encontrado ou erro ao baixar.');
    }
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = parseImportedJson(text);
        onUpdateRetreatData(parsed);
        alert('Backup importado com sucesso!');
      } catch (err: any) {
        alert('Erro ao importar arquivo: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    if (confirm('Atenção: Deseja restaurar a programação original dos 3 PDFs? Todas as alterações manuais serão resetadas.')) {
      const reseted = resetToDefaultData();
      onUpdateRetreatData(reseted);
      alert('Dados restaurados para o padrão original dos PDFs!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/50">
          <div>
            <h3 className="font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-rose-500" />
              Configurações & Nuvem Gratuita
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Sincronização, Backup e Hospedagem sem custos
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/20 px-4 pt-2 gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('cloud')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'cloud'
                ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                : 'border-transparent text-stone-500 hover:text-stone-700'
            }`}
          >
            Nuvem Supabase
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'backup'
                ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                : 'border-transparent text-stone-500 hover:text-stone-700'
            }`}
          >
            Backup & Restauração
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'guide'
                ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                : 'border-transparent text-stone-500 hover:text-stone-700'
            }`}
          >
            Guia de Hospedagem Grátis
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-sm">
          
          {activeTab === 'cloud' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                <strong>Banco de Dados Gratuito:</strong> O Supabase oferece plano 100% grátis perpétuo (PostgreSQL + Realtime). Cole suas credenciais abaixo para sincronizar entre todos os membros da equipe.
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Project URL do Supabase
                </label>
                <input
                  type="text"
                  placeholder="https://xyzcompany.supabase.co"
                  value={supabaseUrl}
                  onChange={(e) => setSupabaseUrl(e.target.value)}
                  className="w-full text-xs font-mono px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Project Anon / Public API Key
                </label>
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={supabaseKey}
                  onChange={(e) => setSupabaseKey(e.target.value)}
                  className="w-full text-xs font-mono px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleTestAndSaveSupabase}
                  disabled={isTesting || !supabaseUrl || !supabaseKey}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isTesting && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>Testar & Salvar Conexão</span>
                </button>

                {testResult && (
                  <span className={`text-xs font-semibold flex items-center gap-1 ${
                    testResult.success ? 'text-emerald-600' : 'text-red-500'
                  }`}>
                    {testResult.success ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    {testResult.message}
                  </span>
                )}
              </div>

              {retreatData.supabaseConfig?.isConnected && (
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSyncToSupabase}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Upload className="w-3.5 h-3.5" /> Enviar Dados para a Nuvem
                  </button>
                  <button
                    type="button"
                    onClick={handleFetchFromSupabase}
                    className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Baixar Dados da Nuvem
                  </button>
                </div>
              )}

              {syncStatus && (
                <p className="text-xs text-stone-600 dark:text-stone-300 italic pt-1">
                  {syncStatus}
                </p>
              )}
            </div>
          )}

          {activeTab === 'backup' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-2">
                <h4 className="font-bold text-xs uppercase text-stone-600 dark:text-stone-400">
                  Exportar Backup Completo (JSON)
                </h4>
                <p className="text-xs text-stone-500">
                  Baixe um arquivo contendo todas as atividades, equipes, músicas cifradas e anexos para salvar no WhatsApp ou computador.
                </p>
                <button
                  type="button"
                  onClick={() => exportBackupJson(retreatData)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Baixar Arquivo de Backup
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-2">
                <h4 className="font-bold text-xs uppercase text-stone-600 dark:text-stone-400">
                  Importar Backup (JSON)
                </h4>
                <p className="text-xs text-stone-500">
                  Restaure os dados a partir de um backup anterior.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="text-xs text-stone-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-retreat-700 file:text-white hover:file:bg-retreat-800"
                />
              </div>

              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 space-y-2">
                <h4 className="font-bold text-xs uppercase text-red-700 dark:text-red-400">
                  Restaurar Padrão dos 3 PDFs
                </h4>
                <p className="text-xs text-red-600 dark:text-red-300">
                  Recarrega a programação original exata de Sexta, Sábado e Domingo fornecida nos PDFs.
                </p>
                <button
                  type="button"
                  onClick={handleResetData}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restaurar Dados Originais
                </button>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-3 text-xs leading-relaxed text-stone-700 dark:text-stone-300">
              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl text-amber-900 dark:text-amber-200">
                <strong>🚀 Hospedagem 100% Gratuita e Vitalícia:</strong>
                <p className="mt-1">
                  Este PWA é uma aplicação web estática moderna que pode ser hospedada com zero custos em serviços líderes com HTTPS gratuito.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-stone-900 dark:text-white">Opção 1: Vercel (Recomendado - 2 minutos)</h4>
                <ol className="list-decimal pl-5 space-y-1 text-stone-600 dark:text-stone-400">
                  <li>Crie uma conta gratuita em <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-rose-600 underline">vercel.com</a>.</li>
                  <li>Conecte seu repositório do GitHub ou arraste a pasta do projeto.</li>
                  <li>Clique em <strong>Deploy</strong> e seu link HTTPS estará pronto para toda a equipe!</li>
                </ol>
              </div>

              <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
                <h4 className="font-bold text-stone-900 dark:text-white">Opção 2: Netlify ou Cloudflare Pages</h4>
                <p className="text-stone-600 dark:text-stone-400">
                  Basta subir a pasta <code className="bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded font-mono">dist</code> gerada por <code className="bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded font-mono">npm run build</code> diretamente no painel Drop do Netlify.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex justify-end bg-stone-50 dark:bg-stone-800/50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-retreat-700 hover:bg-retreat-800 text-white text-xs font-bold"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
