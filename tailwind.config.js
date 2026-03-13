const oklch = (value) => ({ opacityValue }) =>
  opacityValue === undefined
    ? `oklch(${value})`
    : `oklch(${value} / ${opacityValue})`;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // OKLCH palette: 60/30/10 balance with WCAG AA text contrast.
        // Neutrals are subtly tinted toward the brand hue (~255deg).
        'biko-bg': oklch('21% 0.02 255'),
        'biko-surface': oklch('26% 0.02 255'),
        'biko-hover': oklch('30% 0.03 255'),
        'biko-border': oklch('34% 0.03 255'),
        'biko-divider': oklch('31% 0.02 255'),
        'biko-text1': oklch('92% 0.01 255'),
        'biko-text2': oklch('76% 0.02 255'),
        'biko-muted': oklch('68% 0.02 255'),
        'biko-accent': oklch('67% 0.18 255'),
        'biko-accent2': oklch('74% 0.18 255'),
        'biko-success': oklch('72% 0.16 145'),
        'biko-warning': oklch('78% 0.16 85'),
        'biko-danger': oklch('70% 0.18 25'),
        'biko-info': oklch('70% 0.14 210'),
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'step--2': ['var(--step--2)', { lineHeight: 'var(--leading-body)', letterSpacing: '0.02em' }],
        'step--1': ['var(--step--1)', { lineHeight: 'var(--leading-body)' }],
        'step-0': ['var(--step-0)', { lineHeight: 'var(--leading-body)' }],
        'step-1': ['var(--step-1)', { lineHeight: 'var(--leading-heading)' }],
        'step-2': ['var(--step-2)', { lineHeight: 'var(--leading-heading)' }],
        'step-3': ['var(--step-3)', { lineHeight: 'var(--leading-heading)' }],
        'step-4': ['var(--step-4)', { lineHeight: 'var(--leading-display)' }],
        'step-5': ['var(--step-5)', { lineHeight: 'var(--leading-display)' }],
        'step-6': ['var(--step-6)', { lineHeight: 'var(--leading-display)' }],
        'step-7': ['var(--step-7)', { lineHeight: 'var(--leading-display)' }],
      },
      maxWidth: {
        measure: '65ch',
      },
    },
  },
  plugins: [],
}
