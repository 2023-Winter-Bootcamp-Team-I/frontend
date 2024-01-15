import api from './api';
import { AxiosResponse } from 'axios';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (loginData: LoginData): Promise<AxiosResponse> => {
  try {
    const response = await api.post('/users/signin/', loginData);
    return response;
    // 추가적인 성공 처리 (예: 리다이렉트)
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
};
