import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export const PwaInstallBanner: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the default install prompt from showing
      e.preventDefault();
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

  return (
    <>
      {/* Offline Status Warning */}
      {isOffline && (
        <div className="bg-amber-600 text-white text-xs px-4 py-2 text-center flex items-center justify-center gap-2 font-medium shadow-sm">
          <WifiOff className="w-4 h-4" />
          <span>Você está no <strong>Modo Offline</strong>. O aplicativo e todas as cifras continuam funcionando normalmente!</span>
        </div>
      )}
    </>
  );
};
