import React, { useState, useMemo } from 'react';
import { GAMES } from './data/games';
import { GameMod, Platform } from './types';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { DownloadModal } from './components/DownloadModal';
import { GameDetailsModal } from './components/GameDetailsModal';
import { Shield, Sparkles, HelpCircle, CheckCircle, Smartphone, AlertCircle } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  
  // Download Modal state
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<GameMod | null>(null);
  const [activePlatform, setActivePlatform] = useState<Platform>('APK');

  // Details Modal state
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [detailsGame, setDetailsGame] = useState<GameMod | null>(null);

  // Filter games based on search and category
  const filteredGames = useMemo(() => {
    return GAMES.filter((game) => {
      const matchesSearch = 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.modFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === 'All Items' || selectedCategory === 'All Mods') return true;
      if (selectedCategory === 'Simulators') return game.category === 'Simulation' || game.similarTheme === 'Simulation & Crafting';
      if (selectedCategory === 'Action & RPG') return game.category === 'Action' || game.category === 'Adventure' || game.similarTheme === 'Action & Adventure RPG';
      if (selectedCategory === 'Casual & Creative') return game.category === 'Casual' || game.category === 'Rewards' || game.similarTheme === 'Casual & Creative';
      if (selectedCategory === 'Mod Menu') return game.badge.includes('MENU') || game.badge.includes('MOD');
      if (selectedCategory === 'Free Codes') return game.itemType === 'code' || game.badge.includes('CODE');
      return game.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenDownload = (game: GameMod, platform: Platform) => {
    setActiveGame(game);
    setActivePlatform(platform);
    setDownloadModalOpen(true);
  };

  const handleOpenDetails = (game: GameMod) => {
    setDetailsGame(game);
    setDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020509] text-white selection:bg-cyan-500 selection:text-black flex flex-col font-space">
      {/* Top Banner Notice */}
      <div className="bg-[#040c17] border-b border-[#0f2134] py-1.5 px-4 text-center text-xs text-cyan-400/90 font-mono flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>MODIVERS PRO MIRRORS: <strong>100% OPERATIONAL</strong> • APK &amp; IPA INJECTOR v4.8 ONLINE</span>
      </div>

      {/* Main Header matching Screenshot */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalGames={filteredGames.length}
      />

      {/* Main Games Grid matching Image 1 */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-4">
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto py-4 justify-items-center">
            {filteredGames.map((game) => (
              <div key={game.id} className="w-full max-w-[280px] sm:max-w-[290px]">
                <GameCard
                  game={game}
                  onDownload={handleOpenDownload}
                  onViewDetails={handleOpenDetails}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#070c14] border border-[#132338] rounded-3xl p-8 max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3 opacity-70" />
            <h3 className="text-lg font-bold text-white uppercase mb-1">No Games Found</h3>
            <p className="text-sm text-gray-400 mb-4">
              We couldn&apos;t find any mods matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Mods'); }}
              className="bg-cyan-500/20 text-[#00f2fe] border border-[#00f2fe] hover:bg-cyan-500/30 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Feature Highlights Section */}
        <section className="mt-16 pt-10 border-t border-[#0f1e2e]">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider font-chakra">
              Why Gamers Choose <span className="text-[#00f2fe] neon-glow-cyan">MODIVERS PRO</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg mx-auto">
              Clean, pre-signed installation packages engineered for security and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#060b13] border border-[#112338] hover:border-cyan-500/30 rounded-2xl p-6 text-left transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-[#00f2fe]/40 text-[#00f2fe] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                Zero Malware Guarantee
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Every APK and IPA release is scanned with multi-engine security sandboxes before distribution.
              </p>
            </div>

            <div className="bg-[#060b13] border border-[#112338] hover:border-cyan-500/30 rounded-2xl p-6 text-left transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-[#00f2fe]/40 text-[#00f2fe] flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                Dual Platform Support
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct installation files for Android (APK) and signed profiles/IPAs for iPhone and iPad devices.
              </p>
            </div>

            <div className="bg-[#060b13] border border-[#112338] hover:border-cyan-500/30 rounded-2xl p-6 text-left transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-[#00f2fe]/40 text-[#00f2fe] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                Anti-Ban Protection
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Bypasses standard client integrity checks with custom memory hooks to keep player accounts safe.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Quick Accordion */}
        <section className="mt-14 mb-8 bg-[#050a12] border border-[#0e1d2e] rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider font-chakra mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#00f2fe]" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-xs text-gray-300">
            <div className="border-b border-[#0f1f30] pb-3">
              <strong className="text-white block text-sm mb-1">Do I need to root my Android or jailbreak my iPhone?</strong>
              <p className="text-gray-400">No. All mods on ModiversPro are packaged as standalone signed applications that run seamlessly on standard retail devices without root or jailbreak.</p>
            </div>
            <div className="border-b border-[#0f1f30] pb-3">
              <strong className="text-white block text-sm mb-1">How does the download simulation work?</strong>
              <p className="text-gray-400">Clicking APK or IPA initiates our real-time integrity verification and connects to our high-speed CDN mirrors. When finished, you receive the verified file directly in your browser.</p>
            </div>
            <div>
              <strong className="text-white block text-sm mb-1">Are my existing game saves preserved?</strong>
              <p className="text-gray-400">Most packages support existing cloud saves (e.g. Google Play Games or Apple Game Center) when enabled in the mod menu options.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Download Progression Modal matching Image 2 */}
      <DownloadModal
        game={activeGame}
        platform={activePlatform}
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Game Details Modal */}
      <GameDetailsModal
        game={detailsGame}
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        onDownload={handleOpenDownload}
        onSelectGame={handleOpenDetails}
      />
    </div>
  );
}
