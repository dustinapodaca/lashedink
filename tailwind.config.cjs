/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      london: ['"Old London"', 'serif'],
      sans: ['"General Sans"', 'sans-serif'],
      sanslight : ['"General Sans Light"'],
      sansbold : ['"General Sans Bold"'],
    },
    extend: {
      userSelect: ['none'],
    },
  },
  plugins: [],
}
