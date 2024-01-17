// 전역 상태관리

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

// 유저의 아이디
export const userIDState = atom({
  key: 'user_id',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

// user 의 언어 선택 값
export const userLanguage = atom({
  key: 'user_language',
  default: 'ko',
  effects_UNSTABLE: [persistAtom],
});

// 혹시 몰라 카피해와서 주석처리해두는 코드.. import selector 만해주자
// export const isLoggedInSelector = selector({
//   key: 'isLoggedInSelector',
//   get: ({ get }) => {
//     const userID = get(userIDState);
//     return !!userID; // accessToken이 참일 때 true를 반환하고, 그렇지 않으면 false를 반환합니다.
//   },
// });
