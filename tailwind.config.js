/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./docs/**/*.{html,js}"],

  theme: {
    colors: {
      Light: {
        'default': '#FFFFFF',
        'primary': '#DDE4FD',
        'secondary': '#B8C7FC',
        'accent1': '#A9BBFC',
        'accent2': '#86A0FC',
      },
      Dark: {
        'default': '#020821',
        'primary': '#0B1336',
        'secondary': '#162254',
        'accent1': '#3E4D87',
        'accent2': '#7B88BA',
      },
    },
    extend: {},
  },
  plugins: [],
}

