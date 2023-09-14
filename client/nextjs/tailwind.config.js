/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      screens: {
        /*         md: '868px',
        lg: '1024px',
        xl: '1200px', */
        '2xl': '1360px',
      },
    },
    zIndex: {
      base: '0',
      body: '1',
      'body-2': '2',
      menu: '8',
      navbar: '10',
      modal: '20',
      dropdown: '50',
      indicator: '60',
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1360px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        spin: 'spin 6s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      opacity: {
        0: '0',
        20: '0.2',
        40: '0.4',
        60: '0.6',
        80: '0.8',
        100: '1',
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px',
        31: '31px',
        32: '32px',
        33: '33px',
        34: '34px',
        35: '35px',
      },
      width: {
        100: '100px',
        150: '150px',
        200: '200px',
        250: '250px',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        650: '650px',
        700: '700px',
        760: '760px',
        780: '780px',
        800: '800px',
        900: '900px',
        1000: '1000px',
        1100: '1100px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        100: '100px',
        200: '200px',
        300: '300px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        'auth-box': '0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)',
        sidebar: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px',
        navbar: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px',
        'support-card': '0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)',
        'slide-button': '0 4px 8px rgba(68,68,68,.2)',
        'slide-button-small': '0 4px 8px rgba(68,68,68,.2)',
        'nav-collapse': '0 0 7px 0.5px rgb(0 0 0 / 15%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'product-banner': '',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
