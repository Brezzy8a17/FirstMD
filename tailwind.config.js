/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '3px': '3px',
      },
      colors: {
        blue: {
          DEFAULT : "#03045E",
          25: "#C4D1FD",
          50: "#1204a8",
          100: "#574AE2",
          200: "#3383b4"},
        gray:{
          DEFAULT: "#868686b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
        pink:{
          DEFAULT: "#e1baee",
          100: "#654597"
        }
      },
    },
  plugins: [],
  }
}
