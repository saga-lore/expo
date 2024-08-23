/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif'],
      },
      colors: {
        primary: '#FEE102',
        gray: {
          normal: '#C6C6C6',
          dark: '#5E5E5E',
        },
      },
    },
  },
  plugins: [],
};
