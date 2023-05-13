/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rundle-header-pink': '#ebcbc3',
        'rundle-body-pink': '#ffc4c9',
        'rundle-body-tan': '#e9dec7',
        'rundle-grey-50': '#ebe9e6',
        'rundle-grey-800': '#4b4946',
        'rundle-grey-900': '#2d3639',
        'rundle-temporary-green': '#afb854',
        'rundle-blue-300': '#bfcce3',
      }
    },
  },
  plugins: [],
}

