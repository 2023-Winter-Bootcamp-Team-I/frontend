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
      mainColor: '#AED1FF', // 메인 백그라운드 컬러
      white: '#FFFFFF',
      shadowGray: '#849EC0',
      mainBlue: '#3CA5FF',
      signupButtonBlue: '#1D92FF',
      loginBlue: '#6EB0FF',
    },
  },
  plugins: [],
};
