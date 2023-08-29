module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0F766E",

          "secondary": "#F77E21",

          "accent": "#F77E21",

          "neutral": "#2b3440",

          "base-100": "#FFFFFF",

          "base-200": "#e2e8f0",

          "base-300": "#64748b",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#FF5501",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

};