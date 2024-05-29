import React from "react";
import styled from "styled-components";
import Bedroom from "../components/game/bedroom/Bedroom";
import Inventory from "../components/common/Inventory";
import MagnifyModal from "../components/common/MagnifyModal";

import { useRecoilValue } from "recoil";
import { gameStepState } from "../recoil/atom";

import GotoLibrary from "../components/game/movestage/GoToLibrary";
import Library from "../components/game/library/Library";

// 게임 페이지 - 퍼즐 1 ~ 퍼즐 5
const GamePage = () => {
  const gameStep = useRecoilValue(gameStepState);
  return (
    <Wrapper>
      {gameStep === 1 && <Bedroom />}
      {gameStep === 2 && <GotoLibrary />}
      {gameStep === 3 && <Library />}
      <Inventory />
      <MagnifyModal />
    </Wrapper>
  );
};

export default GamePage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
