// tailwind.config.js

module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        primary: '#32a852',
        secondary: '#ff0015'
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  }
}
