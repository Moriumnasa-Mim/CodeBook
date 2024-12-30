/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#1E293B",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
