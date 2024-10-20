export const getAllBooks = async () => {
  try {
    const response = await fetch('/api/book');
    if (!response.ok) throw new Error("Failed to fetch all books");
    return await response.json();
  } catch (error) {
    console.error("Error fetching all books:", error);
    throw error;
  }
};

/* // 模拟的书籍数据
export const books = [
    {
        id: 0,
        title: "Book I",
        color: "#F6AD69",
        imageSrc: "/bookstore/book-list/soft-cover-1.svg",
        coverImageSrc: "/bookstore/books/book-1.svg",
        titleColor: "#B55119",
        type: "Soft cover",
        price: "15.00",
        description: "This exciting new learning method will teach you the fundamentals of music theory...",
    },
    {
        id: 1,
        title: "Book II",
        color: "#F8D867",
        imageSrc: "/bookstore/book-list/soft-cover-2.svg",
        coverImageSrc: "/bookstore/books/book-2.svg",
        titleColor: "#BC8212",
        type: "Soft cover",
        price: "15.00",
        page: "cart",
        description: "This book covers chords, inversions, and complex rhythms. Students will also learn...",
    },
];

// 模拟的 getAllBooks 函数，返回书籍列表
export const getAllBooks = async () => {
    try {
        // 这里我们直接返回 books 模拟从 API 获取数据
        return books;
    } catch (error) {
        console.error("Error fetching all books:", error);
        throw error;
    }
}; */


export const getBookById = async (bookId: string) => {
  try {
    const response = await fetch('api/book/${bookId}');
    if (!response.ok) throw new Error("Failed to fetch book details");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
};
