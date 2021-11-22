const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        orange: colors.orange,
        amber: colors.amber,
        "cs-black" : "#211924",
        "cs-uared" : "#E01A4F",
        "cs-silver" : "#EAEAEA",
        "cs-blue" : "#4B88A2",
        "cs-snow" : "FFF9FB",
      },
    },
    screens : {
      'md' :"1100px",
      'lg' :"1300px",
      'xl':"1300px",
      "2xl": "1300px",
    },
    container: {
      center:true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
