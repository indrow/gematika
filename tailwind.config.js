/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "1.05",
      },
      fontFamily: {
        libre: ["Titillium Web", defaultTheme.fontFamily.libre],
      },
    },
  },
  plugins: [],
};
