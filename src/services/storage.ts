import { RetreatData } from '../types/retreat';
import { INITIAL_RETREAT_DATA } from '../data/defaultRetreatData';

const STORAGE_KEY = 'retiro_casais_pwa_data_v1';

export function loadRetreatData(): RetreatData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure essential arrays exist
      return {
        retreatTitle: parsed.retreatTitle || INITIAL_RETREAT_DATA.retreatTitle,
        retreatSubtitle: parsed.retreatSubtitle || INITIAL_RETREAT_DATA.retreatSubtitle,
        events: Array.isArray(parsed.events) ? parsed.events : INITIAL_RETREAT_DATA.events,
        teams: Array.isArray(parsed.teams) ? parsed.teams : INITIAL_RETREAT_DATA.teams,
        songs: Array.isArray(parsed.songs) ? parsed.songs : INITIAL_RETREAT_DATA.songs,
        supabaseConfig: parsed.supabaseConfig
      };
    }
  } catch (err) {
    console.error('Failed to load retreat data from localStorage:', err);
  }
  return INITIAL_RETREAT_DATA;
}

export function saveRetreatData(data: RetreatData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save retreat data to localStorage:', err);
  }
}

export function resetToDefaultData(): RetreatData {
  saveRetreatData(INITIAL_RETREAT_DATA);
  return INITIAL_RETREAT_DATA;
}

export function exportBackupJson(data: RetreatData): void {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data, null, 2)
  )}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  downloadAnchor.setAttribute('download', `backup_retiro_casais_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function parseImportedJson(jsonText: string): RetreatData {
  const parsed = JSON.parse(jsonText);
  if (!parsed.events || !Array.isArray(parsed.events)) {
    throw new Error('Formato de arquivo inválido: lista de eventos ausente.');
  }
  return {
    retreatTitle: parsed.retreatTitle || INITIAL_RETREAT_DATA.retreatTitle,
    retreatSubtitle: parsed.retreatSubtitle || INITIAL_RETREAT_DATA.retreatSubtitle,
    events: parsed.events,
    teams: Array.isArray(parsed.teams) ? parsed.teams : INITIAL_RETREAT_DATA.teams,
    songs: Array.isArray(parsed.songs) ? parsed.songs : INITIAL_RETREAT_DATA.songs,
    supabaseConfig: parsed.supabaseConfig
  };
}
