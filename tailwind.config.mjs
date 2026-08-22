/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070A0F',
          900: '#0B0F17',
          800: '#111827',
          700: '#1E293B',
          600: '#334155',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FCD34D',
          dark: '#B45309',
          glow: '#F59E0B',
        },
        surface: {
          base: '#0B0F17',
          card: '#111827',
          elevated: '#1E293B',
          hover: '#1F2937',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'amber-glow': '0 0 25px rgba(245, 158, 11, 0.25)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
