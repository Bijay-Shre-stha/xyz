/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD152',
        'secondary': '#30294B',
        'color-3': '#100A28',
        'color-4': '#8183DA',
        'color-5': '#30294B',
        'navbar': '#20193f'

      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        mont: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
