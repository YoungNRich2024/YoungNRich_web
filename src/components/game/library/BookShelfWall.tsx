import React, { useState } from "react";
import styled from "styled-components";

import bg_bookshelfwall from "../../../assets/library/bookshelfwall/bg_bookshelfwall.png";
import bookshelf from "../../../assets/library/bookshelfwall/bookshelf.png";
import financial from "../../../assets/library/bookshelfwall/financial.png";
import cabinet_close from "../../../assets/library/bookshelfwall/cabinet_close.png";
import cabinet_open from "../../../assets/library/bookshelfwall/cabinet_open.png";
import radiotable from "../../../assets/library/bookshelfwall/radiotable.png";

import { useRecoilState } from "recoil";
import { inventoryState } from "../../../recoil/atom";

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
  // 책장, 재무제표, 라디오 테이블, 수납장,

  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  const [inventory, setInventory] = useRecoilState(inventoryState); // 인벤토리 설정 함수

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
    } else {
      // 키가 체크되어 있지 않으면 열쇠 관련 대화창만 활성화
      turnOnDialog("cabinet_closed");
    }
  };

  // 열려 있는 수납장 클릭 시 실행되는 함수
  // 토글 있는 수납장 공간 모달

  // 책장 클릭 시 실행되는 함수
  const clickBookShelf = () => {
    setBookshelfModal(true); // 책장 확대 모달 활성화
  };

  return (
    <Wrapper isDarkMode={isDarkMode}>
      {isCabinetOpen ? (
        <Cabinet src={cabinet_open} alt="cabinet_open" />
      ) : (
        <Cabinet
          src={cabinet_close}
          alt="cabinet_closed"
          onClick={clickCabinetClosed}
        />
      )}

      <BookShelf src={bookshelf} alt="bookshelf" onClick={clickBookShelf} />
      {showFinancial && <Financial src={financial} onClick={clickFinancial} />}
      <RadioTable src={radiotable} alt="radio" />
      {/* 대화창 */}
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
      {/* 책장 확대 모달 */}
      {bookshelfModal && (
        <BookShelfLarge
          bookshelfModal={bookshelfModal}
          setBookshelfModal={setBookshelfModal}
        />
      )}
    </Wrapper>
  );
};

export default BookShelfWall;

const Wrapper = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_bookshelfwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;

  filter: ${(props) => (props.isDarkMode ? 'brightness(0.5)' : 'brightness(1)')};
`;

// 책장
const BookShelf = styled.img`
  position: absolute;
  width: 26%;
  height: 88%;
  /* margin-top: 3.3%; */
  bottom: 0;
  margin-bottom: 3%;

  margin-left: 36.5%;
`;

// 재무제표
const Financial = styled.img`
  position: absolute;
  width: 8%;

  margin-left: 65%;
  margin-top: 16%;
`;

const Cabinet = styled.img`
  position: absolute;
  width: 11%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 25%;
`;

const RadioTable = styled.img`
  position: absolute;
  width: 12%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 62.5%;
`;
