/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: {
          300: "#34353E",
          400: "#27282F",
          500: "#1E1F23",
          700: "#17181C",
        },
        light: {
          100: "#fafafa",
          200: "#d2d3db",
          700: "#8e8e8e",
        },
        primary: "#187CC4",
        borderColor: "#27292D",
        primaryBlack: "#09090b",
        primaryWhite: "#909090",
      },

      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
