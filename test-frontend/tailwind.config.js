/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["'Playfair Display'", "serif"],
        "open-sans": ["'Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
