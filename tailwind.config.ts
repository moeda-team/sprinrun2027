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
      },
    },
  },
  plugins: [],
};

export default config;
