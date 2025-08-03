/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navyStart: "#0d1a2d",
        navyEnd: "#102e4a",
      },
    },
  },
  plugins: [],
};
