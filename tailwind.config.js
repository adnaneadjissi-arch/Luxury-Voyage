/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: { 200:'#F0DCA8', 300:'#D4B87A', 400:'#D4AF37', 500:'#C9A96E', 600:'#A88B52', 700:'#876D3F' },
        dark: { 900:'#0A0A0A', 800:'#0D0D0D', 700:'#111111', 600:'#141414', 500:'#1A1A1A', 400:'#222222', 300:'#2A2A2A' }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
