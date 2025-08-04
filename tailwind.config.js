/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Caveat': 'Caveat, cursive',
      'Kanit': 'Kanit, sans-serif',
      'Fontawesome': 'FontAwesome, sans-serif',
    },
    container: {
      center: true,
      padding: '0.938rem',
    },
    extend: {
      screens: {
        'xxl': {
          'min': '1400px',
        },
        'xl': {
          'min': '1200px',
        },
        'lg': {
          'min': '992px',
          'max': '1199.98px'
        },
        'md': {
          'min': '768px',
          'max': '991.98px'
        },
        'sm': {
          'max': '767.98px'
        }
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: '100%',
          padding: '0 15px',
          '@screen sm': {
            maxWidth: '767px',
          },
          '@screen md': {
            maxWidth: '991px',
          },
          '@screen lg': {
            maxWidth: '1199px',
          },
          '@screen xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ],
}