/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#00afff",
        secondary: "#0f1628",
        ternary: "#1e293b",
        quaternary: "#94a3b8",
      },
      screens: {
        "2xl": "1300px",
        xs: { max: "640px" },
      },
    },
  },
  plugins: [],
};
