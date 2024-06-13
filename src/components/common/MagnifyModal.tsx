import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { inventoryState, modalState } from "../../recoil/atom";
import bg_modal from "../../assets/common/bg_modal.png";
import ic_down from "../../assets/common/ic_down.png";
import TvLarge from "../game/bedroom/TvLarge";
import IpadLarge from "../game/bedroom/IpadLarge";
import FinancialStatementLarge from "../game/library/FinancialStatementLarge";
import CabinetLarge from "../game/library/CabinetLarge";

// 확대 모달
const MagnifyModal = () => {
  const [modal, setModal] = useRecoilState(modalState); // modal 전역 상태
  const setInventory = useSetRecoilState(inventoryState); // 인벤토리 설정 함수

  if (!modal.isOpen) return null; // modal의 isOpen이 false일 경우 null 리턴

  // 모달 닫는 함수
  const closeModal = () => {
    setModal({ isOpen: false, content: null }); // 모달 닫기
    // 모달 닫을 때 인벤토리 모든 아이템의 check 해제
    setInventory((prev) => prev.map((item) => ({ ...item, checked: false })));
  };

  return (
    <Wrapper>
      {modal.content === "tv" && <TvLarge />}
      {modal.content === "pad" && <IpadLarge />}
      {modal.content === "financial" && <FinancialStatementLarge />}
      {modal.content === "cabinet" && <CabinetLarge />}
      {/* <div className="modal-content">{modal.content}</div> */}
      <CloseArrow
        src={ic_down}
        className="down"
        alt="close"
        onClick={closeModal}
      />
    </Wrapper>
  );
};

export default MagnifyModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  background: url(${bg_modal}) center no-repeat;
  background-size: cover;
`;

const CloseArrow = styled.img`
  width: 4%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;

  animation-name: down-animation;
  animation-duration: 1s;
  animation-iteration-count: 2;

  cursor: pointer;

  @keyframes down-animation {
    0% {
    }
    100% {
      transform: translateY(20px);
    }
  }
`;
