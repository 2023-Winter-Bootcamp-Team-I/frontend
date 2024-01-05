/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      mainColor: '#AED1FF', // 메인 백그라운드 컬러
      buttonBlue: '#1D92FF', // 버튼 컬러
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
