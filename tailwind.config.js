/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'main-color': '#AED1FF', // 메인 백그라운드 컬러
      'button-blue': '#1D92FF', // 버튼 컬러
    },
  },
  plugins: [],
};
