// tailwind.config.js

module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        main: '#b3aea4',
        fontLight: '#ffffff'
      },
      fontFamily: {
        'Playfair-Display': ['"Playfair-Display"', 'serif'],
      },
      backgroundImage: {
        'hero': "url('https://i.ibb.co/TMX3vGQ/Untitled-8-5-3-in-20-3-in-1.png')",
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
