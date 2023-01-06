// tailwind.config.js

module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        main: '#ead2be',
        fontLight: '#FFFFFF',
        grey: '#C6BBB7',
      },
      fontFamily: {
        'Playfair-Display': ['"Playfair-Display"', 'serif'],
        Playfair: ['"Helvetica"', 'serif'],
        jSans: ['Josefin Sans', 'sans-serif'],
        jSlab: ['Josefin Slab', 'sans-serif'],
        corm: ['Cormorant', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('https://ibb.co/kgdYz5W')",
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
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
}
