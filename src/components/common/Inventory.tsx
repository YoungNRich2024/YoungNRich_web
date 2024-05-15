import React from "react";
import styled from "styled-components";
import bg_inventory from "../../assets/common/bg_inventory.png";
import pad from "../../assets/bedroom/pad.png";
import magnifier from "../../assets/common/ic_magnifier.png";

// 인벤토리
const Inventory = () => {
  return (
    <Wrapper>
      <Background>
        <ItemList>
          <Item>
            <img src={pad} alt="pad" />
          </Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ItemList>
        <Magnifier>
          <img src={magnifier} alt="돋보기" />
        </Magnifier>
      </Background>
    </Wrapper>
  );
};

export default Inventory;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 10vh;
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    width: 10vw;
    height: 100vh;
  }
`;

const Background = styled.div`
  background: url(${bg_inventory}) center no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 100vh;
    height: 80vw;
  }
  @media screen and (orientation: landscape) {
    width: 100vw;
    height: 80vh;
  }
`;

const ItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Item = styled.div`
  background-color: var(--white);
  width: 30%;
  aspect-ratio: 1;
  border: 3px solid var(--black);
  border-radius: 5px;

  @media screen and (max-width: 500px), (max-height: 500px) { // 모바일
    border: 1.5px solid var(--black); // 테두리 굵기 줄이기
    width: 40%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Magnifier = styled(Item)`
  background-color: var(--darkblue);
`;
