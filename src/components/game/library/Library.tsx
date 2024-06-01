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
      {wallIndex === 0 && <BookShelfWall />}
      {wallIndex === 1 && <VaultWall />}
      {wallIndex === 2 && <DoorWall />}
      {wallIndex === 3 && <WindowWall />}

      <Buttons>
        <img src={ic_left} onClick={clickPrev} className="prev" />
        <img src={ic_right} onClick={clickNext} className="next" />
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
