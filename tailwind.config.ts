import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 4pt grid: Tailwind default base is 4px (1 unit = 4px).
      // All spacing, padding, margin uses multiples: p-1=4px, p-2=8px, p-4=16px, etc.
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        // Light mode palette (Material You - earthy green)
        primary: {
          DEFAULT: '#496459',
          container: '#88a498',
          foreground: '#ffffff',
          'container-foreground': '#203a31',
        },
        secondary: {
          DEFAULT: '#7e5441',
          container: '#fdc5ad',
          foreground: '#ffffff',
          'container-foreground': '#79503d',
        },
        background: {
          DEFAULT: '#faf9f6',
          dark: '#111512',
        },
        surface: {
          DEFAULT: '#faf9f6',
          dark: '#111512',
          variant: '#e3e2e0',
          'variant-dark': '#424845',
          'container-lowest': '#ffffff',
          'container-low': '#f4f4f1',
          container: '#eeeeeb',
          'container-high': '#e9e8e5',
          'container-highest': '#e3e2e0',
          // dark equivalents
          'container-lowest-dark': '#1e2520',
          'container-low-dark': '#232b26',
          'container-dark': '#2a342e',
          'container-high-dark': '#313d36',
          'container-highest-dark': '#3b4740',
        },
        outline: {
          DEFAULT: '#727875',
          variant: '#c2c8c4',
          'variant-dark': '#42504a',
          dark: '#8c9490',
        },
        'on-background': {
          DEFAULT: '#1a1c1a',
          dark: '#e2e3df',
        },
        'on-surface': {
          DEFAULT: '#1a1c1a',
          dark: '#e2e3df',
          variant: '#424845',
          'variant-dark': '#c2c8c4',
        },
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
