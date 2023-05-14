/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rundle-blue-200': '#bbe3e2',
        'rundle-blue-300': '#bfcce3',
        'rundle-brown': '#b69c7d',
        'rundle-green': '#828c26',
        'rundle-temporary-green': '#afb854',
        'rundle-grey-50': '#ebe9e6',
        'rundle-grey-800': '#4b4946',
        'rundle-grey-900': '#2d3639',
        'rundle-mint': '#b5ddbe',
        'rundle-pink-100': '#fcd4cf',
        'rundle-pink-200': '#ffc4c9',
        'rundle-red-100': '#ebcbc3',
        'rundle-tan': '#e9dec7',
      }
    },
  },
  plugins: [],
}

