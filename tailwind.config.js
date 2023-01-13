/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jura: ["Jura", "sans-serif"],
      },
      container: {
        center: true,
        margin: "0",
        padding: "0px",
        // screens: {
        //   sm: "640px",
        //   md: "768px",
        //   lg: "1000px",
        //   xl: "1056px",
        // },
      },
    },
  },
  plugins: [],
};
