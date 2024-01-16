import api from './api';

// 책의 Interface 입니다
export interface Book {
  book_id: number;
  title: string;
  created_at: Date;
  image_url: string;
}

// /books 에 대한 GET 요청입니다
// 서재 페이지에서 책들을 처음으로 불러 올 때 사용 됩니다
// user_id 를 input으로 받으며
// interface Book을 array의 형태로 반환 합니다
export const getBooks = async (user_id: number): Book[] => {
  try {
    const response = await api.get(`/books/?user_id=${user_id}`);
    return response.data.result as Book[];
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
};

// /books 에 대한 put 요청입니다
// 제목을 생성 할 때 사용됩니다
// bookId 와 제목을 input 으로 받으며
// 생성된 책 정보를 다시 반환 합니다
export const updateTitle = async (bookId: number, newTitle: string): Promise<Book> => {
  try {
    const response = await api.put(`/books/${bookId}`, { title: newTitle });
    return response.data.result as Book;
  } catch (error) {
    console.error('Error updating title:', error.message);
    throw error;
  }
};

// /books/{book_id}
export const deleteBook = async (bookId: number): Promise<void> => {
  try {
    await api.delete(`/books/${bookId}`);
  } catch (error) {
    console.error('Error deleting book:', error.message);
    throw error;
  }
};
