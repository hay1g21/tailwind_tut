/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        papayawhip: {
          light: '#fefe4',
          DEFAULT: '#ffefd5',
          dark: 'fee5bc'
        }
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 14/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

