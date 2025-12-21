// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#7BAE8A",
      bgSoft: "#F9F7F3",
      textMain: "#2E2E2E",
      textMuted: "#7A7A7A",
      cardSoft: "#F2F6F0",
      textSubtle: '#6B7280'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
};

export default config;
