import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        'bg-footer': 'var(--bg-footer)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-soft': 'var(--accent-soft)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out infinite -2s',
        'float-delay-2': 'float 6s ease-in-out infinite -4s',
        'float-delay-3': 'float 6s ease-in-out infinite -1s',
        bounce: 'bounce 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, var(--accent), var(--accent-2))',
      },
    },
  },
  plugins: [],
}

export default config
