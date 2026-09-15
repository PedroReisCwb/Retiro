import React, { useState, useEffect } from 'react';
import { Download, WifiOff, X, Sparkles } from 'lucide-react';

export const PwaInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <>
      {/* Offline Status Warning */}
      {isOffline && (
        <div className="bg-amber-600 text-white text-xs px-4 py-2 text-center flex items-center justify-center gap-2 font-medium shadow-sm">
          <WifiOff className="w-4 h-4" />
          <span>Você está no <strong>Modo Offline</strong>. O aplicativo e todas as cifras continuam funcionando normalmente!</span>
        </div>
      )}

      {/* PWA Install Promo */}
      {isInstallable && !dismissed && (
        <div className="bg-gradient-to-r from-retreat-800 to-rose-900 text-white p-3 sm:p-4 text-xs sm:text-sm flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold">Instalar Retiro de Casais no seu celular</p>
              <p className="text-[11px] text-retreat-200">Acesse offline na casa de retiro mesmo sem sinal de internet.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-retreat-950 font-bold rounded-lg text-xs flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Instalar App</span>
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-retreat-200 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
