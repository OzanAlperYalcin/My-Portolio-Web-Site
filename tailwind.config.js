/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB6440",
        secondary: "#D6E4E5",
        third: "#EB6440"
      },
      backgroundImage: {
        'primary': "",
      },
    },
  },
  plugins: [],
}
