/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xl: "1440px",
      "2xl": "1919px",
    },
    extend: {
      fontFamily: {
        "playfair-display": ["'Playfair Display'", "serif"],
        "open-sans": ["'Open Sans", "sans-serif"],
      },
      colors: {
        "heading-color-700": "#3C6F75",
        "subtitle-color-700": "#69A8AF",
        "description-color": "#275054",
      },
    },
  },
  plugins: [],
};
