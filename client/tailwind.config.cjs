/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('img/background.jpg')",
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
      'high-box-shadow': '0 10px 20px rgba(0, 0, 0, 0.6)'
    },
    spacing: {
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh'
    },
  },
  plugins: [],
}
