/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      primary: "#78024E",
      primaryDark: "#45002d",
      secondary: "#304573",
      secondaryDark: "#1f2c49",
      light: "#fff",
      dark: "#333",
    },
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
