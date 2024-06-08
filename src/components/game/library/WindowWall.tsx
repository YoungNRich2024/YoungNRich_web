import React, { useState } from "react";
import styled from "styled-components";
import bg_windowwall from "../../../assets/library/windowwall/bg_windowwall.png";
import window_open from "../../../assets/library/windowwall/window_open.png";
import window_close from "../../../assets/library/windowwall/window_close.png";
import window_close_dark from "../../../assets/library/windowwall/window_close_dark.png";
import bag from "../../../assets/library/windowwall/bag.png";

// 창문벽
const WindowWall = () => {
  const [isWindowClose, setIsWindowClose] = useState(false); // 창문 닫혀 있는지 여부
  const clickWindow = () => {
    setIsWindowClose(!isWindowClose);
  };
  return (
    <Wrapper>
      <Lamp />
      <Window
        src={isWindowClose ? window_close : window_open}
        alt="window_open"
        onClick={clickWindow}
      />
      <Bag src={bag} />
    </Wrapper>
  );
};

export default WindowWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_windowwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
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

const Bag = styled.img`
  position: absolute;
  width: 12%;
  bottom: 0;
  margin-bottom: 3%;
  margin-left: 31%;
`;
