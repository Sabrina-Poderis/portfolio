/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./assets/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redwood: "#a54657",
        whine: "#582630",
        maize: "#F7EE7F",
        sandybrown: "#F1A66A",
        bittersweet: "#F26157",
      },
    },
  },
  plugins: [],
};
