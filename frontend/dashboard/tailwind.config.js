/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e1e9ff',
          200: '#c2d3ff',
          300: '#94b2ff',
          400: '#5e85ff',
          500: '#2d4fff',
          600: '#1d32ff',
          700: '#1525e6',
          800: '#121fba',
          900: '#142194',
          950: '#0a0d57',
        },
      },
    },
  },
  plugins: [],
}
