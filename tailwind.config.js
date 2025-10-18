/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D3AF37",
        secondary: "#FFC6B2",
    },
  },
  plugins: [],
}
}
