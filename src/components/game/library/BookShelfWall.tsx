import React, { useState } from "react";
import styled from "styled-components";

import useImageSize from "../../common/useImageSize";

import bg_bookshelfwall from "../../../assets/library/bookshelfwall/bg_bookshelfwall.png";
import bookshelf from "../../../assets/library/bookshelfwall/bookshelf.png";
import financial from "../../../assets/library/bookshelfwall/financial.png";
import cabinet_close from "../../../assets/library/bookshelfwall/cabinet_close.png";
import cabinet_open from "../../../assets/library/bookshelfwall/cabinet_open.png";
import radiotable from "../../../assets/library/bookshelfwall/radiotable.png";
import bookshelf_number from "../../../assets/library/bookshelfwall/bookshelf_number.png";

import { useRecoilState, useSetRecoilState } from "recoil";
import { inventoryState, modalState } from "../../../recoil/atom";

import {
  bookshelfWallData,
  bookshelfWallKeys,
} from "../../../data/libraryData";

import Dialog from "../../common/Dialog";
import BookShelfLarge from "./BookShelfLarge";

interface BookShelfWallProps {
  showFinancial: boolean; // 재무제표 활성화 여부
  setShowFinancial: React.Dispatch<React.SetStateAction<boolean>>; // 재무제표 활성화 여부 설정 함수
  isCabinetOpen: boolean; // 수납장 open 여부
  setIsCabinetOpen: React.Dispatch<React.SetStateAction<boolean>>; // 수납장 open 여부 설정 함수
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
}

// 책장벽
const BookShelfWall: React.FC<BookShelfWallProps> = ({
  showFinancial,
  setShowFinancial,
  isCabinetOpen,
  setIsCabinetOpen,
  isDarkMode,
}) => {
  const isRenderedByWidth = useImageSize(); // 배경이미지 부모 div 너비에 맞춰지는지 여부

  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  const [inventory, setInventory] = useRecoilState(inventoryState); // 인벤토리 설정 함수
  const setModal = useSetRecoilState(modalState); // // 모달 내용 변경 함수

  const [bookshelfModal, setBookshelfModal] = useState(false); // 책장 확대 모달 활성화 여부

  // 대화창 띄우기
  const turnOnDialog = (item: bookshelfWallKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(bookshelfWallData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  // 재무제표 클릭 시 실행되는 함수
  const clickFinancial = () => {
    setShowFinancial(false); // 재무제표 사라짐
    setInventory((prev) => [
      ...prev,
      { id: prev.length, name: "financial", image: financial, checked: false },
    ]); // 인벤토리에 재무제표 추가
    turnOnDialog("financial"); // 재무제표 관련 대화창 활성화
  };

  // 닫혀 있는 수납장 클릭 시 실행되는 함수
  const clickCabinetClosed = () => {
    const keyItem = inventory.find((item) => item.name === "key"); // 인벤토리에서 키 찾기
    if (keyItem?.checked) {
      // 키가 체크되어 있으면
      setIsCabinetOpen(true); // 수납장 open 상태 true
    }
  };

  // 열려 있는 수납장 클릭 시 실행되는 함수
  const clickCabinetOpened = () => {
    setModal({ isOpen: true, content: "cabinet" });
  };

  // 책장 클릭 시 실행되는 함수
  const clickBookShelf = () => {
    setBookshelfModal(true); // 책장 확대 모달 활성화
  };

  // 라디오 클릭 시 실행되는 함수
  const clickRadioTable = () => {
    setModal({ isOpen: true, content: "radio" });
  };

  return (
    <>
      <Wrapper $isDarkMode={isDarkMode}>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          {isCabinetOpen ? (
            <Cabinet
              src={cabinet_open}
              alt="cabinet_open"
              $isCabinetOpen={isCabinetOpen}
              onClick={clickCabinetOpened}
            />
          ) : (
            <Cabinet
              src={cabinet_close}
              alt="cabinet_closed"
              $isCabinetOpen={isCabinetOpen}
              onClick={clickCabinetClosed}
            />
          )}

          <BookShelf src={bookshelf} alt="bookshelf" onClick={clickBookShelf} />
          {showFinancial && (
            <Financial src={financial} onClick={clickFinancial} />
          )}
          <RadioTable src={radiotable} alt="radio" onClick={clickRadioTable} />
          {/* 대화창 */}
          {activeDialog && (
            <Dialog
              setActiveDialog={setActiveDialog}
              dialogScript={dialogScript}
            />
          )}
        </ItemContainer>
      </Wrapper>
      {/* 책장 책 번호 */}
      <BookShelfNumber>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          <img src={bookshelf_number} alt="bookshelf_number" />
        </ItemContainer>
      </BookShelfNumber>
      {/* 책장 확대 모달 */}
      {bookshelfModal && (
        <BookShelfLarge
          bookshelfModal={bookshelfModal}
          setBookshelfModal={setBookshelfModal}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
};

export default BookShelfWall;

const Wrapper = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100%;

  background: url(${bg_bookshelfwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: ${(props) =>
    props.$isDarkMode ? "brightness(0.5)" : "brightness(1)"};
`;

const ItemContainer = styled.div<{ $isRenderedByWidth: boolean }>`
  aspect-ratio: 12 /7;
  ${(props) => (props.$isRenderedByWidth ? `width: 100%;` : `height: 100%;`)}
  position: relative;
`;

// 책장
const BookShelf = styled.img`
  position: absolute;
  width: 31.5%;
  height: 88%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 33.5%;
`;

// 재무제표
const Financial = styled.img`
  position: absolute;
  width: 12.5%;

  margin-left: 65%;
  margin-top: 18.5%;
`;

const Cabinet = styled.img<{ $isCabinetOpen: boolean }>`
  position: absolute;
  width: 12%;
  bottom: 0;
  margin-bottom: 4%;
  margin-left: 21%;

  // 수납장이 열려있지 않을 때 수납장 클릭 시 진동 애니메이션 효과 적용
  ${(props) =>
    !props.$isCabinetOpen &&
    `
    &:active {
      animation-name: vibration;
      animation-duration: 0.2s;
      animation-iteration-count: 4;
    }
  `}

  @keyframes vibration {
    0% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const RadioTable = styled.img`
  position: absolute;
  width: 13%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 65%;
`;

const BookShelfNumber = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; // 보여주기용으로, 하위 요소의 event가 가능해야 함

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 26%;
    height: 88%;
    /* margin-top: 3.3%; */
    bottom: 0;
    margin-bottom: 3%;

    margin-left: 36.5%;
  }
`;
