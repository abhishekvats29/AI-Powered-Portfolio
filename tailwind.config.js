/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite usually uses root index.html, not public/index.html
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navyStart: "#0d1a2d",
        navyEnd: "#102e4a",
      },
      keyframes: {
        floatX: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(20px) translateY(-10px)" },
        },
        floatXReverse: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(-20px) translateY(-10px)" },
        },
      },
      animation: {
        floatX: "floatX 6s ease-in-out infinite",
        floatXReverse: "floatXReverse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
