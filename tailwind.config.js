// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import { colors} from "./src/styles/theme/colors";

const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      colors,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
};

export default config;
