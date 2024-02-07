/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "primary": "#3F51B5",
        "primary-soft": "rgb(238, 244, 255)",
      },
    },
  },
  plugins: [],
};
