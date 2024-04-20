/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        Lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}