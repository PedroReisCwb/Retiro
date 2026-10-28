import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Calendar, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { EventItem, Team, Song, DayOfWeek } from '../types/retreat';
import { EventCard } from './EventCard';

interface TimelineViewProps {
  events: EventItem[];
  teams: Team[];
  songs: Song[];
  onOpenSong: (song: Song) => void;
  onOpenAttachments: (event: EventItem) => void;
}

export type TimelineSortMode = 'roteiro' | 'time-asc' | 'time-desc';

export const TimelineView: React.FC<TimelineViewProps> = ({
  events,
  teams,
  songs,
  onOpenSong,
  onOpenAttachments,
}) => {
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('sexta');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState<string>('all');
  const [onlyHighlights, setOnlyHighlights] = useState(false);
  const [sortMode, setSortMode] = useState<TimelineSortMode>('roteiro');

  // Filter and sort events by day, team, search query, highlights, sort mode
  const filteredEvents = useMemo(() => {
    const filtered = events.filter((ev) => {
      if (ev.day !== selectedDay) return false;
      if (onlyHighlights && !ev.isHighlight) return false;
      if (selectedTeamId !== 'all') {
        if (ev.teamId !== selectedTeamId && !ev.responsible?.toLowerCase().includes(selectedTeamId.toLowerCase())) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = ev.title.toLowerCase().includes(q);
        const matchesResponsible = ev.responsible?.toLowerCase().includes(q);
        const matchesLocation = ev.location?.toLowerCase().includes(q);
        const matchesDetails = ev.details?.some(d => d.toLowerCase().includes(q));
        if (!matchesTitle && !matchesResponsible && !matchesLocation && !matchesDetails) {
          return false;
        }
      }
      return true;
    });

    if (sortMode === 'time-asc') {
      return [...filtered].sort((a, b) => a.time.localeCompare(b.time));
    }
    if (sortMode === 'time-desc') {
      return [...filtered].sort((a, b) => b.time.localeCompare(a.time));
    }
    // 'roteiro' maintains the custom schedule order
    return filtered;
  }, [events, selectedDay, selectedTeamId, searchQuery, onlyHighlights, sortMode]);

  // Count events per day
  const dayCounts = useMemo(() => {
    return {
      sexta: events.filter(e => e.day === 'sexta').length,
      sabado: events.filter(e => e.day === 'sabado').length,
      domingo: events.filter(e => e.day === 'domingo').length,
    };
  }, [events]);

  const teamMap = useMemo(() => {
    const map = new Map<string, Team>();
    teams.forEach(t => map.set(t.id, t));
    return map;
  }, [teams]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Day Selector Pills */}
      <div className="bg-white dark:bg-stone-900 p-2 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
        <button
          onClick={() => setSelectedDay('sexta')}
          className={`flex-1 py-3 px-3 rounded-xl font-bold text-sm sm:text-base transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
            selectedDay === 'sexta'
              ? 'bg-retreat-700 text-white shadow-md'
              : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <span>Sexta-feira</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            selectedDay === 'sexta' ? 'bg-retreat-800 text-retreat-100' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
          }`}>
            {dayCounts.sexta} atos
          </span>
        </button>

        <button
          onClick={() => setSelectedDay('sabado')}
          className={`flex-1 py-3 px-3 rounded-xl font-bold text-sm sm:text-base transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
            selectedDay === 'sabado'
              ? 'bg-retreat-700 text-white shadow-md'
              : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <span>Sábado</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            selectedDay === 'sabado' ? 'bg-retreat-800 text-retreat-100' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
          }`}>
            {dayCounts.sabado} atos
          </span>
        </button>

        <button
          onClick={() => setSelectedDay('domingo')}
          className={`flex-1 py-3 px-3 rounded-xl font-bold text-sm sm:text-base transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
            selectedDay === 'domingo'
              ? 'bg-retreat-700 text-white shadow-md'
              : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <span>Domingo</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            selectedDay === 'domingo' ? 'bg-retreat-800 text-retreat-100' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
          }`}>
            {dayCounts.domingo} atos
          </span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        
        {/* Search Field */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por palestra, oração, casal ou detalhe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Team Filter Dropdown */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <select
              value={selectedTeamId}
              onChange={(e) => setSelectedTeamId(e.target.value)}
              className="text-xs sm:text-sm pl-3 pr-8 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
            >
              <option value="all">Todas as Equipes</option>
              {teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <Filter className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Highlights Toggle */}
          <button
            onClick={() => setOnlyHighlights(!onlyHighlights)}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm border ${
              onlyHighlights
                ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20'
                : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:bg-stone-50'
            }`}
            title="Mostrar apenas momentos principais e palestras"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden xs:inline">Destaques</span>
          </button>

          {/* Visualization Order Selector */}
          <div className="relative">
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as TimelineSortMode)}
              className="text-xs sm:text-sm pl-8 pr-7 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
              title="Mudar ordem de visualização"
            >
              <option value="roteiro">Ordem do Roteiro</option>
              <option value="time-asc">Horário Crescente (↑)</option>
              <option value="time-desc">Horário Decrescente (↓)</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
            <Calendar className="w-12 h-12 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
            <h3 className="font-bold text-stone-700 dark:text-stone-300">Nenhuma atividade encontrada</h3>
            <p className="text-xs text-stone-500 mt-1">
              Tente ajustar os filtros ou a busca para visualizar as programações.
            </p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              team={event.teamId ? teamMap.get(event.teamId) : undefined}
              songs={songs}
              onOpenSong={onOpenSong}
              onOpenAttachments={onOpenAttachments}
            />
          ))
        )}
      </div>

    </div>
  );
};
