import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        library: 'My Library',
        languageSelection: 'English',
        logout: 'Logout',
        letsRead: 'Time to read it with pictures!',
        createTitle: 'How shall we name the book?',
        snowWhite: 'Snow White',
        threeLittlePigs: 'The three little pigs',
        cinderella: 'Cinderella',
        heungbuNolbu: 'Heungbu and Nolbu',
        createBook: 'Create',
      },
    },
    ko: {
      translation: {
        library: '나의 도서관',
        languageSelection: '한국어',
        logout: '로그아웃',
        letsRead: '이제 그림과 함께 책을 읽어보자!',
        createTitle: '이제 책의 제목을 지어볼까?',
        snowWhite: '백설공주',
        threeLittlePigs: '아기돼지 삼형제',
        cinderella: '신데렐라',
        heungbuNolbu: '흥부와 놀부',
        createBook: '책 만들기',
      },
    },
  },
});

export default i18n;
