/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#03045E",
          25: "#C4D1FD",
          50: "#1204a8",
          100: "#574AE2",
          200: "#3383b4",
        },
        gray: {
          DEFAULT: "#868686b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
        pink: {
          DEFAULT: "#e1baee",
          100: "#654597",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
