import React, { useState, useEffect } from 'react';
import { RetreatData, Team, EventItem, Song, Attachment } from './types/retreat';
import { loadRetreatData, saveRetreatData } from './services/storage';
import { syncWithSupabase } from './services/supabaseClient';
import { Header, AppTab } from './components/Header';
import { TimelineView } from './components/TimelineView';
import { TeamManager } from './components/TeamManager';
import { SongManager } from './components/SongManager';
import { AdminPanel } from './components/AdminPanel';
import { SongViewerModal } from './components/SongViewerModal';
import { FileUploadModal } from './components/FileUploadModal';
import { SettingsModal } from './components/SettingsModal';
import { PwaInstallBanner } from './components/PwaInstallBanner';

export const App: React.FC = () => {
  const [retreatData, setRetreatData] = useState<RetreatData>(loadRetreatData);
  const [currentTab, setCurrentTab] = useState<AppTab>('timeline');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Modal states
  const [viewingSong, setViewingSong] = useState<Song | null>(null);
  const [fileModalTarget, setFileModalTarget] = useState<{ id: string; title: string; attachments: Attachment[]; type: 'event' | 'song' } | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme with document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Persist retreatData to localStorage on changes
  useEffect(() => {
    saveRetreatData(retreatData);
  }, [retreatData]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Quick sync with Supabase if configured
  const handleQuickSync = async () => {
    if (!retreatData.supabaseConfig?.url) {
      setIsSettingsOpen(true);
      return;
    }
    setIsSyncing(true);
    const res = await syncWithSupabase(retreatData.supabaseConfig, retreatData);
    setIsSyncing(false);
    showToast(res.message);
  };

  // Event handlers
  const handleSaveEvent = (savedEvent: EventItem) => {
    setRetreatData(prev => {
      const exists = prev.events.some(e => e.id === savedEvent.id);
      const updatedEvents = exists
        ? prev.events.map(e => e.id === savedEvent.id ? savedEvent : e)
        : [...prev.events, savedEvent];
      return { ...prev, events: updatedEvents };
    });
    showToast('Atividade salva com sucesso!');
  };

  const handleDeleteEvent = (id: string) => {
    setRetreatData(prev => ({
      ...prev,
      events: prev.events.filter(e => e.id !== id)
    }));
    showToast('Atividade removida.');
  };

  const handleReorderEvents = (updatedEvents: EventItem[]) => {
    setRetreatData(prev => ({
      ...prev,
      events: updatedEvents
    }));
    showToast('Ordem do roteiro atualizada!');
  };

  // Team handlers
  const handleSaveTeam = (savedTeam: Team) => {
    setRetreatData(prev => {
      const exists = prev.teams.some(t => t.id === savedTeam.id);
      const updatedTeams = exists
        ? prev.teams.map(t => t.id === savedTeam.id ? savedTeam : t)
        : [...prev.teams, savedTeam];
      return { ...prev, teams: updatedTeams };
    });
    showToast('Equipe salva com sucesso!');
  };

  const handleDeleteTeam = (id: string) => {
    setRetreatData(prev => ({
      ...prev,
      teams: prev.teams.filter(t => t.id !== id)
    }));
    showToast('Equipe removida.');
  };

  // Song handlers
  const handleSaveSong = (savedSong: Song) => {
    setRetreatData(prev => {
      const exists = prev.songs.some(s => s.id === savedSong.id);
      const updatedSongs = exists
        ? prev.songs.map(s => s.id === savedSong.id ? savedSong : s)
        : [...prev.songs, savedSong];
      return { ...prev, songs: updatedSongs };
    });
    showToast('Música salva com sucesso!');
  };

  const handleDeleteSong = (id: string) => {
    setRetreatData(prev => ({
      ...prev,
      songs: prev.songs.filter(s => s.id !== id)
    }));
    showToast('Música removida.');
  };

  // Handle saving attachments for event
  const handleSaveEventAttachments = (updatedAttachments: Attachment[]) => {
    if (!fileModalTarget) return;
    if (fileModalTarget.type === 'event') {
      setRetreatData(prev => ({
        ...prev,
        events: prev.events.map(e => e.id === fileModalTarget.id ? { ...e, attachments: updatedAttachments } : e)
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors">
      
      {/* PWA Promo / Offline Banner */}
      <PwaInstallBanner />

      {/* Main Header & Nav */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        supabaseConfig={retreatData.supabaseConfig}
        onQuickSync={handleQuickSync}
        isSyncing={isSyncing}
      />

      {/* Main Body per Tab */}
      <main className="flex-1 pb-16">
        {currentTab === 'timeline' && (
          <TimelineView
            events={retreatData.events}
            teams={retreatData.teams}
            songs={retreatData.songs}
            onOpenSong={(song) => setViewingSong(song)}
            onOpenAttachments={(event) => setFileModalTarget({
              id: event.id,
              title: event.title,
              attachments: event.attachments || [],
              type: 'event'
            })}
          />
        )}

        {currentTab === 'teams' && (
          <TeamManager
            teams={retreatData.teams}
            events={retreatData.events}
            onSaveTeam={handleSaveTeam}
            onDeleteTeam={handleDeleteTeam}
          />
        )}

        {currentTab === 'songs' && (
          <SongManager
            songs={retreatData.songs}
            events={retreatData.events}
            onSaveSong={handleSaveSong}
            onDeleteSong={handleDeleteSong}
            onOpenSongViewer={(song) => setViewingSong(song)}
          />
        )}

        {currentTab === 'admin' && (
          <AdminPanel
            events={retreatData.events}
            teams={retreatData.teams}
            songs={retreatData.songs}
            onSaveEvent={handleSaveEvent}
            onDeleteEvent={handleDeleteEvent}
            onReorderEvents={handleReorderEvents}
            onOpenSongViewer={(song) => setViewingSong(song)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-center text-xs text-stone-500 dark:text-stone-400">
        <p className="font-semibold text-retreat-800 dark:text-stone-300">
          Retiro de Casais PWA • Offline-First
        </p>
        <p className="mt-1 text-[11px] text-stone-400">
          Total de {retreatData.events.length} atividades • {retreatData.teams.length} equipes • {retreatData.songs.length} músicas cifradas
        </p>
      </footer>

      {/* Chords & Lyrics Reader Modal */}
      {viewingSong && (
        <SongViewerModal
          song={viewingSong}
          isOpen={!!viewingSong}
          onClose={() => setViewingSong(null)}
        />
      )}

      {/* File Upload Modal */}
      {fileModalTarget && (
        <FileUploadModal
          isOpen={!!fileModalTarget}
          onClose={() => setFileModalTarget(null)}
          title={fileModalTarget.title}
          attachments={fileModalTarget.attachments}
          onSaveAttachments={handleSaveEventAttachments}
        />
      )}

      {/* Settings / Cloud & Backup Modal */}
      {isSettingsOpen && (
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          retreatData={retreatData}
          onUpdateRetreatData={(updated) => {
            setRetreatData(updated);
            showToast('Dados atualizados com sucesso!');
          }}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold animate-fade-in border border-stone-700 dark:border-stone-200 flex items-center gap-2">
          <span>💍</span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default App;
