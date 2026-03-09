/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact Bikode IDE dark palette from WelcomeScreen.c
        'biko-bg': '#181818',   // DK_BG    RGB(24,24,24)
        'biko-surface': '#242424',   // DK_SURFACE
        'biko-hover': '#30323a',   // DK_SURFACE_HOV
        'biko-border': '#373737',   // DK_BORDER
        'biko-accent': '#4B8BF5',   // DK_ACCENT
        'biko-accent2': '#64A0FF',   // DK_ACCENT_HOV
        'biko-text1': '#E6E6E6',   // DK_TEXT1
        'biko-text2': '#969696',   // DK_TEXT2
        'biko-muted': '#505050',   // DK_MUTED
        'biko-divider': '#323232',   // DK_DIVIDER
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
