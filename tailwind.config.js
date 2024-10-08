/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['spotify', 'sans-serif'], // Add your font here
        spotifyMed: ['spotifyMed', 'sans-serif'], // Add your font here
      },
    },
  },
  plugins: [],
}
