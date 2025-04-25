/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anime-purple': '#6B5B95',
        'anime-blue': '#88B7D5',
        'anime-pink': '#FF9AA2',
        'anime-teal': '#C3E8D1',
      },
    },
  },
  plugins: [],
}