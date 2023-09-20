/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      segoe: ["Segoe UI"],
      serif: ["DM Sans", "serif"],
    },
    
    extend: {
      colors: {
        "mainbg-color": "rgb(251, 251, 250)",
        "font-color": "rgb(55, 53, 47)",
        "hover-color": "rgb(108, 117, 125)",
      },
    },
  },
  plugins: [],
}

