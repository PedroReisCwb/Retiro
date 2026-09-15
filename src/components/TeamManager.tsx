import React, { useState } from 'react';
import { Users, Plus, Edit3, Trash2, Phone, FileText, CheckCircle2, Shield, Heart } from 'lucide-react';
import { Team, EventItem } from '../types/retreat';

interface TeamManagerProps {
  teams: Team[];
  events: EventItem[];
  onSaveTeam: (team: Team) => void;
  onDeleteTeam: (id: string) => void;
}

const PRESET_COLORS = [
  '#8B5CF6', '#F59E0B', '#3B82F6', '#EC4899',
  '#10B981', '#14B8A6', '#6366F1', '#F97316',
  '#06B6D4', '#64748B', '#D946EF', '#E11D48'
];

export const TeamManager: React.FC<TeamManagerProps> = ({
  teams,
  events,
  onSaveTeam,
  onDeleteTeam,
}) => {
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [couples, setCouples] = useState('');
  const [phone, setPhone] = useState('');
  const [color, setColor] = useState('#8B5CF6');
  const [notes, setNotes] = useState('');

  const handleOpenAdd = () => {
    setEditingTeam(null);
    setName('');
    setCouples('');
    setPhone('');
    setColor('#8B5CF6');
    setNotes('');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (team: Team) => {
    setEditingTeam(team);
    setName(team.name);
    setCouples(team.couples || '');
    setPhone(team.phone || '');
    setColor(team.color || '#8B5CF6');
    setNotes(team.notes || '');
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newTeam: Team = {
      id: editingTeam ? editingTeam.id : 'team-' + Date.now(),
      name: name.trim(),
      couples: couples.trim() || undefined,
      phone: phone.trim() || undefined,
      color: color || '#8B5CF6',
      notes: notes.trim() || undefined,
    };

    onSaveTeam(newTeam);
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Banner & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-rose-500" />
            Equipes de Serviço do Retiro
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Cadastre os casais e membros responsáveis por cada pastoral e acompanhe suas escalas.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2.5 bg-retreat-700 hover:bg-retreat-800 dark:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Nova Equipe</span>
        </button>
      </div>

      {/* Team Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800">
            <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/50">
              <h3 className="font-bold text-base text-stone-900 dark:text-white">
                {editingTeam ? 'Editar Equipe' : 'Cadastrar Nova Equipe'}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Nome da Equipe / Pastoral *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Casal Coordenador, Casal Boa Ordem, Equipe Alegria"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Casais / Integrantes
                </label>
                <input
                  type="text"
                  placeholder="Ex: João e Maria, Carlos e Ana"
                  value={couples}
                  onChange={(e) => setCouples(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Telefone / WhatsApp de Contato
                </label>
                <input
                  type="text"
                  placeholder="Ex: (11) 99999-8888"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Cor de Identificação Visual
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PRESET_COLORS.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        color === c ? 'scale-110 border-stone-900 dark:border-white ring-2 ring-rose-500' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Anotações & Missão da Equipe
                </label>
                <textarea
                  rows={3}
                  placeholder="Orientações específicas, materiais necessários, regras da casa..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-stone-200 dark:border-stone-800">
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
                  Salvar Equipe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teams.map((team) => {
          const assignedEvents = events.filter(
            e => e.teamId === team.id || e.responsible?.toLowerCase().includes(team.name.toLowerCase())
          );

          return (
            <div
              key={team.id}
              className="bg-white dark:bg-stone-900 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-2 h-full"
                style={{ backgroundColor: team.color }}
              />

              <div className="pl-2">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: team.color }}
                    />
                    {team.name}
                  </h3>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleOpenEdit(team)}
                      className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Excluir equipe "${team.name}"?`)) {
                          onDeleteTeam(team.id);
                        }
                      }}
                      className="p-1.5 text-red-400 hover:text-red-600"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {team.couples && (
                  <p className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>{team.couples}</span>
                  </p>
                )}

                {team.phone && (
                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>{team.phone}</span>
                  </p>
                )}

                {team.notes && (
                  <p className="text-xs text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/60 p-2.5 rounded-xl mb-3 border border-stone-100 dark:border-stone-800 leading-relaxed">
                    {team.notes}
                  </p>
                )}
              </div>

              {/* Assigned Activities summary */}
              <div className="pl-2 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <strong>{assignedEvents.length}</strong> atividades no retiro
                </span>

                <span className="text-[11px] text-stone-400">
                  {assignedEvents.map(e => e.time).slice(0, 3).join(', ')}{assignedEvents.length > 3 ? '...' : ''}
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
