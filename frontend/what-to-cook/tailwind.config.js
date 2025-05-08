import colors from "tailwindcss/colors.js";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "src/***/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
