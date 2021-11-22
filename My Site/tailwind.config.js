module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cs-purple" : "#5267D7",
        "cs-red" : "#FA5959",
        "cs-blue" : "#242A45",
        "cs-grey" : "#9194A2",
        "cs-white" : "#f7f7f7",
        "cs-cream" : "#EFFFFA",
        "cs-pink" : "#FF3864",
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
