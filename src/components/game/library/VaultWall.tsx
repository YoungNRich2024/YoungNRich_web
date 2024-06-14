import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";

import vault_0sol from "../../../assets/library/vaultwall/vault_0sol.png";
import vault_1sol from "../../../assets/library/vaultwall/vault_1sol.png";
import vault_2sol from "../../../assets/library/vaultwall/vault_2sol.png";
import vault_3sol from "../../../assets/library/vaultwall/vault_3sol.png";

import frames from "../../../assets/library/vaultwall/frames.png";

import { useRecoilValue } from "recoil";
import { libraryPuzzleState } from "../../../recoil/atom";

import { vaultWallData, vaultWallKeys } from "../../../data/libraryData";
import Dialog from "../../common/Dialog";

interface VaultWallProps {
  puzzleSuccess: number; // 서재 퍼즐 성공 개수
  setPuzzleSuccess: React.Dispatch<React.SetStateAction<number>>; // 서재 퍼즐 성공 개수 설정 함수
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
}

// 금고벽
const VaultWall: React.FC<VaultWallProps> = ({
  puzzleSuccess,
  setPuzzleSuccess,
  isDarkMode,
}) => {
  const puzzleState = useRecoilValue(libraryPuzzleState); // 서재 퍼즐 상태

  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사

  useEffect(() => {
    // puzzleState에서 done 여부 개수 세기
    const puzzleCount = puzzleState.filter((puzzle) => puzzle.done).length;
    setPuzzleSuccess(puzzleCount); // done 여부 개수 상태 업데이트
  }, [puzzleState]);

  // 대화창 띄우기
  const turnOnDialog = (item: vaultWallKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(vaultWallData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  return (
    <Wrapper $isDarkMode={isDarkMode}>
      <Bull onClick={() => turnOnDialog("bull")} />
      <Bear onClick={() => turnOnDialog("bear")}/>
      <Vault
        src={
          puzzleSuccess === 1
            ? vault_1sol
            : puzzleSuccess === 2
            ? vault_2sol
            : puzzleSuccess === 3
            ? vault_3sol
            : vault_0sol
        }
        alt="vault"
        $isDarkMode={isDarkMode}
      />
      <Frames src={frames} alt="frames" />
      {/* 대화창 */}
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
    </Wrapper>
  );
};

export default VaultWall;

const Wrapper = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_vaultwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;

  filter: ${(props) =>
    props.$isDarkMode ? "brightness(0.5)" : "brightness(1)"};
`;

const Bull = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */
  width: 15%;
  height: 26%;

  margin-left: 20%;
  margin-top: 5.5%;
`;

const Bear = styled.div`
  position: absolute;
  /* background-color: pink;
  opacity: 0.4; */

  width: 12%;
  height: 26%;
  margin-left: 68%;
  margin-top: 5%;
`;

const Vault = styled.img<{ $isDarkMode: boolean }>`
  position: absolute;
  width: 24.2%;
  bottom: 0;
  margin-bottom: 2.4%;
  margin-left: 39.5%;

  // 불 껐을 때 (다크모드) 밝기 올리기
  filter: ${(props) =>
    props.$isDarkMode ? "brightness(1.5)" : "brightness(1)"};
`;

const Frames = styled.img`
  position: absolute;
  width: 24%;
  right: 0;
  margin-right: 12.3%;
  /* margin-top: 16.5%; */
  margin-top: 18%;
`;
