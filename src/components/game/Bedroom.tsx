import React, { useState } from "react";
import styled from "styled-components";
import bg_bedroom from "../../assets/bedroom/bg_bedroom.png";
import pad from "../../assets/bedroom/pad.png";
// import tv_on from "../../assets/bedroom/tv_on.png";
import tv_off from "../../assets/bedroom/tv_off.png";
import Dialog from "../common/Dialog";
import { bedroomData, bedroomKeys } from "../../data/bedroomData";

// 침실 - 퍼즐 1
const Bedroom = () => {
  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  // 클릭 시 실행되는 함수
  const onClickItem = (item: bedroomKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(bedroomData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  return (
    <Wrapper>
      <Photo onClick={() => onClickItem("photo")} />
      <Pillow onClick={() => onClickItem("pillow")} />
      <Pad src={pad} alt="pad" />
      <TV src={tv_off} alt="tv" onClick={() => onClickItem("tv")} />
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
    </Wrapper>
  );
};

export default Bedroom;

const Wrapper = styled.div`
  background: url(${bg_bedroom}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
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

const Pad = styled.img`
  position: absolute;

  @media screen and (orientation: portrait) {
    width: 12vh;
    margin-left: 20vh;
    margin-top: 78vw;
  }
  @media screen and (orientation: landscape) {
    width: 12vw;
    margin-left: 20vw;
    margin-top: 78vh;
  }
`;

const TV = styled.img`
  position: absolute;
  @media screen and (orientation: portrait) {
    width: 23vh;
    margin-left: 53vh;
    margin-top: 42vw;
  }
  @media screen and (orientation: landscape) {
    width: 23vw;
    margin-left: 53vw;
    margin-top: 42vh;
  }
`;

const Pillow = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */
  @media screen and (orientation: portrait) {
    width: 14vh;
    height: 7vw;

    margin-left: 49vh;
    margin-top: 36vw;
  }
  @media screen and (orientation: landscape) {
    width: 14vw;
    height: 7vh;

    margin-left: 49vw;
    margin-top: 36vh;
  }
`;

const Photo = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */

  @media screen and (orientation: portrait) {
    width: 10vh;
    height: 14vw;
    margin-left: 66vh;
    margin-top: 6vw;
  }

  @media screen and (orientation: landscape) {
    width: 10vw;
    height: 14vh;
    margin-left: 66vw;
    margin-top: 6vh;
  }
`;