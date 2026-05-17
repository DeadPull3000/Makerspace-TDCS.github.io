/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
          950: '#082f49',
        },
        neon: {
          cyan: '#00ffff',
          purple: '#b60ce8',
          green: '#39ff14',
          pink: '#ff006e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(182, 12, 232, 0.5)',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.5)',
        'glow-lg': '0 0 30px rgba(0, 255, 255, 0.3)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glitch: 'glitch 0.3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'scroll-progress': 'none',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff006e' },
          '15%': { textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff006e' },
          '49%': { textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff006e' },
          '50%': { textShadow: '-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff006e' },
          '99%': { textShadow: '-0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff006e' },
          '100%': { textShadow: '0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff006e' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
