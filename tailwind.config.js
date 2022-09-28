module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        gray: "##6b7280",
        brandRed: "#FF3F3F",
        brandYellow: "#FCBF49",
        brandBlue: "#2B3A67",
        brandGreen: "#00916E",
        faint: "#959DB3",
        gradesA: "#02B608",
        gradesB: "#8FD100",
        gradesC: "#FFE920",
        gradesD: "#FF8503",
        gradesF: "#FC0101",
      },
      fontFamily: {
        "mainText": ["Fredoka", "sans-serif"],
        "logoText": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

