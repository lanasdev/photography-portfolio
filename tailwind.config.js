module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        AbrilFatface: ["Abril Fatface"],
        sans: ["poppins", "sans-serif"],
        serif: ["AbrilFatface", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
