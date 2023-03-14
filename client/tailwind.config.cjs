/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
      }
    },
    screens: {
      'mobile': '300px',
      'tablet': '600px',
      'laptop': '1000px',
      'desktop': '1600px',
    },
    boxShadow: {
      'low-box-shadow': '0 10px 20px rgba(0, 0, 0, 0.3)',
      'high-box-shadow': '0 10px 20px rgba(0, 0, 0, 0.6)',
      'reverse-box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 20px, rgb(240, 46, 170) 0px 0px 0px 5px;',
    }
  },
  plugins: [],
}