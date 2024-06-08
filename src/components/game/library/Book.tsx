import React, { useState } from "react";
import styled from "styled-components";
import { BookItem } from "./BookShelfLarge";
import bg_bookshelfmodal from "../../../assets/library/bookshelfwall/bg_bookshelfmodal.png";
import ic_down from "../../../assets/common/ic_down.png";

import red_book_cover from "../../../assets/library/bookshelfwall/red_book_cover.png";
import red_book_content from "../../../assets/library/bookshelfwall/red_book_content.png";
import blue_book_cover from "../../../assets/library/bookshelfwall/blue_book_cover.png";
import blue_book_content from "../../../assets/library/bookshelfwall/blue_book_content.png";
import green_book_cover from "../../../assets/library/bookshelfwall/green_book_cover.png";
import green_book_content from "../../../assets/library/bookshelfwall/green_book_content.png";
import yellow_book_cover from "../../../assets/library/bookshelfwall/yellow_book_cover.png";
import yellow_book_content from "../../../assets/library/bookshelfwall/yellow_book_content.png";

interface BookProps {
  bookModal: BookItem; // 책장 확대 모달 활성화 여부
  setBookModal: React.Dispatch<React.SetStateAction<BookItem>>; // 책장 확대 모달 활성화 여부 설정 함수
}

// 책장 속 책 확대 모달
const Book: React.FC<BookProps> = ({ bookModal, setBookModal }) => {
  const [isBookOpen, setIsBookOpen] = useState(false); // 책이 펼쳐져 있는지 여부

  // 책 모달 닫는 함수
  const closeModal = () => {
    setBookModal({ isOpen: false, content: null });
  };

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

  if (!bookModal.isOpen) {
    return null; // modal의 isOpen이 false일 경우 null 리턴
  } else { // modal의 isOpen이 true일 경우 책 모달 리턴
    return (
      <Wrapper>
        <BookImage
          src={isBookOpen ? currentBook.content : currentBook.cover}
          alt={`${bookModal.content}_book`}
          onClick={clickBook}
        />
        <CloseArrow
          src={ic_down}
          className="down"
          alt="close"
          onClick={closeModal}
        />
      </Wrapper>
    );
  }
};

export default Book;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bg_bookshelfmodal}) center no-repeat;

  background-size: cover;

  z-index: 20; // 책장 모달(10)보다 z index 더 키우기
`;

const BookImage = styled.img`
  height: 70%;
`;

const CloseArrow = styled.img`
  width: 4%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;

  animation-name: down-animation;
  animation-duration: 1s;
  animation-iteration-count: 2;

  cursor: pointer;

  @keyframes down-animation {
    0% {
    }
    100% {
      transform: translateY(20px);
    }
  }
`;
