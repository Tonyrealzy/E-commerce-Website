/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#082218",
      green: "#139c4e",
      red: "#ee5435",
      grey: "#d1ddde",
      darkGrey: "#a9afaf",
      white: "#ffffff"
    },
    fontFamily: {
      customFontFamily: "Lato, Roboto, Open Sans, Helvetica, Arial, sans-serif"
    },
    fontSize: {
      xs: '0.65rem',
      sm: '0.85rem',
      base: '1rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '3rem',
    },
    screens: {
      'md': '1024px',
      // 'lg': '1024px',
    },
    extend: {},
  },
  plugins: [
  ],
}