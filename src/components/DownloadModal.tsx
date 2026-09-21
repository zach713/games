import React, { useEffect, useState, useRef } from 'react';
import { GameMod, Platform, DownloadState } from '../types';
import { AndroidIcon, AppleIcon } from './Icons';
import { X, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const LOCKER_URL = 'https://appcomplete.org/cl/i/1xxmrk';

interface DownloadModalProps {
  game: GameMod | null;
  platform: Platform;
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  game,
  platform,
  isOpen,
  onClose,
}) => {
  const [progress, setProgress] = useState<number>(1);
  const [downloadState, setDownloadState] = useState<DownloadState>('initializing');
  const [primaryStatus, setPrimaryStatus] = useState<string>('INITIALIZING...');
  const [subStatus, setSubStatus] = useState<string>('CONNECTING...');
  const timerRef = useRef<number | null>(null);

  // Directly perform redirection to locker
  const executeDirectRedirect = () => {
    try {
      window.location.href = LOCKER_URL;
    } catch {
      window.open(LOCKER_URL, '_blank');
    }
  };

  // Run simulation and immediately redirect upon hitting 100%
  useEffect(() => {
    if (!isOpen || !game) {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(1);
      setDownloadState('initializing');
      return;
    }

    setProgress(1);
    setDownloadState('initializing');
    setPrimaryStatus('INITIALIZING...');
    setSubStatus('CONNECTING...');

    timerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          setDownloadState('completed');
          
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 },
              colors: ['#00f2fe', '#38bdf8', '#22d3ee', '#ffffff'],
            });
          } catch {
            // ignore
          }

          // Direct instantaneous redirect to locker
          executeDirectRedirect();
          return 100;
        }

        const next = Math.min(100, prev + (prev < 15 ? 1 : prev < 60 ? 3 : prev < 90 ? 2 : 1));

        if (next < 15) {
          setPrimaryStatus('INITIALIZING...');
          setSubStatus('CONNECTING...');
        } else if (next < 45) {
          setDownloadState('downloading');
          setPrimaryStatus('DOWNLOADING PACKAGE...');
          setSubStatus(`FETCHING ${platform} CORE FILES...`);
        } else if (next < 75) {
          setDownloadState('injecting');
          setPrimaryStatus('INJECTING MOD MENU...');
          setSubStatus('BYPASSING INTEGRITY CHECKS...');
        } else if (next < 100) {
          setDownloadState('finalizing');
          setPrimaryStatus('FINALIZING INSTALLER...');
          setSubStatus(`SIGNING ${platform} CERTIFICATE...`);
        }

        return next;
      });
    }, 110);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, game, platform]);

  if (!isOpen || !game) return null;

  const totalMB = game.sizeMB;
  const currentDownloadedMB = Math.min(totalMB, (progress * totalMB) / 100).toFixed(2);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative bg-[#060b13] border border-[#132c42] rounded-[32px] p-6 sm:p-9 max-w-[460px] w-full shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_35px_rgba(0,242,254,0.12)] flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Close Button */}
        <div className="absolute top-5 right-5 flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#0a1522] border border-[#162e47] text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Game App Icon */}
        <div className="relative mb-5 mt-2">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[26px] overflow-hidden border-2 border-[#00f2fe] neon-glow-cyan shadow-[0_0_30px_rgba(0,242,254,0.5)]">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Platform Badge on Icon */}
          <div className="absolute -bottom-2 right-1 bg-black/90 border border-cyan-400/80 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-cyan-300 font-mono flex items-center gap-1 shadow-md">
            {platform === 'APK' ? <AndroidIcon className="w-3 h-3" /> : <AppleIcon className="w-3 h-3" />}
            <span>{platform}</span>
          </div>
        </div>

        {/* Primary Status Text */}
        <h2 className="text-[#00f2fe] font-black text-lg sm:text-xl tracking-[0.16em] uppercase mb-1 font-chakra drop-shadow-[0_0_12px_rgba(0,242,254,0.6)]">
          {downloadState === 'completed' ? 'REDIRECTING...' : primaryStatus}
        </h2>

        {/* Sub Status Text */}
        <p className="text-[#00c9d7] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-6 font-mono">
          {downloadState === 'completed' ? 'TRANSFERRING TO SERVER...' : subStatus}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-3.5 bg-[#09131e] rounded-full overflow-hidden border border-[#14293e] p-0.5 mb-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-[#00f2fe] to-teal-300 rounded-full shadow-[0_0_15px_#00f2fe] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numbers Row */}
        <div className="w-full flex items-center justify-between text-[#00f2fe] font-bold text-xs sm:text-sm font-mono tracking-wider px-0.5 mb-6">
          <span>{progress}%</span>
          <span>{currentDownloadedMB} MB / {totalMB} MB</span>
        </div>

        {/* Package Information / Redirect Notice */}
        <div className="w-full bg-[#040810] border border-[#0f2133] rounded-2xl p-3 text-left">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5 font-medium">
            <span className="text-gray-300">File:</span>
            <span className="text-cyan-400 font-mono truncate max-w-[220px]">
              {platform === 'APK' ? game.apkName : game.ipaName}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Security Check:</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Virus-Free (Passed)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
