/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // <-- Add this to scan your pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}