import React, { useState, useRef } from 'react';
import { Music, Plus, Search, FileText, Upload, Edit3, Trash2, Eye, Paperclip, Play } from 'lucide-react';
import { Song, EventItem, Attachment } from '../types/retreat';
import { FileUploadModal } from './FileUploadModal';

interface SongManagerProps {
  songs: Song[];
  events: EventItem[];
  onSaveSong: (song: Song) => void;
  onDeleteSong: (id: string) => void;
  onOpenSongViewer: (song: Song) => void;
}

const MUSICAL_KEYS = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'];

export const SongManager: React.FC<SongManagerProps> = ({
  songs,
  events,
  onSaveSong,
  onDeleteSong,
  onOpenSongViewer,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [originalKey, setOriginalKey] = useState('C');
  const [lyricsAndChords, setLyricsAndChords] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);

  const txtInputRef = useRef<HTMLInputElement>(null);

  const filteredSongs = songs.filter(s => {
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.artist?.toLowerCase().includes(q) || s.notes?.toLowerCase().includes(q);
  });

  const handleOpenAdd = () => {
    setEditingSong(null);
    setTitle('');
    setArtist('');
    setOriginalKey('C');
    setLyricsAndChords('');
    setNotes('');
    setSelectedEventIds([]);
    setAttachments([]);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (song: Song) => {
    setEditingSong(song);
    setTitle(song.title);
    setArtist(song.artist || '');
    setOriginalKey(song.originalKey || 'C');
    setLyricsAndChords(song.lyricsAndChords || '');
    setNotes(song.notes || '');
    setSelectedEventIds(song.eventIds || []);
    setAttachments(song.attachments || []);
    setIsFormOpen(true);
  };

  // Read .txt file and auto-populate lyrics/chords
  const handleTxtFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setLyricsAndChords(content);
        if (!title) {
          setTitle(file.name.replace(/\.[^/.]+$/, ""));
        }
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newSong: Song = {
      id: editingSong ? editingSong.id : 'song-' + Date.now(),
      title: title.trim(),
      artist: artist.trim() || undefined,
      originalKey: originalKey || 'C',
      currentKey: originalKey || 'C',
      lyricsAndChords: lyricsAndChords.trim(),
      notes: notes.trim() || undefined,
      eventIds: selectedEventIds,
      attachments
    };

    onSaveSong(newSong);
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Banner & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Music className="w-6 h-6 text-amber-500" />
            Músicas & Cifras (Violeiros)
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Cadastre letras com cifras para violão, faça upload de arquivos .txt ou partituras em PDF, e use a transposição de tom e rolagem automática durante as missas e descontrações.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-retreat-700 hover:bg-retreat-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Música</span>
        </button>
      </div>

      {/* Search Field */}
      <div className="relative">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar música por título, artista ou momento..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
      </div>

      {/* Songs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSongs.length === 0 ? (
          <div className="col-span-full p-12 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
            <Music className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
            <h3 className="font-bold text-stone-700 dark:text-stone-300">Nenhuma música encontrada</h3>
            <p className="text-xs text-stone-500 mt-1">
              Cadastre novas músicas ou importe arquivos de texto com cifras.
            </p>
          </div>
        ) : (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                      {song.title}
                      {song.originalKey && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono font-bold border border-amber-300 dark:border-amber-800">
                          Tom: {song.originalKey}
                        </span>
                      )}
                    </h3>
                    {song.artist && (
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {song.artist}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleOpenEdit(song)}
                      className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Excluir música "${song.title}"?`)) {
                          onDeleteSong(song.id);
                        }
                      }}
                      className="p-1.5 text-red-400 hover:text-red-600"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {song.notes && (
                  <p className="text-xs text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/60 p-2.5 rounded-xl mb-3 border border-stone-100 dark:border-stone-800">
                    {song.notes}
                  </p>
                )}

                {/* Lyrics snippet preview */}
                <div className="font-mono text-[11px] text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-950/60 p-2.5 rounded-xl border border-stone-200/60 dark:border-stone-800 max-h-24 overflow-hidden mb-3 whitespace-pre-line select-none">
                  {song.lyricsAndChords.slice(0, 160)}...
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {song.attachments && song.attachments.length > 0 && (
                    <span className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <Paperclip className="w-3.5 h-3.5" />
                      {song.attachments.length} anexo(s)
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenSongViewer(song)}
                  className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Abrir Cifra & Tom</span>
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* Add / Edit Song Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-2xl w-full h-[90vh] shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col">
            
            <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/50">
              <h3 className="font-bold text-base text-stone-900 dark:text-white flex items-center gap-2">
                <Music className="w-5 h-5 text-amber-500" />
                {editingSong ? 'Editar Música' : 'Cadastrar Nova Música'}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto flex-1">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Título da Música *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Boa Noite Meu Jesus, Oração pela Família"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Tom Original
                  </label>
                  <select
                    value={originalKey}
                    onChange={(e) => setOriginalKey(e.target.value)}
                    className="w-full text-sm px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono font-bold"
                  >
                    {MUSICAL_KEYS.map((k) => (
                      <option key={k} value={k}>{k}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Artista / Autor / Pastoral
                </label>
                <input
                  type="text"
                  placeholder="Ex: Pe. Zezinho, Tradicional, Equipe Alegria"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              {/* Upload TXT shortcut */}
              <div className="flex items-center justify-between pt-1">
                <label className="text-xs font-bold uppercase text-stone-600 dark:text-stone-400">
                  Letra com Cifras para Violão
                </label>
                
                <div>
                  <input
                    type="file"
                    ref={txtInputRef}
                    onChange={handleTxtFileUpload}
                    accept=".txt,.crd,.chopro"
                    className="hidden"
                    id="txt-file-input"
                  />
                  <label
                    htmlFor="txt-file-input"
                    className="cursor-pointer text-xs flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    <Upload className="w-3.5 h-3.5" /> Carregar arquivo .TXT
                  </label>
                </div>
              </div>

              <textarea
                rows={10}
                required
                placeholder="Cole aqui a letra com os acordes sobre as palavras, exemplo:&#10;Tom: G&#10;G                    D/F#&#10;Que nenhuma família comece em qualquer de repente...&#10;Em                     Bm&#10;Que nenhuma família termine por falta de amor..."
                value={lyricsAndChords}
                onChange={(e) => setLyricsAndChords(e.target.value)}
                className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-rose-500 whitespace-pre"
              />

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Observações / Momento Litúrgico
                </label>
                <input
                  type="text"
                  placeholder="Ex: Cantar no final da palestra dos noivos ou na adoração"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              {/* Attachments Section */}
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Partitura ou Anexo em Imagem/PDF ({attachments.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsFileModalOpen(true)}
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Paperclip className="w-3.5 h-3.5" /> Gerenciar Anexos
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-stone-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-retreat-700 hover:bg-retreat-800 text-white"
                >
                  Salvar Música
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* File Upload Modal for Song Attachments */}
      {isFileModalOpen && (
        <FileUploadModal
          isOpen={isFileModalOpen}
          onClose={() => setIsFileModalOpen(false)}
          title={title || 'Partituras / Cifras'}
          attachments={attachments}
          onSaveAttachments={(updated) => setAttachments(updated)}
        />
      )}

    </div>
  );
};
