// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' for system preference
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
