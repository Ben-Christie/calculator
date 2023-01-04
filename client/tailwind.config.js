/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false,
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
