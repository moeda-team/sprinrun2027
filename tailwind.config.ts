import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        paper: 'var(--color-paper)',
        line: 'var(--color-line)',
        accent: 'var(--color-accent)',
        'forest-green': 'var(--color-forest-green)',
        'deep-green': 'var(--color-deep-green)',
        'hot-pink': 'var(--color-hot-pink)',
        'golden-yellow': 'var(--color-golden-yellow)',
        'off-white': 'var(--color-off-white)',
        'soft-mint': 'var(--color-soft-mint)',
        'blush-pink': 'var(--color-blush-pink)',
        'warm-tan': 'var(--color-warm-tan)',
      },
    },
  },
  plugins: [],
};

export default config;
