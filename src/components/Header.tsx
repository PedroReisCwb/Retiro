import React from 'react';
import { Calendar, Users, Music, Settings, Moon, Sun, Cloud, CloudOff, RefreshCw } from 'lucide-react';
import { SupabaseConfig } from '../types/retreat';

export type AppTab = 'timeline' | 'teams' | 'songs' | 'admin';

interface HeaderProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSettings: () => void;
  supabaseConfig?: SupabaseConfig;
  onQuickSync?: () => void;
  isSyncing?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  darkMode,
  onToggleDarkMode,
  onOpenSettings,
  supabaseConfig,
  onQuickSync,
  isSyncing
}) => {
  return (
    <header className="sticky top-0 z-40 bg-retreat-800 dark:bg-stone-900 text-white shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center shadow-inner font-bold text-white text-xl">
              💍
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                Retiro de Casais
                <span className="hidden sm:inline-block text-xs bg-amber-500/30 text-amber-200 border border-amber-400/40 px-2 py-0.5 rounded-full font-medium">
                  PWA 2026
                </span>
              </h1>
              <p className="text-xs text-retreat-200 dark:text-stone-400 hidden xs:block">
                Roteiro, Equipes & Violeiros
              </p>
            </div>
          </div>

          {/* Quick Actions (Theme & Cloud Settings) */}
          <div className="flex items-center space-x-2">
            {supabaseConfig?.url && (
              <button
                onClick={onQuickSync}
                disabled={isSyncing}
                title={supabaseConfig.isConnected ? "Nuvem Conectada - Sincronizar" : "Nuvem Desconectada"}
                className={`p-2 rounded-lg text-sm flex items-center gap-1.5 transition-all ${
                  supabaseConfig.isConnected 
                    ? 'bg-emerald-600/30 text-emerald-200 hover:bg-emerald-600/50 border border-emerald-500/40' 
                    : 'bg-stone-700/50 text-stone-300 hover:bg-stone-700 border border-stone-600'
                }`}
              >
                {supabaseConfig.isConnected ? (
                  <Cloud className="w-4 h-4 text-emerald-400" />
                ) : (
                  <CloudOff className="w-4 h-4 text-stone-400" />
                )}
                {isSyncing && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
              </button>
            )}

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-retreat-700/60 dark:bg-stone-800 text-retreat-100 dark:text-stone-300 hover:bg-retreat-700 dark:hover:bg-stone-700 transition-colors"
              title={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
              aria-label="Alternar tema"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-retreat-100" />}
            </button>

            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg bg-retreat-700/60 dark:bg-stone-800 text-retreat-100 dark:text-stone-300 hover:bg-retreat-700 dark:hover:bg-stone-700 transition-colors"
              title="Configurações & Backup"
              aria-label="Configurações"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-3 pb-2 pt-1 overflow-x-auto no-scrollbar" aria-label="Navegação Principal">
          <button
            onClick={() => onTabChange('timeline')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'timeline'
                ? 'bg-white text-retreat-900 dark:bg-stone-800 dark:text-white shadow-sm font-semibold'
                : 'text-retreat-100 hover:bg-retreat-700/50 dark:text-stone-300 dark:hover:bg-stone-800/60'
            }`}
          >
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>Visualização (Roteiro)</span>
          </button>

          <button
            onClick={() => onTabChange('teams')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'teams'
                ? 'bg-white text-retreat-900 dark:bg-stone-800 dark:text-white shadow-sm font-semibold'
                : 'text-retreat-100 hover:bg-retreat-700/50 dark:text-stone-300 dark:hover:bg-stone-800/60'
            }`}
          >
            <Users className="w-4 h-4 text-blue-400" />
            <span>Equipes</span>
          </button>

          <button
            onClick={() => onTabChange('songs')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'songs'
                ? 'bg-white text-retreat-900 dark:bg-stone-800 dark:text-white shadow-sm font-semibold'
                : 'text-retreat-100 hover:bg-retreat-700/50 dark:text-stone-300 dark:hover:bg-stone-800/60'
            }`}
          >
            <Music className="w-4 h-4 text-amber-400" />
            <span>Músicas & Cifras</span>
          </button>

          <button
            onClick={() => onTabChange('admin')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              currentTab === 'admin'
                ? 'bg-white text-retreat-900 dark:bg-stone-800 dark:text-white shadow-sm font-semibold'
                : 'text-retreat-100 hover:bg-retreat-700/50 dark:text-stone-300 dark:hover:bg-stone-800/60'
            }`}
          >
            <Settings className="w-4 h-4 text-emerald-400" />
            <span>Cadastro / Gestão</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
