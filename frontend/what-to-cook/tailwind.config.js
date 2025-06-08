import colors from "tailwindcss/colors.js";

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
