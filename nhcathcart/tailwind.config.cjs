/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#65768C",
        secondary: "#F28907",
        accent: "#F27507",
        neutral: "#D93F07",
        "base-100": "#ffffff",
      },
    }],
  },
  plugins: [require("daisyui")],
}
