module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "mobile-hero": "url('../images/mobile-hero.jpeg')",
        "desktop-hero": "url('../images/desktop-hero.jpeg')",
      }),
      height: theme => ({ "screen2/3": "66vh" }),
      fontFamily: theme => ({ sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"] }),
      fontSize: theme => ({"signup": "1.75rem"})
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
