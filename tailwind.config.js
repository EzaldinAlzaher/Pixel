/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#14314D",
        secondary: "#FABF04",
        lightblue: "#009DE1",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

