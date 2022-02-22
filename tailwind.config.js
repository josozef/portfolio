module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Graphik', serif",
      display: "'Poppins', serif",
      body: "'Graphik', serif",
    },
    extend: {
      colors: {
        gray: {
          50: "#F9FAFA",
          100: "#F3F4F6",
          200: "#E4E7EC",
          300: "#D6DAE1",
          400: "#B3BAC6",
          500: "#97A0AF",
          600: "#758095",
          700: "#666F7F",
          800: "#4B5262",
          900: "#222C3F",
        },
        primary: {
          DEFAULT: "#155ADA",
          500: "#1351C4",
          600: "#1148AE",
          700: "#0F3F99",
          800: "#0D3683",
          900: "#0B2D6D",
          "l1": "#447BE1",
          "l2": "#739CE9",
          "l3": "#A1BDF0",
          "l4": "#D0DEF8",
        },
        blue: {
          100: "#F0F7FF",
          200: "#CEE5FD",
          300: "#98C6F5",
          400: "#60A4EB",
          500: "#2E85E0",
          600: "#1064BD",
          700: "#125297",
          800: "#164679",
          900: "#254363",
        },
        black: "#0C1018",
        white: "#ffffff",
        background: {
          DEFAULT: "#F9FAFA",
        },
        primary: {
          light: "#739CE9",
          DEFAULT: "#1351C4",
          dark: "#0D3683",
        },
      },
      textColor: (theme) => ({
        standard: theme("colors.gray.900"),
        medium: theme("colors.gray.700"),
        light: theme("colors.gray.500"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
