/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%)',
      // },
      colors: {
        'cancel': 'hsla(280, 95%, 57%, 1)',
        'danger': '#EF4444',
        'warning': '#F59E0B',
        'info': '#3B82F6',
        'b-rgba-1': 'rgba(0, 0, 0, 0.1)',
        'b-rgba-2': 'rgba(0, 0, 0, 0.2)',
        'b-rgba-3': 'rgba(0, 0, 0, 0.3)',
        'b-rgba-4': 'rgba(0, 0, 0, 0.4)',
        'b-rgba-5': 'rgba(0, 0, 0, 0.5)',
        'b-rgba-6': 'rgba(0, 0, 0, 0.6)',
        'b-rgba-7': 'rgba(0, 0, 0, 0.7)',
        'b-rgba-8': 'rgba(0, 0, 0, 0.8)',
        'b-rgba-9': 'rgba(0, 0, 0, 0.9)',
        'b-rgba-10': 'rgba(0, 0, 0, 1)',
        
      },
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
  plugins: [require("daisyui")],
})