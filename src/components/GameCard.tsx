import React from 'react';
import { GameMod, Platform } from '../types';
import { AndroidIcon, AppleIcon } from './Icons';
import { Info } from 'lucide-react';

interface GameCardProps {
  game: GameMod;
  onDownload: (game: GameMod, platform: Platform) => void;
  onViewDetails: (game: GameMod) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onDownload,
  onViewDetails,
}) => {
  return (
    <div className="group relative bg-[#070c14] border border-[#121f2f] hover:border-cyan-500/50 rounded-3xl p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(0,242,254,0.12)]">
      {/* Top Badge matching Screenshot */}
      <div className="mb-3.5 flex items-center justify-center">
        <span className="bg-[#05212b] text-[#00f2fe] border border-[#00f2fe]/40 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(0,242,254,0.25)] select-none">
          {game.badge}
        </span>
      </div>

      {/* Game App Icon matching Screenshot */}
      <div 
        className="relative mb-3.5 cursor-pointer"
        onClick={() => onViewDetails(game)}
        title={`View details for ${game.title}`}
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-[1.02]">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(game);
          }}
          className="absolute bottom-1 right-1 bg-black/60 hover:bg-cyan-500/80 p-1.5 rounded-lg text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          title="Mod Info & Features"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Game Title */}
      <h3 
        onClick={() => onViewDetails(game)}
        className="font-bold uppercase text-white tracking-wide text-sm sm:text-base leading-tight mb-1 cursor-pointer hover:text-[#00f2fe] transition-colors line-clamp-1 w-full px-1"
        title={game.title}
      >
        {game.shortTitle || game.title}
      </h3>

      {/* Version & Size info */}
      <p className="text-xs text-[#526a85] font-medium mb-4 tracking-tight">
        {game.version} • {game.displaySize}
      </p>

      {/* Dual Platform Download Buttons matching Screenshot */}
      <div className="grid grid-cols-2 gap-2 w-full mt-auto">
        <button
          onClick={() => onDownload(game, 'APK')}
          className="bg-[#0b141f] hover:bg-[#122235] active:scale-95 text-white border border-[#1b2f48] hover:border-cyan-400/70 rounded-xl py-2 px-2.5 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(0,242,254,0.2)]"
          title={`Download APK for Android (${game.title})`}
        >
          <AndroidIcon className="w-3.5 h-3.5 text-[#00f2fe]" />
          <span className="tracking-wider">APK</span>
        </button>

        <button
          onClick={() => onDownload(game, 'IPA')}
          className="bg-[#0b141f] hover:bg-[#122235] active:scale-95 text-white border border-[#1b2f48] hover:border-cyan-400/70 rounded-xl py-2 px-2.5 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(0,242,254,0.2)]"
          title={`Download IPA for iOS (${game.title})`}
        >
          <AppleIcon className="w-3.5 h-3.5 text-gray-200 group-hover:text-white" />
          <span className="tracking-wider">IPA</span>
        </button>
      </div>
    </div>
  );
};
