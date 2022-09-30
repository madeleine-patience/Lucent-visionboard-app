module.exports = {
  content: ["./views/**/*ejs"],
  theme: {
    extend: {
      colors: {
        gray: "##6b7280",
        brown:'#854d0e'
      },
      fontFamily: {
        "mainText": ["Fredoka", "sans-serif"],
        "logoText": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

