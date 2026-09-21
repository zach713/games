import { GameMod } from '../types';
import monsterImg from '../assets/images/my_singing_monsters_official.jpg';

export const GAMES: GameMod[] = [
  {
    id: 'my-singing-monsters',
    title: 'MY SINGING MONSTERS',
    badge: 'MOD MENU',
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
      'Instant Monster Breeding & Hatching',
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
    }
  }
];
