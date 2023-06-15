/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // poiret: ['"Poiret One"', 'cursive'],
      vibes: ['"Great Vibes"', 'cursive'],
      cardo: ['"Cardo"', 'serif'],
      london: ['"Old London"', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
