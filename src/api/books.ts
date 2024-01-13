import api from './api';

export const getBooks = async (user_id: number) => {
  const response = await api.get(`/books/?user_id=${user_id}`);

  console.log(response);
};
