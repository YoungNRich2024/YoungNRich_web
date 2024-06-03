import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { inventoryState } from "../../../recoil/atom";

import bg_doorwall from "../../../assets/library/doorwall/bg_doorwall.png";
import key from "../../../assets/library/doorwall/key.png";

import { doorWallData, doorWallKeys } from "../../../data/libraryData";
import Dialog from "../../common/Dialog";

interface DoorWallProps {
  showKey: boolean; // 열쇠 획득 여부
  setShowKey: React.Dispatch<React.SetStateAction<boolean>>; // 열쇠 획득 여부 설정 함수
}

// 문벽
const DoorWall: React.FC<DoorWallProps> = ({ showKey, setShowKey }) => {
  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  const setInventory = useSetRecoilState(inventoryState); // 인벤토리 설정 함수

  // 대화창 띄우기
  const turnOnDialog = (item: doorWallKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(doorWallData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  // 자켓 클릭 시
  const clickJacket = () => {
    setShowKey(false); // 키 클릭 사라짐
    setInventory((prev) => [
      ...prev,
      { id: prev.length, name: "key", image: key, checked: false },
    ]); // 인벤토리에 키 추가
    turnOnDialog("jacket"); // 자켓 관련 대화창 활성화
  };

  return (
    <Wrapper>
      <Portrait onClick={() => turnOnDialog("portrait")} />
      <Door onClick={() => turnOnDialog("door")} />
      {showKey && <Jacket onClick={clickJacket} />}
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
    </Wrapper>
  );
};

export default DoorWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_doorwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
`;

// 초상화
const Portrait = styled.div`
  /* background-color: pink;
  opacity: 0.5; */

  position: absolute;
  width: 9%;
  height: 23%;
  margin-left: 23.5%;
  margin-top: 11.5%;
`;

// 문
const Door = styled.div`
  /* background-color: pink;
  opacity: 0.5; */

  position: absolute;
  width: 22.5%;
  height: 83%;

  margin-left: 40%;
  margin-top: 5%;
`;

// 행거에 걸려 있는 자켓
const Jacket = styled.div`
  /* background-color: pink;
  opacity: 0.5; */

  position: absolute;
  width: 10%;
  height: 45%;

  margin-left: 67%;
  margin-top: 15.5%;
`;
