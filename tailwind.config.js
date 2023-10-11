/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#101010",
        tertiary: "#F1F1F1",
        quaternary: "#FAFAFA",
        quinary: "#FBAF85",
        senary: "#FFFFFF",
        septenary: "#000000",
      },
    },
  },
  plugins: [],
};
