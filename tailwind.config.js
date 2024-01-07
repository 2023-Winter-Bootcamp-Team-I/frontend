/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
        dongle: ['Dongle', 'sans-serif'],
      },
    },
    colors: {
      'main-color': '#AED1FF',
      'button-blue': '#1D92FF',
      white: '#FFFFFF',
      shadowGray: '#849EC0',
    },
  },
  plugins: [],
};
