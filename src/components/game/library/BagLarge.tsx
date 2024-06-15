import React, { useState } from "react";
import styled from "styled-components";
import bag_large from "../../../assets/library/windowwall/bag_large.png";
import puzzle3 from "../../../assets/library/windowwall/puzzle3.png";
import BagPasswordPad from "./BagPasswordPad";
import Puzzle3MagnifyModal from "./Puzzle3MagnifyModal";

// 창문벽 가방 확대
const BagLarge = () => {
  // 퍼즐3 모달 상태
  const [puzzle3Modal, setPuzzle3Modal] = useState(false);

  return (
    <Wrapper>
      <BagDiv>
        <BagSection>
          <Puzzle3
            src={puzzle3}
            alt="puzzle3"
            // 퍼즐 3 문제 open
            onClick={() => setPuzzle3Modal(true)}
          />
        </BagSection>
        <BagSection>
          <BagPasswordPad />
        </BagSection>
      </BagDiv>
      {/* 퍼즐3 확대 모달 */}
      {puzzle3Modal && (
        <Puzzle3MagnifyModal
          puzzle3Modal={puzzle3Modal}
          setPuzzle3Modal={setPuzzle3Modal}
        />
      )}
    </Wrapper>
  );
};

export default BagLarge;

const Wrapper = styled.div`
  width: 65%;
  height: 80%;
  background: url(${bag_large}) center no-repeat;
  background-size: contain;
`;

const BagDiv = styled.div`
  width: 79%;
  height: 83%;
  margin-left: 15%;
  margin-top: 5%;

  display: flex;
  justify-content: space-between;
`;

const BagSection = styled.div`
  width: 47%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Puzzle3 = styled.img`
  width: 100%;
  cursor: pointer;
`;
