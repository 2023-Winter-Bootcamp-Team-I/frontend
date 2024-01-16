import api from './api';

interface SignUpData {
  password: string;
  email: string;
  name: string;
}

export const signUpUser = async (userData: SignUpData): Promise<void> => {
  try {
    const response = await api.post('/users/signup/', userData);

    // 서버 응답이 성공인 경우
    console.log('User created:', response.data);
    // 추가적인 성공 처리 (예: 리다이렉트)
  } catch (error) {
    // 서버 응답이 실패인 경우
    // console.error('Error creating user:', error.message);
    // 추가적인 실패 처리 (예: 에러 메시지 표시)
  }
};
