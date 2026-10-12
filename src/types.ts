export type Platform = 'APK' | 'IPA';

export interface ModFeature {
  title: string;
  description: string;
}

export interface GameMod {
  id: string;
  title: string;
  shortTitle?: string;
  badge: string;
  itemType?: 'mod' | 'code';
  version: string;
  sizeMB: number; // in MB
  displaySize: string;
  image: string;
  downloadsCount: string;
  rating: number;
  category: 'Popular' | 'Action' | 'Sandbox' | 'Horror' | 'Adventure' | 'Casual' | 'Rewards' | 'Simulation';
  description: string;
  modFeatures: string[];
  apkName: string;
  ipaName: string;
  redirectUrl?: string;
  actionButtonText?: {
    primary: string;
    secondary?: string;
  };
  lastUpdated: string;
  compatibility: {
    android: string;
    ios: string;
  };
  similarGameIds?: string[];
  similarTheme?: string;
}

export type DownloadState = 
  | 'idle'
  | 'initializing'
  | 'connecting'
  | 'downloading'
  | 'injecting'
  | 'finalizing'
  | 'completed'
  | 'error';

export interface ActiveDownload {
  game: GameMod;
  platform: Platform;
  progress: number; // 0 - 100
  downloadedMB: number;
  totalMB: number;
  state: DownloadState;
  statusText: string;
  subStatusText: string;
}
