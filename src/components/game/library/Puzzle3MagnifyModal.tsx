import React from "react";
import styled from "styled-components";

import bg_bookmodal from "../../../assets/library/bookshelfwall/bg_bookmodal.png";
import ic_down from "../../../assets/common/ic_down.png";

import puzzle3 from "../../../assets/library/bookshelfwall/puzzle3.png";

interface Puzzle3MagnifyModalProps {
  puzzle3Modal: boolean; // 퍼즐3 문제 확대 모달 활성화 여부
  setPuzzle3Modal: React.Dispatch<React.SetStateAction<boolean>>; // 퍼즐3 문제 확대 모달 활성화 여부 설정 함수
}

// 책장 속 책 확대 모달
const Puzzle3MagnifyModal: React.FC<Puzzle3MagnifyModalProps> = ({
  puzzle3Modal,
  setPuzzle3Modal,
}) => {
  // 책 모달 닫는 함수
  const closeModal = () => {
    setPuzzle3Modal(false);
  };

  if (!puzzle3Modal) {
    return null; // modal이 false일 경우 null 리턴
  } else {
    // modal이 true일 경우 책 모달 리턴
    return (
      <Wrapper>
        {/* 이미지 내용 */}
        <Puzzle3 src={puzzle3} alt="puzzle3" />
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

export default Puzzle3MagnifyModal;

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

const Puzzle3 = styled.img`
  height: 95%;
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
