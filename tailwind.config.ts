import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark mode palette (from brief)
        dark: {
          bg: '#050816',
          surface: '#111827',
          primary: '#7C3AED',
          secondary: '#A855F7',
          accent: '#22D3EE',
          text: '#FFFFFF',
          muted: '#94A3B8',
        },
        // Light mode palette — Apple-glass, soft blue/violet
        light: {
          bg: '#F5F6FB',
          surface: '#FFFFFF',
          primary: '#5B6EF5',
          secondary: '#8B5CF6',
          accent: '#0EA5E9',
          text: '#12121A',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '48px',
      },
      boxShadow: {
        'glass-light': '0 8px 32px rgba(91, 110, 245, 0.08), 0 1px 1px rgba(255,255,255,0.6) inset',
        'glass-dark': '0 8px 40px rgba(124, 58, 237, 0.25), 0 1px 1px rgba(255,255,255,0.04) inset',
        'glow-purple': '0 0 60px rgba(124, 58, 237, 0.35)',
        'glow-cyan': '0 0 60px rgba(34, 211, 238, 0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        blob: 'blob 12s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(2deg)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%', transform: 'rotate(0deg) scale(1)' },
          '33%': { borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%', transform: 'rotate(8deg) scale(1.05)' },
          '66%': { borderRadius: '35% 65% 55% 45% / 60% 35% 65% 40%', transform: 'rotate(-6deg) scale(0.97)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
