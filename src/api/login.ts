import api from './api';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (loginData: LoginData): Promise<void> => {
  try {
    const response = await api.post('/users/signin/', loginData);

    // 서버 응답이 성공인 경우
    console.log('User logged in:', response.data);
    // 추가적인 성공 처리 (예: 리다이렉트)
  } catch (error) {
    // 서버 응답이 실패인 경우
    // console.error('Error logging in:', error.message);
    // 추가적인 실패 처리 (예: 에러 메시지 표시)
  }
};
