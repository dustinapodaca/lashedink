/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poiret: ['"Poiret One"', 'cursive'],
      cardo: ['"Cardo"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
