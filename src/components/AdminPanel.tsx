import React, { useState } from 'react';
import { Settings, Plus, Edit3, Trash2, Clock, Calendar, Music, Paperclip, Sparkles, Copy, Download, UploadCloud } from 'lucide-react';
import { EventItem, Team, Song, DayOfWeek, Attachment } from '../types/retreat';
import { FileUploadModal } from './FileUploadModal';

interface AdminPanelProps {
  events: EventItem[];
  teams: Team[];
  songs: Song[];
  onSaveEvent: (event: EventItem) => void;
  onDeleteEvent: (id: string) => void;
  onOpenSongViewer: (song: Song) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  events,
  teams,
  songs,
  onSaveEvent,
  onDeleteEvent,
  onOpenSongViewer,
}) => {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('sexta');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);

  // Form states
  const [day, setDay] = useState<DayOfWeek>('sexta');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [teamId, setTeamId] = useState<string>('');
  const [responsible, setResponsible] = useState('');
  const [detailsText, setDetailsText] = useState('');
  const [isHighlight, setIsHighlight] = useState(false);
  const [selectedSongIds, setSelectedSongIds] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);

  const filteredEvents = events.filter(e => e.day === activeDay);

  const handleOpenAdd = () => {
    setEditingEvent(null);
    setDay(activeDay);
    setTime('');
    setTitle('');
    setLocation('');
    setTeamId(teams[0]?.id || '');
    setResponsible(teams[0]?.name || '');
    setDetailsText('');
    setIsHighlight(false);
    setSelectedSongIds([]);
    setAttachments([]);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (ev: EventItem) => {
    setEditingEvent(ev);
    setDay(ev.day);
    setTime(ev.time);
    setTitle(ev.title);
    setLocation(ev.location || '');
    setTeamId(ev.teamId || '');
    setResponsible(ev.responsible);
    setDetailsText(ev.details ? ev.details.join('\n') : '');
    setIsHighlight(!!ev.isHighlight);
    setSelectedSongIds(ev.songIds || []);
    setAttachments(ev.attachments || []);
    setIsFormOpen(true);
  };

  const handleDuplicate = (ev: EventItem) => {
    const duplicated: EventItem = {
      ...ev,
      id: 'ev-' + Date.now(),
      title: `${ev.title} (Cópia)`
    };
    onSaveEvent(duplicated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !time.trim()) return;

    const details = detailsText
      .split('\n')
      .map(d => d.trim())
      .filter(d => d.length > 0);

    const selectedTeam = teams.find(t => t.id === teamId);

    const newEvent: EventItem = {
      id: editingEvent ? editingEvent.id : 'ev-' + Date.now(),
      day,
      time: time.trim(),
      title: title.trim(),
      location: location.trim() || undefined,
      teamId: teamId || undefined,
      responsible: responsible.trim() || selectedTeam?.name || 'Geral',
      details,
      isHighlight,
      songIds: selectedSongIds,
      attachments
    };

    onSaveEvent(newEvent);
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-emerald-500" />
            Cadastro e Edição do Roteiro
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Adicione novas atividades, altere horários, vincule fotos/PDFs e configure as músicas de cada momento.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-retreat-700 hover:bg-retreat-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Nova Atividade</span>
        </button>
      </div>

      {/* Day Selector */}
      <div className="flex rounded-2xl bg-white dark:bg-stone-900 p-1.5 border border-stone-200 dark:border-stone-800">
        {(['sexta', 'sabado', 'domingo'] as DayOfWeek[]).map((d) => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
              activeDay === d
                ? 'bg-retreat-700 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            {d === 'sexta' ? 'Sexta-feira' : d === 'sabado' ? 'Sábado' : 'Domingo'} ({events.filter(e => e.day === d).length})
          </button>
        ))}
      </div>

      {/* Events List in Admin View */}
      <div className="space-y-3">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-retreat-400 transition-colors"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-mono font-bold">
                  {ev.time}
                </span>
                {ev.isHighlight && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                    Destaque
                  </span>
                )}
                <span className="text-xs font-semibold text-retreat-700 dark:text-retreat-300">
                  {ev.responsible}
                </span>
              </div>

              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                {ev.title}
              </h4>

              {ev.details && ev.details.length > 0 && (
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                  {ev.details[0]}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1.5 self-end sm:self-center">
              <button
                onClick={() => handleDuplicate(ev)}
                className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                title="Duplicar Atividade"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleOpenEdit(ev)}
                className="p-2 text-stone-500 hover:text-retreat-700 dark:hover:text-white rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                title="Editar Atividade"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`Excluir "${ev.title}"?`)) {
                    onDeleteEvent(ev.id);
                  }
                }}
                className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
                title="Excluir Atividade"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Add / Edit Event Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-2xl w-full h-[90vh] shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col">
            
            <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/50">
              <h3 className="font-bold text-base text-stone-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500" />
                {editingEvent ? 'Editar Atividade' : 'Cadastrar Atividade'}
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
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Dia do Retiro *
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value as DayOfWeek)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold"
                  >
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                    <option value="domingo">Domingo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Horário (Ex: 06h30) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 08h00, 19h30"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Localização
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Capela, Refeitório"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Título da Atividade / Palestra *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: PALESTRA: QUALIDADE DE VIDA, REFEITÓRIO - ALMOÇO"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Equipe Responsável
                  </label>
                  <select
                    value={teamId}
                    onChange={(e) => {
                      setTeamId(e.target.value);
                      const t = teams.find(item => item.id === e.target.value);
                      if (t) setResponsible(t.name);
                    }}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                  >
                    <option value="">Selecione da lista de equipes</option>
                    {teams.map((t) => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Nome / Quem Executa
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Casal Coordenador, ROGÉRIO e NICE"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Passos e Tarefas Detalhadas (1 por linha)
                </label>
                <textarea
                  rows={5}
                  placeholder="1- Acordar os néos através da sineta;&#10;2- Estipular tempo e verificar se não ficou ninguém no quartos;&#10;3- Convidar todos para o café."
                  value={detailsText}
                  onChange={(e) => setDetailsText(e.target.value)}
                  className="w-full text-xs font-sans px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              {/* Major Moment / Highlight Checkbox */}
              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="highlight-checkbox"
                  checked={isHighlight}
                  onChange={(e) => setIsHighlight(e.target.checked)}
                  className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-stone-300"
                />
                <label htmlFor="highlight-checkbox" className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1 cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Marcar como Momento Especial / Destaque
                </label>
              </div>

              {/* Link Songs Multi-select */}
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1.5">
                  Vincular Músicas
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-36 overflow-y-auto p-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-950/60">
                  {songs.map((song) => {
                    const isSelected = selectedSongIds.includes(song.id);
                    return (
                      <button
                        type="button"
                        key={song.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedSongIds(selectedSongIds.filter(id => id !== song.id));
                          } else {
                            setSelectedSongIds([...selectedSongIds, song.id]);
                          }
                        }}
                        className={`text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between border transition-colors ${
                          isSelected
                            ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-400'
                            : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <span className="truncate">{song.title}</span>
                        {isSelected && <span className="text-rose-600 font-bold ml-1">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Attachments Trigger */}
              <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Imagens ou PDFs Anexados ({attachments.length})
                </span>
                <button
                  type="button"
                  onClick={() => setIsFileModalOpen(true)}
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Paperclip className="w-3.5 h-3.5" /> Adicionar / Ver Anexos
                </button>
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
                  Salvar Atividade
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* File Upload Modal for Event */}
      {isFileModalOpen && (
        <FileUploadModal
          isOpen={isFileModalOpen}
          onClose={() => setIsFileModalOpen(false)}
          title={title || 'Atividade do Retiro'}
          attachments={attachments}
          onSaveAttachments={(updated) => setAttachments(updated)}
        />
      )}

    </div>
  );
};
