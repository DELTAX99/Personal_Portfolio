/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        gray: {
          400: "#ffffffcc",
          800: "#1a1a1a",
          900: "#0a0a0a"
        }
      }
    },
  },
  plugins: [],
}
