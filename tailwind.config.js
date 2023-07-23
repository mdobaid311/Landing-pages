/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        brush: ["Water Brush", "cursive"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "color-1": "#FAE8EB",
        "color-2": "#F6CACA",
        "color-3": "#E4C2C6",
        "color-4": "#CD9FCC",
        "color-5": "#0A014F",
      },
    },
  },
  plugins: [],
};
