/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // myBg: "url('./src/Photos/hero-1.c081bcff664751bf4f02.jpg')",
        mySmBg: "url('./src/Photos/3.1077aed96e883e0a7a00.jpg')",
        myIcons: "url('./src/Photos/تنزيل.png')",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
