const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'kgk-gold': '#CC9932',
        'kgk-gold-light': '#CEB995',
        'kgk-green': '#003332'
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'serif': ['Amiri', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
