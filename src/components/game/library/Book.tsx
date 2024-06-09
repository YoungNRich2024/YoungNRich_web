import React, { useState } from "react";
import styled from "styled-components";

import red_book_cover from "../../../assets/library/bookshelfwall/red_book_cover.png";
import red_book_content from "../../../assets/library/bookshelfwall/red_book_content.png";
import blue_book_cover from "../../../assets/library/bookshelfwall/blue_book_cover.png";
import blue_book_content from "../../../assets/library/bookshelfwall/blue_book_content.png";
import green_book_cover from "../../../assets/library/bookshelfwall/green_book_cover.png";
import green_book_content from "../../../assets/library/bookshelfwall/green_book_content.png";
import yellow_book_cover from "../../../assets/library/bookshelfwall/yellow_book_cover.png";
import yellow_book_content from "../../../assets/library/bookshelfwall/yellow_book_content.png";
import { BookItem } from "./BookShelfLarge";

interface BookProps {
  bookModal: BookItem; // 책장 확대 모달 활성화 여부
}

// 책 컴포넌트
const Book: React.FC<BookProps> = ({ bookModal }) => {
  const [isBookOpen, setIsBookOpen] = useState(false); // 책이 펼쳐져 있는지 여부

  const clickBook = () => {
    setIsBookOpen(true);
  };

  // bookModal content에 따라 필요한 이미지 리턴
  const bookImages: { [key: string]: { cover: string; content: string } } = {
    red: { cover: red_book_cover, content: red_book_content },
    blue: { cover: blue_book_cover, content: blue_book_content },
    green: { cover: green_book_cover, content: green_book_content },
    yellow: { cover: yellow_book_cover, content: yellow_book_content },
  };
  const currentBook = bookImages[bookModal.content || ""];
  if (!currentBook) return null;

  return (
    <BookImage
      src={isBookOpen ? currentBook.content : currentBook.cover}
      alt={`${bookModal.content}_book`}
      onClick={clickBook}
    />
  );
};

export default Book;

const BookImage = styled.img`
  height: 70%;
`;
