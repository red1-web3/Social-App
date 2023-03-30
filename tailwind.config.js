/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: {
          700: "#17181C",
          500: "#1E1F23",
          400: "#27282F",
          300: "#34353E",
        },
        borderColor: "#27292D",
        primary: "#187CC4",
      },
    },
  },
  plugins: [],
};
