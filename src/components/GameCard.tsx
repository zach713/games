import React from 'react';
import { GameMod, Platform } from '../types';
import { AndroidIcon, AppleIcon } from './Icons';
import { Info, Gift, Sparkles } from 'lucide-react';
import { getFallbackImage } from '../utils/imageFallback';

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
  const isCode = game.itemType === 'code';

  return (
    <div className={`group relative bg-[#070c14] border ${isCode ? 'border-amber-500/40 hover:border-amber-400' : 'border-[#121f2f] hover:border-cyan-500/50'} rounded-3xl p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(0,242,254,0.12)]`}>
      {/* Top Badge matching Screenshot */}
      <div className="mb-3.5 flex items-center justify-center">
        <span className={`${isCode ? 'bg-[#2b1e05] text-[#fbbf24] border-amber-400/50 shadow-[0_0_12px_rgba(251,191,36,0.3)]' : 'bg-[#05212b] text-[#00f2fe] border-[#00f2fe]/40 shadow-[0_0_10px_rgba(0,242,254,0.25)]'} border text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider select-none flex items-center gap-1`}>
          {isCode && <Sparkles className="w-3 h-3 text-amber-400" />}
          {game.badge}
        </span>
      </div>

      {/* App / Code Icon */}
      <div 
        className="relative mb-3.5 cursor-pointer"
        onClick={() => onViewDetails(game)}
        title={`View details for ${game.title}`}
      >
        <div className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border ${isCode ? 'border-amber-400/40' : 'border-white/10'} group-hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-[1.02] relative`}>
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover select-none"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = getFallbackImage(game.title);
            }}
          />
          {game.rating && (
            <div className="absolute top-1.5 right-1.5 bg-black/85 backdrop-blur-md border border-yellow-500/50 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 shadow-lg select-none">
              <span className="text-yellow-400 text-[11px] leading-none">★</span>
              <span className="leading-none">{game.rating.toFixed(1)}</span>
            </div>
          )}
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

      {/* Title */}
      <h3 
        onClick={() => onViewDetails(game)}
        className="font-bold uppercase text-white tracking-wide text-sm sm:text-base leading-tight mb-1 cursor-pointer hover:text-[#00f2fe] transition-colors line-clamp-2 min-h-[2.5rem] flex items-center justify-center w-full px-1"
        title={game.title}
      >
        {game.shortTitle || game.title}
      </h3>

      {/* Genre / Similar Theme */}
      {game.similarTheme && (
        <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase mb-1.5 px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/30">
          {game.similarTheme}
        </span>
      )}

      {/* Short Description */}
      <p className="text-[11px] text-gray-400 line-clamp-2 mb-2 leading-relaxed px-1 font-sans">
        {game.description}
      </p>

      {/* Version & Size info */}
      <p className="text-xs text-[#526a85] font-medium mb-3.5 tracking-tight font-mono">
        {game.version} • {game.displaySize}
      </p>

      {/* Buttons */}
      {isCode ? (
        <div className="grid grid-cols-2 gap-2 w-full mt-auto">
          <a
            href={game.redirectUrl || 'https://eggpethub.blogspot.com/'}
            className="bg-gradient-to-r from-amber-500/20 to-amber-600/30 hover:from-amber-500/30 hover:to-amber-500/40 active:scale-95 text-amber-300 border border-amber-500/60 hover:border-amber-400 rounded-xl py-2 px-2.5 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_0_12px_rgba(251,191,36,0.15)] select-none text-center"
            title={`Claim Steal an Egg Codes for Android / PC`}
          >
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-wider">CLAIM (AND)</span>
          </a>

          <a
            href={game.redirectUrl || 'https://eggpethub.blogspot.com/'}
            className="bg-[#0b141f] hover:bg-[#122235] active:scale-95 text-white border border-[#1b2f48] hover:border-amber-400/70 rounded-xl py-2 px-2.5 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_12px_rgba(251,191,36,0.2)] select-none text-center"
            title={`Claim Steal an Egg Codes for iOS`}
          >
            <AppleIcon className="w-3.5 h-3.5 text-gray-200 group-hover:text-white" />
            <span className="tracking-wider">CLAIM (iOS)</span>
          </a>
        </div>
      ) : (
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
      )}
    </div>
  );
};

