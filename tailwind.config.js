/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey: "#6B7280",
        white: "#FFFFFF",
        yellow: "#FEC20C",
      },
      fontFamily: {
        pxg: ["var(--font-pxg)", "sans-serif"],
      },
    },
  },
  plugins: [],
};