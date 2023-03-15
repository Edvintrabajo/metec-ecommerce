/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': 'linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%)',
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
      'multiple-box-shadow': 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
    }
  },
  plugins: [],
}