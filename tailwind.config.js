const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    }),
    fontFamily: {
      rale: ['Raleway']
    },
    extend: {
      colors: {
        primary: {
          default: '#3574c5',
          50: '#E7EFF9',
          100: '#D3E1F3',
          200: '#ABC6E8',
          300: '#82AADE',
          400: '#5A8FD3',
          500: '#3574C5',
          600: '#2A5C9D',
          700: '#1F4575',
          800: '#152D4C',
          900: '#0A1524'
        },
        secondary: {
          default: '#02CAFF',
          50: '#E7FAFF',
          100: '#CEF5FF',
          200: '#9BEAFF',
          300: '#68DFFF',
          400: '#35D5FF',
          500: '#02CAFF',
          600: '#00A3CE',
          700: '#007B9B',
          800: '#005268',
          900: '#002A35'
        },
        mercury: {
          default: '#E6E6E6',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#E6E6E6',
          600: '#CDCDCD',
          700: '#B3B3B3',
          800: '#9A9A9A',
          900: '#808080'
        }
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
};
