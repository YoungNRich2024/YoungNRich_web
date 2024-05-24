import React from "react";
import styled from "styled-components";
import bg_inventory from "../../assets/common/bg_inventory.png";
import magnifier from "../../assets/common/ic_magnifier.png";
import { useRecoilState } from "recoil";
import { inventoryState } from "../../recoil/atom";

// 인벤토리
const Inventory = () => {
  const [inventory, setInventory] = useRecoilState(inventoryState);
  // 인벤토리 항목과 빈 칸을 포함한 총 6개의 아이템 칸을 렌더링
  const inventoryItems = [
    ...inventory,
    ...Array(6 - inventory.length).fill(null),
  ];

  // 아이템을 클릭했을 때 checked 상태를 반전시키는 함수
  const toggleChecked = (id: number) => {
    // 해당하는 아이템을 찾으면 checked value를 반전
    // 해당하는 아이템이 아니면 checked를 false로 지정 (하나만 선택되도록)
    setInventory((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    );
  };

  return (
    <Wrapper>
      <Background>
        <ItemList>
          {inventoryItems.map((item, index) => (
            <Item
              key={index}
              onClick={() => item && toggleChecked(item.id)}
              checked={item && item.checked}
            >
              {item ? <img src={item.image} alt={item.name} /> : null}
            </Item>
          ))}
        </ItemList>
        <Magnifier checked={false}>
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

const Item = styled.div<{ checked: boolean }>`
  background-color: ${(props) =>
    props.checked ? "var(--gold2)" : "var(--white)"};
  width: 30%;
  aspect-ratio: 1;
  border: ${(props) =>
    props.checked ? "3px solid var(--gold4)" : "3px solid var(--black)"};
  border-radius: 5px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    border: ${(props) =>
      props.checked
        ? "2px solid var(--gold4)"
        : "1.5px solid var(--black)"}; // 테두리 굵기 줄이기
    width: 40%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Magnifier = styled(Item)<{ checked: boolean }>`
  background-color: var(--darkblue);
`;
