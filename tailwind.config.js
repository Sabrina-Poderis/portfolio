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
        primary: "#a54657",
        secondary: "#582630",
        tertiary: "#F7EE7F",
        quaternary: "#F1A66A",
        quinary: "#F26157",
      },
    },
  },
  plugins: [],
};
