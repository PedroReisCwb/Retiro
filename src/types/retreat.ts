export type DayOfWeek = 'sexta' | 'sabado' | 'domingo';

export interface Attachment {
  id: string;
  name: string;
  type: 'image' | 'pdf';
  dataUrl: string; // Base64 or URL
  size: number; // in bytes
  createdAt: string;
  caption?: string;
}

export interface Team {
  id: string;
  name: string;
  couples?: string; // e.g. "João e Maria, Carlos e Ana"
  members?: string;
  color: string; // Hex color code or Tailwind badge color
  phone?: string;
  notes?: string;
}

export interface Song {
  id: string;
  title: string;
  artist?: string;
  originalKey?: string;
  currentKey?: string;
  lyricsAndChords: string; // raw text with chords
  eventIds?: string[];
  attachments?: Attachment[];
  notes?: string;
}

export interface EventItem {
  id: string;
  day: DayOfWeek;
  time: string;
  title: string;
  details: string[];
  teamId?: string;
  responsible: string; // "Quem"
  songIds?: string[];
  attachments?: Attachment[];
  location?: string;
  isHighlight?: boolean;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  isConnected: boolean;
  lastSync?: string;
}

export interface RetreatData {
  retreatTitle: string;
  retreatSubtitle: string;
  events: EventItem[];
  teams: Team[];
  songs: Song[];
  supabaseConfig?: SupabaseConfig;
}
