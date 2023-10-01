/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      colors: {
        "pointer-color": "#0E344B",
      }
    },
  },
  plugins: [],
}