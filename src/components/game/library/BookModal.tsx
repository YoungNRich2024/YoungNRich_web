import React from "react";
import styled from "styled-components";
import { BookItem } from "./BookShelfLarge";
import bg_bookmodal from "../../../assets/library/bookshelfwall/bg_bookmodal.png";
import ic_down from "../../../assets/common/ic_down.png";

import Book from "./Book";
import FlipBook from "./FlipBook";

interface BookModalProps {
  bookModal: BookItem; // 책장 확대 모달 활성화 여부
  setBookModal: React.Dispatch<React.SetStateAction<BookItem>>; // 책장 확대 모달 활성화 여부 설정 함수
}

// 책장 속 책 확대 모달
const BookModal: React.FC<BookModalProps> = ({ bookModal, setBookModal }) => {

  // 책 모달 닫는 함수
  const closeModal = () => {
    setBookModal({ isOpen: false, content: null });
  };

  if (!bookModal.isOpen) {
    return null; // modal의 isOpen이 false일 경우 null 리턴
  } else { // modal의 isOpen이 true일 경우 책 모달 리턴
    return (
      <Wrapper>
        {bookModal.content === "secret" ? <FlipBook /> : <Book bookModal={bookModal}/>}
        
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

export default BookModal;

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
  background: url(${bg_bookmodal}) center no-repeat;

  background-size: cover;

  z-index: 20; // 책장 모달(10)보다 z index 더 키우기
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
