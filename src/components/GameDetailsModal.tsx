import React from 'react';
import { GameMod, Platform } from '../types';
import { AndroidIcon, AppleIcon } from './Icons';
import { X, Check, ShieldCheck, Download, Star, Clock, Cpu, HardDrive } from 'lucide-react';

interface GameDetailsModalProps {
  game: GameMod | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (game: GameMod, platform: Platform) => void;
}

export const GameDetailsModal: React.FC<GameDetailsModalProps> = ({
  game,
  isOpen,
  onClose,
  onDownload,
}) => {
  if (!isOpen || !game) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-[#070c14] border border-[#14283d] rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image and title */}
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-lg shrink-0">
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-[#05212b] text-[#00f2fe] border border-[#00f2fe]/40 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-2">
              {game.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide font-chakra">
              {game.title}
            </h2>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-gray-400 mt-1">
              <span className="text-cyan-400 font-semibold">{game.version}</span>
              <span>•</span>
              <span>{game.displaySize}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> {game.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-5 bg-[#040810] p-3.5 rounded-xl border border-[#0f1f30]">
          {game.description}
        </p>

        {/* Mod Features */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-widest text-[#00f2fe] font-bold mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00f2fe]" /> Included Mod Features:
          </h3>
          <div className="space-y-2">
            {game.modFeatures.map((feat, index) => (
              <div 
                key={index}
                className="flex items-center gap-2.5 text-xs text-gray-200 bg-[#0a1420] px-3.5 py-2 rounded-xl border border-[#112338]"
              >
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-[#00f2fe] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-6 font-mono">
          <div className="bg-[#050b12] p-2.5 rounded-xl border border-[#0e1b29]">
            <span className="text-gray-400 block text-[10px] uppercase">Android Req</span>
            <span className="text-white font-bold">{game.compatibility.android}</span>
          </div>
          <div className="bg-[#050b12] p-2.5 rounded-xl border border-[#0e1b29]">
            <span className="text-gray-400 block text-[10px] uppercase">iOS Req</span>
            <span className="text-white font-bold">{game.compatibility.ios}</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              onClose();
              onDownload(game, 'APK');
            }}
            className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all font-chakra"
          >
            <AndroidIcon className="w-4 h-4 text-black" />
            <span>Download APK</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onDownload(game, 'IPA');
            }}
            className="bg-[#0e1927] hover:bg-[#16273e] text-white border border-[#1e3450] hover:border-cyan-400 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold transition-all"
          >
            <AppleIcon className="w-4 h-4 text-white" />
            <span>Download IPA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
