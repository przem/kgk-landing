const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'kgk-gold': '#CC9932',
        'kgk-gold-light': '#CEB995',
        'kgk-green': '#003332',
        'kgk-gray-light': '#F9F9F9',
        'kgk-gray-dark': '#313538',

      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'serif': ['Amiri', ...defaultTheme.fontFamily.sans],
      },
      brightness: {
        25: '.25',
        33: '.33'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
