import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Plus, Minus, RotateCcw, ZoomIn, ZoomOut, Music, Download } from 'lucide-react';
import { Song } from '../types/retreat';
import { transposeLyricsAndChords, isChordLine } from '../services/chordTransposer';

interface SongViewerModalProps {
  song: Song | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SongViewerModal: React.FC<SongViewerModalProps> = ({
  song,
  isOpen,
  onClose,
}) => {
  const [semitones, setSemitones] = useState<number>(0);
  const [fontSize, setFontSize] = useState<number>(15);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);
  const [scrollSpeed, setScrollSpeed] = useState<number>(2); // pixels per interval
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // Reset states when song changes
  useEffect(() => {
    if (song) {
      setSemitones(0);
      setIsAutoScrolling(false);
    }
  }, [song]);

  // Handle auto-scrolling
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
          if (scrollTop + clientHeight >= scrollHeight - 2) {
            setIsAutoScrolling(false);
          } else {
            scrollContainerRef.current.scrollTop += scrollSpeed * 0.7;
          }
        }
      }, 50);
    } else {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, scrollSpeed]);

  if (!isOpen || !song) return null;

  const transposedText = transposeLyricsAndChords(song.lyricsAndChords, semitones);
  const lines = transposedText.split('\n');

  const getSemitoneLabel = () => {
    if (semitones === 0) return 'Tom Original';
    return `${semitones > 0 ? '+' : ''}${semitones} st`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-2xl max-w-4xl w-full h-[95vh] shadow-2xl flex flex-col overflow-hidden border border-stone-200 dark:border-stone-800">
        
        {/* Header Toolbar */}
        <div className="p-3 sm:p-4 bg-retreat-800 dark:bg-stone-950 text-white flex flex-wrap items-center justify-between gap-2 border-b border-retreat-700 dark:border-stone-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold truncate max-w-xs sm:max-w-md">
                {song.title}
              </h2>
              {song.artist && (
                <p className="text-xs text-retreat-200 dark:text-stone-400">
                  {song.artist}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-retreat-700/80 hover:bg-retreat-700 text-white"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Musician Control Bar (Transposition, Font Size, Auto-Scroll) */}
        <div className="p-2 sm:p-3 bg-stone-100 dark:bg-stone-800/80 border-b border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          
          {/* Transposition Controls */}
          <div className="flex items-center space-x-1 bg-white dark:bg-stone-900 p-1 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700">
            <span className="px-2 font-medium text-stone-600 dark:text-stone-300">
              Tom: <strong className="text-rose-600 dark:text-rose-400">{getSemitoneLabel()}</strong>
            </span>
            <button
              onClick={() => setSemitones(prev => prev - 1)}
              className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold"
              title="Diminuir meio-tom (-1)"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            {semitones !== 0 && (
              <button
                onClick={() => setSemitones(0)}
                className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-amber-600"
                title="Restaurar tom original"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => setSemitones(prev => prev + 1)}
              className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold"
              title="Aumentar meio-tom (+1)"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size Adjuster */}
          <div className="flex items-center space-x-1 bg-white dark:bg-stone-900 p-1 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700">
            <button
              onClick={() => setFontSize(prev => Math.max(12, prev - 1))}
              className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
              title="Diminuir fonte"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 font-mono text-stone-500">{fontSize}px</span>
            <button
              onClick={() => setFontSize(prev => Math.min(26, prev + 1))}
              className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300"
              title="Aumentar fonte"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Auto Scroll Controls for Guitarists */}
          <div className="flex items-center space-x-2 bg-white dark:bg-stone-900 px-2 py-1 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                isAutoScrolling
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoScrolling ? 'Pausar Rolagem' : 'Rolar Cifra'}</span>
            </button>

            <div className="flex items-center space-x-1 text-stone-500">
              <span className="text-[10px] uppercase font-bold">Vel:</span>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={scrollSpeed}
                onChange={(e) => setScrollSpeed(Number(e.target.value))}
                className="w-16 accent-rose-600 cursor-pointer"
                title={`Velocidade: ${scrollSpeed}`}
              />
            </div>
          </div>

        </div>

        {/* Chords and Lyrics Reader Screen */}
        <div
          ref={scrollContainerRef}
          className="flex-1 p-4 sm:p-8 overflow-y-auto bg-stone-50 dark:bg-stone-900/90 font-mono select-text"
          style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
        >
          {song.notes && (
            <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-sans">
              <strong>Observação:</strong> {song.notes}
            </div>
          )}

          <div className="space-y-1 pb-16">
            {lines.map((line, index) => {
              const isChord = isChordLine(line);
              return (
                <div
                  key={index}
                  className={`whitespace-pre ${
                    isChord
                      ? 'font-bold text-rose-600 dark:text-rose-400 py-0.5'
                      : 'text-stone-800 dark:text-stone-200'
                  }`}
                >
                  {line || '\u00A0'}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
