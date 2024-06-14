import React from "react";
import styled from "styled-components";
import bag_large from "../../../assets/library/windowwall/bag_large.png";
import puzzle3 from "../../../assets/library/windowwall/puzzle3.png";
import BagPasswordPad from "./BagPasswordPad";

// 창문벽 가방 확대
const BagLarge = () => {
  return (
    <Wrapper>
      <BagDiv>
        <BagSection>
          <Puzzle3 src={puzzle3} alt="puzzle3" />
        </BagSection>
        <BagSection>
          <BagPasswordPad />
        </BagSection>
      </BagDiv>
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
`;
