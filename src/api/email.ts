import axios from 'axios';

interface ShareData {
  email: string;
  book_id: number;
}

export const sendEmail = async (shareData: ShareData): Promise<void> => {
  try {
    // 클라이언트에서 직접 이메일 발송을 시도
    await axios.get(`/send-email?to=${shareData.email} `);
    console.log('이메일 발송 요청이 성공했습니다.');
  } catch (error) {
    console.error('이메일 발송 요청이 실패했습니다.', error);
    throw error;
  }
};
