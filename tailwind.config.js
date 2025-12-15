/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#3b82f6',
        violet: '#8b5cf6'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}

