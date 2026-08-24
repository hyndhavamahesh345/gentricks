/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gentricks: {
          black: '#08080A',
          deep: '#000000',
          surface: '#101014',
          card: '#121216',
          cardHover: '#1a1a22',
          border: '#24242c',
          yellow: '#FFDE00',
          electricYellow: '#FFDE00',
          yellowGold: '#FFE833',
          yellowHover: '#FFE833',
          yellowDark: '#E6C800',
          zincMuted: '#71717A',
          zincLight: '#A1A1AA',
        }
      },
      fontFamily: {
        display: ['Syne', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'yellow-glow': '0 0 30px rgba(255, 222, 0, 0.25)',
        'yellow-glow-lg': '0 0 50px rgba(255, 222, 0, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
