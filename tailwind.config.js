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
    fontSize: {
      xs: '0.75rem',
      sm: '1rem',
      base: '1.5rem',
      lg: '2.5rem',
      xl: '3.5rem',
    },
    screens: {
      'md': '640px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [
  ],
}