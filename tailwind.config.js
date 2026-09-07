/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef4fc', 100: '#d8e6f8', 200: '#b3cdf0', 300: '#82ade4',
          400: '#4f88d4', 500: '#2c66bd', 600: '#1e4d9e', 700: '#183d80',
          800: '#132f63', 900: '#0d2149', 950: '#08152f'
        },
        gold: { 400: '#e8c46a', 500: '#d4a537', 600: '#b3862a' }
      },
      fontFamily: {
        thai: ['"Noto Sans Thai"', '"Sarabun"', '"Leelawadee UI"', 'sans-serif'],
        display: ['"Noto Serif Thai"', '"Sarabun"', 'serif']
      }
    }
  },
  plugins: []
};
