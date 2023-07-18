/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      london: ['"Old London"', 'serif'],
      sans: ['"Manrope"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
