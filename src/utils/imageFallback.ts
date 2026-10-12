export function getFallbackImage(title: string): string {
  const cleanTitle = (title || 'GAME MOD').replace(/[<>&"]/g, '');
  const short = cleanTitle.length > 17 ? cleanTitle.substring(0, 15) + '..' : cleanTitle;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#071322"/>
        <stop offset="100%" stop-color="#02060e"/>
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00f2fe"/>
        <stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
    </defs>
    <rect width="300" height="300" fill="url(#bgGrad)" rx="36"/>
    <rect x="6" y="6" width="288" height="288" fill="none" stroke="url(#cyanGrad)" stroke-width="4" rx="32" opacity="0.75"/>
    <circle cx="150" cy="110" r="52" fill="#0c1f36" stroke="#00f2fe" stroke-width="3"/>
    <path d="M125 105 h50 M150 90 v30 M135 125 a5 5 0 1 0 0.1 0 M165 125 a5 5 0 1 0 0.1 0" stroke="#00f2fe" stroke-width="4" stroke-linecap="round" fill="none"/>
    <text x="150" y="202" font-family="sans-serif" font-weight="900" font-size="19" fill="#ffffff" text-anchor="middle" letter-spacing="1">${short.toUpperCase()}</text>
    <rect x="75" y="222" width="150" height="24" rx="12" fill="rgba(0,242,254,0.12)" stroke="#00f2fe" stroke-width="1.5"/>
    <text x="150" y="238" font-family="monospace" font-weight="800" font-size="11" fill="#00f2fe" text-anchor="middle" letter-spacing="1.5">VERIFIED MOD</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
