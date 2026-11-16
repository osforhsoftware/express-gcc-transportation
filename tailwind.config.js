/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff3600',
          'orange-hover': '#e63100',
          dark: '#111111',
          card: '#181818',
          'card-hover': '#1f1f1f',
          imageBg: '#232528',
          border: '#2a2b2f',
          muted: '#8e939d'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

