import React from "react";
import styled from "styled-components";
import useImageSize from "../../common/useImageSize";
import bg_windowwall from "../../../assets/library/windowwall/bg_windowwall.png";
import window_open from "../../../assets/library/windowwall/window_open.png";
import window_close from "../../../assets/library/windowwall/window_close.png";
import window_number from "../../../assets/library/windowwall/window_number.png";
import bag from "../../../assets/library/windowwall/bag.png";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../../recoil/atom";

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
  const isRenderedByWidth = useImageSize(); // 배경이미지 부모 div 너비에 맞춰지는지 여부

  const setModal = useSetRecoilState(modalState); // // 모달 내용 변경 함수

  // 전등 클릭 시 실행하는 함수
  const clickLamp = () => {
    setIsDarkMode(!isDarkMode); // 불 켜고 끄기
  };

  // 창문 클릭 시 실행하는 함수
  const clickWindow = () => {
    setIsWindowClose(!isWindowClose); // 창문 열고 닫기
  };

  const clickBag = () => {
    setModal({ isOpen: true, content: "bag" });
  };

  return (
    <>
      <Wrapper $isDarkMode={isDarkMode} $isWindowClose={isWindowClose}>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          <Lamp onClick={clickLamp} />
          <Window
            src={isWindowClose ? window_close : window_open}
            alt="window_open"
            onClick={clickWindow}
          />
          <Bag src={bag} alt="bag" onClick={clickBag} />
        </ItemContainer>
      </Wrapper>

      <WindowNumber $isDarkMode={isDarkMode} $isWindowClose={isWindowClose}>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          <img src={window_number} alt="window_number" />
        </ItemContainer>
      </WindowNumber>
    </>
  );
};

export default WindowWall;

const Wrapper = styled.div<{ $isDarkMode: boolean; $isWindowClose: boolean }>`
  width: 100%;
  height: 100%;

  background: url(${bg_windowwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: ${(props) =>
    props.$isDarkMode && props.$isWindowClose
      ? "brightness(0.3)"
      : props.$isDarkMode || props.$isWindowClose
      ? "brightness(0.5)"
      : "brightness(1)"};
`;

const ItemContainer = styled.div<{ $isRenderedByWidth: boolean }>`
  aspect-ratio: 12 /7;
  ${(props) => (props.$isRenderedByWidth ? `width: 100%;` : `height: 100%;`)}
  position: relative;
`;

const Lamp = styled.div`
  position: absolute;
  width: 7%;
  height: 25%;
  margin-left: 25%;
  margin-top: 16%;
`;

const Window = styled.img`
  position: absolute;
  width: 33%;

  margin-left: 33.5%;
  margin-top: 4.5%;
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
    props.$isDarkMode && props.$isWindowClose ? "flex" : "none"};

  justify-content: center;
  align-items: center;

  img {
    width: 30%;
    height: 72.5%;
    margin-left: 35%;
    margin-top: 4.5%;
  }
`;

const Bag = styled.img`
  position: absolute;
  width: 15%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 26.5%;
`;
