import React from "react";
import styled from "styled-components";
import Bedroom from "../components/game/Bedroom";
import Inventory from "../components/common/Inventory";
import MagnifyModal from "../components/common/MagnifyModal";

// 게임 페이지 - 퍼즐 1 ~ 퍼즐 5
const GamePage = () => {
  return (
    <Wrapper>
      <Bedroom />
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
