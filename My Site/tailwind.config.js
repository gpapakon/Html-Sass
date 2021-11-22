module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cs-purple" : "#845EC2",
        "cs-light-purple" : "#B39CD0",
        "cs-light-pink" : "#FBEAFF",
        "cs-cyan" : "#00C9A7",
        "cs-pink" : "#FF3864",
        "cs-blue" : "#2C73D2",
        "cs-grey" : "#B0A8B9",
        "cs-black" : "#4B4453",
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
