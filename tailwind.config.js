module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3860BE",

          "secondary": "#204380",

          "accent": "#C4CD2B",

          "neutral": "#181A2A",

          "base-100": "#FFFFFF",

          "base-200": "#E9E9E9",

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