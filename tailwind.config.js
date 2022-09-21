module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#008081",

          "secondary": "#D98C00",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

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