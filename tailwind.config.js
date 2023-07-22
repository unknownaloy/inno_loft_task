/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#272E71",
        body: "#F9FAFB",
        grey: "#6B7280",
        dark: "#374151"
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}