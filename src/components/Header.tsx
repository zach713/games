import React from 'react';
import { Search, X, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  totalGames: number;
}

const CATEGORIES = [
  'All Items',
  'Simulators',
  'Action & RPG',
  'Casual & Creative',
  'Mod Menu',
  'Free Codes'
];

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  totalGames,
}) => {
  return (
    <header className="pt-8 pb-6 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

      {/* Brand Logo matching Screenshot */}
      <div className="relative mb-6 text-center select-none group cursor-pointer" onClick={() => { setSearchQuery(''); setSelectedCategory('All Mods'); }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.2em] uppercase font-chakra flex items-center justify-center gap-1.5">
          <span className="text-white tracking-[0.22em] drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            MODIVERS
          </span>
          <span className="text-[#00f2fe] neon-glow-cyan drop-shadow-[0_0_20px_rgba(0,242,254,0.9)] tracking-[0.22em]">
            PRO
          </span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-1.5 text-[11px] uppercase tracking-widest text-cyan-400/80 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Safe & Verified
          </span>
          <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-cyan-400" /> High Speed Mirrors
          </span>
          <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> No Root / Jailbreak
          </span>
        </div>
      </div>

      {/* Search Input matching Screenshot */}
      <div className="w-full max-w-xl relative mb-5">
        <div className="relative flex items-center">
          <input
            type="text"
            id="search-games-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Game... 🔍"
            className="w-full bg-[#050b14] border border-[#0d2138] focus:border-[#00f2fe] hover:border-cyan-800/80 text-white placeholder:text-[#506884] text-sm sm:text-base rounded-full px-6 py-3.5 pr-12 outline-none transition-all duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] focus:shadow-[0_0_20px_rgba(0,242,254,0.25)] font-medium"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 p-1 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-cyan-500/20 text-[#00f2fe] border border-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                  : 'bg-[#080f1a] text-gray-400 border border-[#132235] hover:text-white hover:border-cyan-800/60'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Subtext */}
      <div className="mt-3 text-xs text-gray-400 flex items-center gap-2 font-mono">
        <span>Available Mods: <strong className="text-[#00f2fe]">{totalGames}</strong></span>
        {searchQuery && (
          <span>• Filtering by &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;</span>
        )}
      </div>
    </header>
  );
};
