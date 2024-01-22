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
        languageSelection: '한국어',
        logout: 'Logout',
      },
    },
    ko: {
      translation: {
        library: '나의 도서관',
        languageSelection: 'English',
        logout: '로그아웃',
      },
    },
  },
});

export default i18n;
