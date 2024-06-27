/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/contexts/**/*.{html,js}",
  ],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [],
};
