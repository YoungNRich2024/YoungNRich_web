import React, { useState } from "react";
import styled from "styled-components";

import useImageSize from "../../common/useImageSize";
import { useRecoilState, useSetRecoilState } from "recoil";
import { inventoryState, modalState } from "../../../recoil/atom";

import bg_bedroom from "../../../assets/bedroom/bg_bedroom.webp";
import pad from "../../../assets/bedroom/pad.png";
import remocon from "../../../assets/bedroom/remocon.png";
import tv_on from "../../../assets/bedroom/tv_on.png";
import tv_off from "../../../assets/bedroom/tv_off.png";

import Dialog from "../../common/Dialog";
import { bedroomData, bedroomKeys } from "../../../data/bedroomData";

// 침실 - 퍼즐 1
const Bedroom = () => {
  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  const [showIpad, setShowIpad] = useState(true); // 아이패드 활성화 여부
  const [showPillow, setShowPillow] = useState(true); // 베개 클릭 활성화 여부
  const [isTvOn, setIsTvOn] = useState(false); // TV 켜짐 여부

  const [inventory, setInventory] = useRecoilState(inventoryState); // 인벤토리 설정 함수
  const setModal = useSetRecoilState(modalState); // 모달 내용 변경 함수

  const isRenderedByWidth = useImageSize(); // 배경이미지 부모 div 너비에 맞춰지는지 여부

  // 대화창 띄우기
  const turnOnDialog = (item: bedroomKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(bedroomData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  // 아이패드 클릭 시
  const clickIpad = () => {
    setShowIpad(false); // 아이패드 사라짐
    setInventory((prev) => [
      ...prev,
      { id: prev.length, name: "pad", image: pad, checked: false },
    ]); // 인벤토리에 아이패드 추가
    turnOnDialog("pad"); // 아이패드 관련 대화창 활성화
  };

  // 베개 클릭 시
  const clickPillow = () => {
    setShowPillow(false); // 베개 클릭 사라짐
    setInventory((prev) => [
      ...prev,
      { id: prev.length, name: "remocon", image: remocon, checked: false },
    ]); // 인벤토리에 아이패드 추가
    turnOnDialog("pillow"); // 리모콘 관련 대화창 활성화
  };

  // 꺼진 TV 클릭 시
  const clickOffTv = () => {
    const remoconItem = inventory.find((item) => item.name === "remocon"); // 인벤토리에서 리모컨 찾기
    if (remoconItem?.checked) {
      // 리모컨 누른 상황일 때 TV 켜기
      setIsTvOn(true);
    } else {
      turnOnDialog("tv");
    }
  };

  // 켜진 TV 클릭 시
  const clickOnTv = () => {
    setModal({ isOpen: true, content: "tv" });
  };

  return (
    <Wrapper>
      <Background>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          <Photo onClick={() => turnOnDialog("photo")} />
          {showPillow && <Pillow onClick={clickPillow} />}
          {showIpad && <Pad src={pad} alt="pad" onClick={clickIpad} />}
          {isTvOn ? (
            <TV src={tv_on} alt="tv_on" onClick={clickOnTv} />
          ) : (
            <TV src={tv_off} alt="tv_off" onClick={clickOffTv} />
          )}

          {activeDialog && (
            <Dialog
              setActiveDialog={setActiveDialog}
              dialogScript={dialogScript}
            />
          )}
        </ItemContainer>
      </Background>
    </Wrapper>
  );
};

export default Bedroom;

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

const Background = styled.div`
  width: 100%;
  height: 100%;

  background: url(${bg_bedroom}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div<{ $isRenderedByWidth: boolean }>`
  aspect-ratio: 12 /7;
  ${(props) => (props.$isRenderedByWidth ? `width: 100%;` : `height: 100%;`)}
  position: relative;
`;

const Pad = styled.img`
  position: absolute;

  width: 15%;
  margin-top: 45%;
  margin-left: 19%;
`;

const TV = styled.img`
  position: absolute;

  width: 29.5%;
  margin-top: 24.5%;
  margin-left: 60%;
`;

const Pillow = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */

  width: 14%;
  height: 10%;
  margin-top: 20%;
  margin-left: 55%;
`;

const Photo = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */

  width: 12%;
  height: 16%;
  margin-top: 3%;
  margin-left: 77%;
`;
