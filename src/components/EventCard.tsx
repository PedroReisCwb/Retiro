import React from 'react';
import { Clock, MapPin, Music, Paperclip, Edit3, Trash2, Sparkles, Image as ImageIcon, FileText } from 'lucide-react';
import { EventItem, Team, Song, Attachment } from '../types/retreat';

interface EventCardProps {
  event: EventItem;
  team?: Team;
  songs: Song[];
  isAdmin?: boolean;
  onOpenSong: (song: Song) => void;
  onOpenAttachments: (event: EventItem) => void;
  onEditEvent?: (event: EventItem) => void;
  onDeleteEvent?: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  team,
  songs,
  isAdmin = false,
  onOpenSong,
  onOpenAttachments,
  onEditEvent,
  onDeleteEvent,
}) => {
  const linkedSongs = songs.filter(s => event.songIds?.includes(s.id));
  const attachments = event.attachments || [];

  const teamBg = team?.color ? `${team.color}18` : '#8B5CF618';
  const teamBorder = team?.color ? `${team.color}40` : '#8B5CF640';
  const teamText = team?.color || '#8B5CF6';

  return (
    <div
      className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-200 border ${
        event.isHighlight
          ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300/80 dark:border-amber-700/60 shadow-sm ring-1 ring-amber-400/20'
          : 'bg-white dark:bg-stone-900 border-stone-200/90 dark:border-stone-800 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        
        {/* Time & Highlight Badge */}
        <div className="flex items-center space-x-2.5">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-bold text-sm tracking-tight border border-stone-200 dark:border-stone-700">
            <Clock className="w-4 h-4 text-rose-500" />
            <span>{event.time}</span>
          </div>

          {event.isHighlight && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-400/40">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Destaque
            </span>
          )}

          {event.location && (
            <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              {event.location}
            </span>
          )}
        </div>

        {/* Responsible Tag / Team Badge */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          <div
            className="px-3 py-1 rounded-xl text-xs font-semibold border flex items-center gap-1.5"
            style={{ backgroundColor: teamBg, borderColor: teamBorder, color: teamText }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: teamText }} />
            <span>{event.responsible || team?.name || 'Geral'}</span>
          </div>

          {/* Admin Controls */}
          {isAdmin && (
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onEditEvent?.(event)}
                className="p-1.5 text-stone-500 hover:text-stone-800 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                title="Editar Atividade"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDeleteEvent?.(event.id)}
                className="p-1.5 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                title="Excluir Atividade"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Activity Title */}
      <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-2">
        {event.title}
      </h3>

      {/* Detail Steps */}
      {event.details && event.details.length > 0 && (
        <div className="space-y-1.5 mb-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50/70 dark:bg-stone-800/40 p-3 rounded-xl border border-stone-100 dark:border-stone-800/80">
          {event.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-rose-500 font-bold text-xs mt-0.5">•</span>
              <p className="flex-1">{detail}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Bar: Songs & Attachments */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/60">
        
        {/* Linked Songs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {linkedSongs.length > 0 ? (
            linkedSongs.map((song) => (
              <button
                key={song.id}
                onClick={() => onOpenSong(song)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors shadow-sm"
              >
                <Music className="w-3.5 h-3.5 text-rose-500" />
                <span>{song.title}</span>
                {song.originalKey && (
                  <span className="text-[10px] bg-rose-200 dark:bg-rose-900 px-1 rounded font-mono">
                    {song.originalKey}
                  </span>
                )}
              </button>
            ))
          ) : null}
        </div>

        {/* Attachments (Images & PDFs) */}
        <div className="flex items-center space-x-1">
          {attachments.length > 0 && (
            <button
              onClick={() => onOpenAttachments(event)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 hover:bg-blue-100 transition-colors"
            >
              <Paperclip className="w-3.5 h-3.5 text-blue-500" />
              <span>{attachments.length} anexo{attachments.length > 1 ? 's' : ''}</span>
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => onOpenAttachments(event)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
              title="Gerenciar Anexos"
            >
              <Paperclip className="w-3.5 h-3.5" />
              <span className="text-[11px]">+ Anexo</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
