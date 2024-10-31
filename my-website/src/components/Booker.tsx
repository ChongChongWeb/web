import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styles/BookComponent.scss";




interface Book {
  volume: string;
  coverImage: string;
  title: string;
  publishedAt: string;
  description: string;
  price: string;
}

const BookComponent: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selected, setSelected] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
 
  interface ApiResponse {
    books: Book[]; // 假设 Book 是你已经定义好的类型
  }
  useEffect(() => {
    axios
      .get<ApiResponse>("https://gist.githubusercontent.com/ChongChongWeb/ed9c3d818d69e33b43c5b42aad8f04da/raw/31adb7fc91678f6fee143cb458bfaa03187d49c1/book.json")
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((error) => {
        console.error("数据加载失败", error);
      });
  }, []);
  
  const selectBook = (book: Book) => {
    setSelected(true);
    setSelectedBook(book);
  };

  const closeMenu = () => {
    setSelected(false);
    setSelectedBook(null);
  };

  return (
    <div className="global-wrapper flex items-start">
      {/* 左侧的书籍展示 */}
      <div className="floor-wrapper flex-1">
        <div className="floor">
          <div className="book-list">
            {books.map((book, index) => (
              <div key={index} className="book-item" onClick={() => selectBook(book)}>
                <img className="cover" src={book.coverImage} alt={book.title} />
                <div className="back"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* 右侧的标题和小标题 */}
      <div  className="flex flex-col items-start" style={{ transform: 'translateX(-200px) translateY(60px)' }}>
  <h1 className="text-4xl font-bold text-neutral-800 text-center w-full text-white "   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>📚 Book Reading</h1>
  <p className="text-lg text-neutral-600 mt-4 text-white "   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>📖 Maybe long time not to read a complete book...</p>
</div>

      {selected && <div className="menu-overlay" onClick={closeMenu}></div>}
  
      {selected && selectedBook && (
        <div className="side-menu">
         
          <img className="cover" src={selectedBook.coverImage} alt={selectedBook.title} />
          <p className="title">{selectedBook.title}</p>
          <p className="date">{selectedBook.publishedAt}</p>
          <div className="description">{selectedBook.description}</div>
        </div>
      )}
    </div>
    
  );
  
}

export default BookComponent;