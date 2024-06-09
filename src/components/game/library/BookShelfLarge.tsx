import React, { useState } from "react";
import styled from "styled-components";
import bg_modal from "../../../assets/common/bg_modal.png";
import bookshelf_large from "../../../assets/library/bookshelfwall/bookshelf_large.png";
import bookshelf_large_dark from "../../../assets/library/bookshelfwall/bookshelf_large_dark.png";
import ic_down_black from "../../../assets/common/ic_down_black.png";
import BookModal from "./BookModal";

interface BookShelfLargeProps {
  bookshelfModal: boolean; // 책장 확대 모달 활성화 여부
  setBookshelfModal: React.Dispatch<React.SetStateAction<boolean>>; // 책장 확대 모달 활성화 여부 설정 함수
  isDarkMode: boolean;
}

// 책 모달 관련 타입 정의
export type BookItem = {
  isOpen: boolean; // 책 모달을 열었는지 여부
  content: string | null; // 어떤 책 모달인지
};

// 책장 확대 모달
const BookShelfLarge: React.FC<BookShelfLargeProps> = ({
  bookshelfModal,
  setBookshelfModal,
  isDarkMode,
}) => {
  // 책장 모달 닫는 함수
  const closeModal = () => {
    setBookshelfModal(false);
  };

  // 책 모달 상태
  const [bookModal, setBookModal] = useState<BookItem>({
    isOpen: false,
    content: null,
  });

  // 책 모달 여는 함수
  const clickBook = (item: string) => {
    setBookModal({ isOpen: true, content: item });
  };

  if (!bookshelfModal) {
    return null; // 책장 확대 modal 상태가 false일 경우 null 리턴
  } else {
    // 책장 확대 modal 상태가 true일 경우 모달 보여주기
    return (
      <Wrapper>
        <BookShelf isDarkMode={isDarkMode}>
          <Blue onClick={() => clickBook("blue")} />
          <Green onClick={() => clickBook("green")} />
          <Red onClick={() => clickBook("red")} />
          <Yellow onClick={() => clickBook("yellow")} />
        </BookShelf>
        <CloseArrow
          src={ic_down_black}
          className="down"
          alt="close"
          onClick={closeModal}
        />
        {bookModal.isOpen && (
          <BookModal bookModal={bookModal} setBookModal={setBookModal} />
        )}
      </Wrapper>
    );
  }
};

export default BookShelfLarge;

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
  /* background: rgba(0, 0, 0, 0.5); */
  background: url(${bg_modal}) center no-repeat;
  background-size: cover;

  z-index: 10; // 책장벽 위에 띄우는 것이므로 z index 추가
`;

const BookShelf = styled.div<{ isDarkMode: boolean }>`
  width: 80%;
  height: 100%;
  background: ${(props) =>
    `url(${
      props.isDarkMode ? bookshelf_large_dark : bookshelf_large
    }) center no-repeat`};
  background-size: contain;

  position: relative;
`;

// 파란 책
const Blue = styled.div`
  position: absolute;

  width: 5%;
  height: 29%;
  margin-left: 4%;
  margin-top: 13%;

  cursor: pointer;
`;

// 초록 책
const Green = styled.div`
  position: absolute;

  width: 5%;
  height: 29%;
  margin-left: 15.5%;
  margin-top: 13%;

  cursor: pointer;
`;

// 빨간 책
const Red = styled.div`
  position: absolute;

  width: 5%;
  height: 29%;
  margin-left: 81%;
  margin-top: 13%;

  cursor: pointer;
`;

const Yellow = styled.div`
  position: absolute;

  width: 5%;
  height: 25%;
  margin-left: 78%;
  margin-top: 37%;

  cursor: pointer;
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
