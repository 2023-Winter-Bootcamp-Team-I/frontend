// title.ts

import api from './api';

export interface Title {
  book_id: number;
  title: string;
}

export const updateTitle = async (bookId: number, newTitle: string): Promise<Title> => {
  try {
    const response = await api.put(`/books/${bookId}`, { title: newTitle });
    return response.data.result as Title;
  } catch (error) {
    console.error('책 제목 업데이트 중 오류 발생:', error.message);
    throw error;
  }
};
