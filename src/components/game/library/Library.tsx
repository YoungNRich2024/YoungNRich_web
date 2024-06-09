import React, { useState } from "react";
import styled from "styled-components";

import BookShelfWall from "./BookShelfWall";
import VaultWall from "./VaultWall";
import DoorWall from "./DoorWall";
import WindowWall from "./WindowWall";

import ic_left from "../../../assets/library/ic_left.png";
import ic_right from "../../../assets/library/ic_right.png";

// 서재 (퍼즐 2 ~ 4)
const Library = () => {
  const [wallIndex, setWallIndex] = useState(0);

  /* 벽 이동 시 상태가 유지되어야 하므로 부모 컴포넌트에서 관리 */
  const [showFinancial, setShowFinancial] = useState(true); // 책장벽 재무제표 활성화 여부
  const [isCabinetOpen, setIsCabinetOpen] = useState(false); // 책장벽 수납장 open 여부
  const [showKey, setShowKey] = useState(true); // 문벽 열쇠 획득 여부
  const [isWindowClose, setIsWindowClose] = useState(false); // 창문 닫혀 있는지 여부
  const [isDarkMode, setIsDarkMode] = useState(false); // 불 껐는지 여부 (다크모드)

  const clickPrev = () => {
    if (wallIndex <= 0) {
      setWallIndex(3);
    } else {
      setWallIndex((prevIndex) => prevIndex - 1);
    }
  };

  const clickNext = () => {
    if (wallIndex >= 3) {
      setWallIndex(0);
    } else {
      setWallIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Wrapper>
      {wallIndex === 0 && (
        <BookShelfWall
          showFinancial={showFinancial}
          setShowFinancial={setShowFinancial}
          isCabinetOpen={isCabinetOpen}
          setIsCabinetOpen={setIsCabinetOpen}
          isDarkMode={isDarkMode}
        />
      )}
      {wallIndex === 1 && <VaultWall isDarkMode={isDarkMode} />}
      {wallIndex === 2 && (
        <DoorWall
          showKey={showKey}
          setShowKey={setShowKey}
          isDarkMode={isDarkMode}
        />
      )}
      {wallIndex === 3 && (
        <WindowWall
          isWindowClose={isWindowClose}
          setIsWindowClose={setIsWindowClose}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      )}

      <Buttons>
        <img src={ic_left} onClick={clickPrev} className="prev" alt="prev" />
        <img src={ic_right} onClick={clickNext} className="next" alt="next" />
      </Buttons>
    </Wrapper>
  );
};

export default Library;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (orientation: portrait) {
    width: 90vh;
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    width: 90vw;
    height: 100vh;
  }
`;

const Buttons = styled.div`
  .prev {
    position: absolute;
    left: 0;
    width: 50px;

    cursor: pointer;
  }

  .next {
    position: absolute;
    right: 0;
    width: 50px;

    cursor: pointer;
  }
`;
