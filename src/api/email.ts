import api from './api';

interface ShareData {
  email: string;
  book_id: number;
}

export const sendEmail = async (shareData: ShareData): Promise<void> => {
  try {
    const params = {
      to: shareData.email,
      book_id: shareData.book_id,
    };
    console.log(params);
    // 클라이언트에서 직접 이메일 발송을 시도
    await api.get('/books/share', { params }).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.error('이메일 발송 요청이 실패했습니다.', error);
    throw error;
  }
};
