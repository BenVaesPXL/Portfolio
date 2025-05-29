/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};
