// Musical notes with sharp and flat representations
const SCALE_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const SCALE_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const CHORD_REGEX = /\b([A-G][b#]?)(m|M|maj|min|dim|aug|sus[24]?|add[29]?|[0-9]+)*(\/[A-G][b#]?)?\b/g;

export function transposeChord(chord: string, semitones: number): string {
  if (semitones === 0) return chord;

  const replaceNote = (note: string): string => {
    let index = SCALE_SHARP.indexOf(note);
    if (index === -1) {
      index = SCALE_FLAT.indexOf(note);
    }
    if (index === -1) return note;

    let newIndex = (index + semitones) % 12;
    if (newIndex < 0) newIndex += 12;

    return SCALE_SHARP[newIndex];
  };

  // If chord has a bass note (e.g., D/F#)
  if (chord.includes('/')) {
    const [mainPart, bass] = chord.split('/');
    const transposedMain = transposeChord(mainPart, semitones);
    const transposedBass = replaceNote(bass);
    return `${transposedMain}/${transposedBass}`;
  }

  // Match root note and suffixes
  const match = chord.match(/^([A-G][b#]?)(.*)$/);
  if (!match) return chord;

  const root = match[1];
  const suffix = match[2] || '';
  const transposedRoot = replaceNote(root);

  return `${transposedRoot}${suffix}`;
}

export function transposeLyricsAndChords(text: string, semitones: number): string {
  if (semitones === 0) return text;

  const lines = text.split('\n');
  return lines.map(line => {
    // Check if line looks like a chord line or "Tom: X"
    if (line.trim().startsWith('Tom:')) {
      const match = line.match(/^Tom:\s*([A-G][b#]?[m]?)/i);
      if (match) {
        const currentKey = match[1];
        const transposedKey = transposeChord(currentKey, semitones);
        return line.replace(currentKey, transposedKey);
      }
    }

    // Replace chords inside line
    return line.replace(CHORD_REGEX, (match) => {
      // Avoid replacing common words like A, E, Em (in Portuguese) if they look like plain words in lyric lines
      // Heuristic: If line contains mostly words with accents or punctuation, check carefully
      return transposeChord(match, semitones);
    });
  }).join('\n');
}

export function isChordLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) return true; // e.g. [Intro], [Refrão]
  if (trimmed.startsWith('Tom:')) return true;

  const words = trimmed.split(/\s+/);
  if (words.length === 0) return false;

  let chordCount = 0;
  for (const word of words) {
    if (CHORD_REGEX.test(word)) {
      chordCount++;
    }
  }

  // If at least 50% of the words are recognized chords
  return chordCount / words.length >= 0.5;
}
