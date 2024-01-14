import api from './api';

export interface Book {
  book_id: number;
  title: string;
  created_at: Date;
  image_url: string;
}

export const getBooks = async (user_id: number): Book[] => {
  try {
    const response = await api.get(`/books/?user_id=${user_id}`);
    return response.data.result as Book[];
  } catch (error) {
    console.error('Error fetching books:', error.message);
    throw error;
  }
};

export const updateTitle = async (bookId: number, newTitle: string): Promise<Book> => {
  try {
    const response = await api.put(`/books/${bookId}`, { title: newTitle });
    return response.data.result as Book;
  } catch (error) {
    console.error('Error updating title:', error.message);
    throw error;
  }
};
