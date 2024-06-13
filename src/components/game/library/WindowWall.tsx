import React from "react";
import styled from "styled-components";
import bg_windowwall from "../../../assets/library/windowwall/bg_windowwall.png";
import window_open from "../../../assets/library/windowwall/window_open.png";
import window_close from "../../../assets/library/windowwall/window_close.png";
import window_number from "../../../assets/library/windowwall/window_number.png";
import bag from "../../../assets/library/windowwall/bag.png";

interface WindowWallProps {
  isWindowClose: boolean; // 창문 닫혀 있는지 여부
  setIsWindowClose: React.Dispatch<React.SetStateAction<boolean>>; // 창문 닫혀 있는지 여부 설정 함수
  isDarkMode: boolean; // 책장 확대 모달 활성화 여부
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>; // 책장 확대 모달 활성화 여부 설정 함수
}

// 창문벽
const WindowWall: React.FC<WindowWallProps> = ({
  isWindowClose,
  setIsWindowClose,
  isDarkMode,
  setIsDarkMode,
}) => {
  // 전등 클릭 시 실행하는 함수
  const clickLamp = () => {
    setIsDarkMode(!isDarkMode); // 불 켜고 끄기
  };

  // 창문 클릭 시 실행하는 함수
  const clickWindow = () => {
    setIsWindowClose(!isWindowClose); // 창문 열고 닫기
  };

  return (
    <>
      <Wrapper $isDarkMode={isDarkMode}>
        <Lamp onClick={clickLamp} />
        <Window
          src={isWindowClose ? window_close : window_open}
          alt="window_open"
          onClick={clickWindow}
        />
        <Bag src={bag} />
      </Wrapper>

      <WindowNumber $isDarkMode={isDarkMode} $isWindowClose={isWindowClose}>
        <img src={window_number} alt="window_number" />
      </WindowNumber>
    </>
  );
};

export default WindowWall;

const Wrapper = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_windowwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;

  filter: ${(props) =>
    props.$isDarkMode ? "brightness(0.5)" : "brightness(1)"};
`;

const Lamp = styled.div`
  /* background-color: pink;
  opacity: 0.4; */

  position: absolute;
  width: 7%;
  height: 25%;
  margin-left: 27.9%;
  margin-top: 14%;
`;

const Window = styled.img`
  position: absolute;
  width: 30%;
  margin-left: 35%;
  margin-top: 4%;
`;

const WindowNumber = styled.div<{
  $isDarkMode: boolean;
  $isWindowClose: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; // 보여주기용으로, 하위 요소의 event가 가능해야 함
  // 창문이 닫혀 있고, 불을 껐을 때 (다크모드)일 때만 가능
  display: ${(props) =>
    props.$isDarkMode && props.$isWindowClose ? "block" : "none"};

  img {
    width: 30%;
    margin-left: 35%;
    margin-top: 4%;
  }
`;

const Bag = styled.img`
  position: absolute;
  width: 12%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 31%;
`;
