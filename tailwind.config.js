module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0fdfc',
          '100': '#ccfbf7',
          '200': '#99f6ef',
          '300': '#5eeadf',
          '400': '#2dd4c7',
          '500': '#14b8ab',
          '600': '#0d948a',
          '700': '#0f766e',
          '800': '#115e58',
          '900': '#134e49',
          '950': '#042f2c',
        },
        secondary: {
          '50': '#fff7ed',
          '100': '#ffeed5',
          '200': '#fdd9ab',
          '300': '#fcbd75',
          '400': '#f9973e',
          '500': '#f77e21',
          '600': '#e85e0e',
          '700': '#c0460e',
          '800': '#993813',
          '900': '#7b3113',
          '950': '#421508',
        },
      },
    },
  },
  plugins: [require("daisyui")],

};