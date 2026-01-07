/** @type {import('tailwindcss').Config} */
import { colors, typography } from "./src/styles/theme";

const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        ...typography.fontFamily,
      },
      fontSize: {
        ...typography.fontSize,
      },
      fontWeight: {
        ...typography.fontWeight,
      },
    },
  },
  plugins: [],
};

export default config;
