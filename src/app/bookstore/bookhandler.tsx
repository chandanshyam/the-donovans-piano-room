const API_BASE_URL = 'https://the-donovans-piano-room-hazel.vercel.app/book';

export const getAllBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch all books');
    return await response.json();
  } catch (error) {
    console.error('Error fetching all books:', error);
    throw error;
  }
};

export const getBookById = async (bookId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${bookId}`);
    if (!response.ok) throw new Error('Failed to fetch book details');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
};
