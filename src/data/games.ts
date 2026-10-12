import { GameMod } from '../types';
import monsterImg from '../assets/images/my_singing_monsters_official.jpg';
import truckImg from '../assets/images/american_truck_sim_1791128724751.jpg';
import fishImg from '../assets/images/how_to_fish_1791128736143.jpg';
import mcDungeonsImg from '../assets/images/minecraft_dungeons_2_1791128748671.jpg';
import dressmakerImg from '../assets/images/dressmaker_1791128758652.jpg';
import graveyardImg from '../assets/images/graveyard_keeper_2_1791128770465.jpg';
import stevenImg from '../assets/images/steven_universe_save_light_1791126189180.jpg';
import stealEggImg from '../assets/images/steal_egg_codes_icon_1790038420553.jpg';

export const GAMES: GameMod[] = [
  {
    id: 'american-truck-simulator',
    title: 'American Truck Simulator',
    shortTitle: 'American Truck Simulator',
    badge: 'MOD MENU',
    itemType: 'mod',
    version: 'v1.50 PRO',
    sizeMB: 1200,
    displaySize: '1.2 GB',
    image: truckImg,
    downloadsCount: '3.2M+',
    rating: 4.9,
    category: 'Simulation',
    description: 'Experience legendary American trucks and deliver various cargoes across breathtaking landscapes and iconic highways.',
    modFeatures: [
      'All Trucks & Custom Trailers Unlocked',
      'Unlimited Money & Max Company XP',
      'All American States & Routes Unlocked',
      'Zero Cargo Damage & Fuel Mod'
    ],
    apkName: 'AmericanTruckSim_v1.50_ModMenu.apk',
    ipaName: 'AmericanTruckSim_v1.50_ModMenu.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 8.0+',
      ios: 'iOS 14.0+'
    },
    similarGameIds: ['how-to-fish', 'graveyard-keeper-2'],
    similarTheme: 'Simulation & Crafting'
  },
  {
    id: 'how-to-fish',
    title: 'How to Fish',
    shortTitle: 'How to Fish',
    badge: 'FULL UNLOCKED',
    itemType: 'mod',
    version: 'v1.2.0',
    sizeMB: 420,
    displaySize: '420 MB',
    image: fishImg,
    downloadsCount: '1.5M+',
    rating: 5.0,
    category: 'Simulation',
    description: 'A 1-4 player physics based fishing simulator. While drinking and boating across wild lakes with buddies.',
    modFeatures: [
      'Multiplayer Co-Op Mode Unlocked',
      'All Rare & Legendary Fish Species',
      'Infinite Bait, Rods & Boat Fuel',
      'Hilarious Ragdoll Physics Mod'
    ],
    apkName: 'HowToFish_v1.2.0_Unlocked.apk',
    ipaName: 'HowToFish_v1.2.0_Unlocked.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 7.0+',
      ios: 'iOS 13.0+'
    },
    similarGameIds: ['american-truck-simulator', 'graveyard-keeper-2'],
    similarTheme: 'Simulation & Crafting'
  },
  {
    id: 'graveyard-keeper-2',
    title: 'Graveyard Keeper 2',
    shortTitle: 'Graveyard Keeper 2',
    badge: 'MOD MENU',
    itemType: 'mod',
    version: 'v2.0.4',
    sizeMB: 650,
    displaySize: '650 MB',
    image: graveyardImg,
    downloadsCount: '1.8M+',
    rating: 4.1,
    category: 'Simulation',
    description: 'The most inaccurate medieval cemetery sim is back! Restore the cemetery, manage alchemy, and expand your uncanny empire.',
    modFeatures: [
      'Full Campaign & All Expansions',
      'Infinite Stamina & Instant Crafting',
      'All Zombie Automations Active',
      'Max Tech Tree & Unlimited Gold'
    ],
    apkName: 'GraveyardKeeper2_v2.0.4_ModMenu.apk',
    ipaName: 'GraveyardKeeper2_v2.0.4_ModMenu.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 8.0+',
      ios: 'iOS 13.0+'
    },
    similarGameIds: ['how-to-fish', 'american-truck-simulator'],
    similarTheme: 'Simulation & Crafting'
  },
  {
    id: 'minecraft-dungeons-2',
    title: 'Minecraft Dungeons 2',
    shortTitle: 'Minecraft Dungeons 2',
    badge: 'MOD MENU',
    itemType: 'mod',
    version: 'v2.1.0',
    sizeMB: 960,
    displaySize: '960 MB',
    image: mcDungeonsImg,
    downloadsCount: '5.1M+',
    rating: 3.0,
    category: 'Action',
    description: 'Minecraft Dungeons II is here with more action, more loot, and all-new biomes and dungeon trials to conquer.',
    modFeatures: [
      'All DLC Expansions & Secret Biomes',
      'Unlimited Emeralds & Gilded Gold',
      'All Unique Tier Weapons & Armors',
      'God Mode & Max Level Mod'
    ],
    apkName: 'MinecraftDungeons2_v2.1_ModMenu.apk',
    ipaName: 'MinecraftDungeons2_v2.1_ModMenu.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 8.0+',
      ios: 'iOS 14.0+'
    },
    similarGameIds: ['steven-universe-save-the-light'],
    similarTheme: 'Action & Adventure RPG'
  },
  {
    id: 'steven-universe-save-the-light',
    title: 'Steven Universe: Save the Light',
    shortTitle: 'Steven Universe: Save the Light',
    badge: 'MOD MENU',
    itemType: 'mod',
    version: 'v1.4.0',
    sizeMB: 840,
    displaySize: '840 MB',
    image: stevenImg,
    downloadsCount: '2.4M+',
    rating: 4.9,
    category: 'Adventure',
    description: 'Join Steven and the Crystal Gems in the magical RPG adventure to protect the Light Prism! Full story unlocked, infinite chromas, unlocked party members and all fusion abilities.',
    modFeatures: [
      'Full Game & All Story Chapters Unlocked',
      'Infinite Chromas & Badges Unlocked',
      'All Gem Fusions & Team Combos Ready',
      '60 FPS & HD Ultra Graphics Unlocked'
    ],
    apkName: 'StevenUniverse_SaveTheLight_v1.4_Mod.apk',
    ipaName: 'StevenUniverse_SaveTheLight_v1.4_Mod.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 8.0+',
      ios: 'iOS 14.0+'
    },
    similarGameIds: ['minecraft-dungeons-2'],
    similarTheme: 'Action & Adventure RPG'
  },
  {
    id: 'dressmaker',
    title: 'Dressmaker',
    shortTitle: 'Dressmaker',
    badge: 'VIP UNLOCKED',
    itemType: 'mod',
    version: 'v1.0.8',
    sizeMB: 280,
    displaySize: '280 MB',
    image: dressmakerImg,
    downloadsCount: '890K+',
    rating: 4.7,
    category: 'Casual',
    description: 'Become a dressmaker! Choose fabric, cut out patterns, and sew them all to design world-class haute couture outfits.',
    modFeatures: [
      'All Luxury Fabrics & Rare Patterns',
      'Unlimited Gold Coins & Fashion Gems',
      'All Fashion Runway Contests Open',
      'No Ads & Free VIP Styling Tools'
    ],
    apkName: 'Dressmaker_v1.0.8_VIP.apk',
    ipaName: 'Dressmaker_v1.0.8_VIP.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated Today',
    compatibility: {
      android: 'Android 7.0+',
      ios: 'iOS 12.0+'
    },
    similarGameIds: ['my-singing-monsters', 'steal-an-egg-codes'],
    similarTheme: 'Casual & Creative'
  },
  {
    id: 'my-singing-monsters',
    title: 'MY SINGING MONSTERS',
    badge: 'MOD MENU',
    itemType: 'mod',
    version: 'v4.1.2',
    sizeMB: 541,
    displaySize: '541 MB',
    image: monsterImg,
    downloadsCount: '4.8M+',
    rating: 4.9,
    category: 'Casual',
    description: 'Breed and collect musical monsters on singing islands with all currency and items unlocked.',
    modFeatures: [
      'Unlimited Diamonds & Coins',
      'Instant Breeding & Hatching',
      'All Celestial & Ethereal Monsters Unlocked',
      'No Ads & Free Island Upgrades'
    ],
    apkName: 'MySingingMonsters_v4.1.2_ModMenu.apk',
    ipaName: 'MySingingMonsters_v4.1.2_ModMenu.ipa',
    redirectUrl: 'https://appcomplete.org/cl/i/1xxmrk',
    lastUpdated: 'Updated 2 days ago',
    compatibility: {
      android: 'Android 7.0+',
      ios: 'iOS 13.0+'
    },
    similarGameIds: ['dressmaker', 'steal-an-egg-codes'],
    similarTheme: 'Casual & Creative'
  },
  {
    id: 'steal-an-egg-codes',
    title: 'ALL EGGS AND PETS',
    shortTitle: 'ALL EGGS & PETS',
    badge: 'ALL EGGS & PETS',
    itemType: 'code',
    version: 'VERIFIED 2026',
    sizeMB: 8,
    displaySize: 'Instant Unlock',
    image: stealEggImg,
    downloadsCount: '920K+ Claimed',
    rating: 5.0,
    category: 'Rewards',
    description: 'Claim exclusive verified Steal an Egg codes to unlock all mythic eggs, secret pets, infinite coins, speed boosts, and stealth buffs.',
    modFeatures: [
      'Unlock All Legendary & Mythic Eggs',
      'Unlock All Secret & Exclusive Pets',
      '100,000 Free Coins & Diamond Shards',
      'Permanent +50% Steal Speed Boost'
    ],
    apkName: 'StealAnEgg_AllEggsAndPets_Codes.txt',
    ipaName: 'StealAnEgg_AllEggsAndPets_Codes.txt',
    redirectUrl: 'https://eggpethub.blogspot.com/',
    actionButtonText: {
      primary: 'CLAIM (AND/PC)',
      secondary: 'CLAIM (iOS)'
    },
    lastUpdated: 'Verified Today',
    compatibility: {
      android: 'Android / PC',
      ios: 'iOS / Roblox'
    },
    similarGameIds: ['my-singing-monsters', 'dressmaker'],
    similarTheme: 'Casual & Creative'
  }
];
