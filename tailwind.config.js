const defaultTheme = require('tailwindcss/defaultTheme')



module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        gray: "##6b7280",
        brown:'#854d0e'
      },
      fontFamily: {
        'sans': ['Graphik', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif'],
    },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

