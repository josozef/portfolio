module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Graphik', serif",
      display: "'Poppins', serif",
      body: "'Graphik', serif",
    },
    textColor: {
      gray: {
        darkest: "#051533",
        dark: "#1E2C47",
        mid: "#697385",
      },
    },
    extend: {
      colors: {
        gray: {
          00: "#F9FAFA",
          "01": "#E6E8EB",
          "02": "#CDD0D6",
          "03": "#B4B9C2",
          "04": "#9BA1AD",
          "05": "#828A99",
          "06": "#697385",
          "07": "#505B70",
          "08": "#37445C",
          "09": "#1E2C47",
          10: "#051533",
        },
        primary: {
          0: "#155ADA",
          d1: "#1351C4",
          d2: "#1148AE",
          d3: "#0F3F99",
          d4: "#0D3683",
          d5: "#0B2D6D",
          l1: "#447BE1",
          l2: "#739CE9",
          l3: "#A1BDF0",
          l4: "#D0DEF8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
