/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Saira Stencil One"'],
        main: ['"Saira"'],
      },
      colors: {
        "gray-color": "#E8E8E8",
        "darkGray-color": "#CBCACA",
        "bg-prime": "#696969",
      },
    },
  },
  plugins: [],
};
