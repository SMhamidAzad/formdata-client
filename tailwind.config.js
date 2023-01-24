/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["cupcake", "dark", "cmyk"],
    },
  },
  plugins: [require("daisyui")],
}
