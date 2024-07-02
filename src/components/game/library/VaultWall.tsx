import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useImageSize from "../../common/useImageSize";

import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";

import vault_0sol from "../../../assets/library/vaultwall/vault_0sol.png";
import vault_1sol from "../../../assets/library/vaultwall/vault_1sol.png";
import vault_2sol from "../../../assets/library/vaultwall/vault_2sol.png";
import vault_3sol from "../../../assets/library/vaultwall/vault_3sol.png";

import frames from "../../../assets/library/vaultwall/frames.png";
import frames_eye from "../../../assets/library/vaultwall/frames_eye.png";

import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  libraryPuzzleState,
  modalState,
  puzzle4State,
} from "../../../recoil/atom";

import { vaultWallData, vaultWallKeys } from "../../../data/libraryData";

import Dialog from "../../common/Dialog";
import FramesLargeModal from "./FramesLargeModal";

interface VaultWallProps {
  puzzleSuccess: number; // 서재 퍼즐 성공 개수
  setPuzzleSuccess: React.Dispatch<React.SetStateAction<number>>; // 서재 퍼즐 성공 개수 설정 함수
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
  isWindowClose: boolean; // 창문 닫았는지 여부 (다크모드)
}

// 금고벽
const VaultWall: React.FC<VaultWallProps> = ({
  puzzleSuccess,
  setPuzzleSuccess,
  isDarkMode,
  isWindowClose,
}) => {
  const isRenderedByWidth = useImageSize(); // 배경이미지 부모 div 너비에 맞춰지는지 여부

  const puzzleState = useRecoilValue(libraryPuzzleState); // 서재 퍼즐 3개 완료 여부 상태
  const testResultNum = useRecoilValue(puzzle4State); // 퍼즐 4 투자 성향 테스트 결과

  const puzzle4Done = (
    puzzleState.find((puzzle) => puzzle.puzzleId === 4) || {}
  ).done; // 퍼즐4 완료 여부만 따로 변수에 담기

  const setModal = useSetRecoilState(modalState); // 모달 내용 변경 함수

  const [framesLargeModal, setFramesLargeModal] = useState(false); // 전체 액자 모달 활성화 여부

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

  useEffect(() => {
    // 테스트했고 퍼즐4(투자자 선택) 완료 안했으면 frames 관련 대화창 띄우기
    if (testResultNum && !puzzle4Done) {
      turnOnDialog("frames");
    }
  }, [testResultNum, puzzle4Done]);

  const clickTest = () => {
    setModal({ isOpen: true, content: "investmentTest" });
  };

  const clickFramesEye = () => {
    setFramesLargeModal(true); // 전체 액자 확대 모달 활성화
  };

  return (
    <>
      <Wrapper $isDarkMode={isDarkMode} $isWindowClose={isWindowClose}>
        <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
          <Bull onClick={() => turnOnDialog("bull")} />
          <Test onClick={clickTest} />
          <Bear onClick={() => turnOnDialog("bear")} />
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
          {/* 테스트했고 퍼즐4(투자자 선택) 완료 안했으면 눈 뜬 액자 표시 */}
          {testResultNum && !puzzle4Done ? (
            <Frames
              src={frames_eye}
              alt="frames_eye"
              onClick={clickFramesEye}
            />
          ) : (
            <Frames src={frames} alt="frames" />
          )}

          {/* 대화창 */}
          {activeDialog && (
            <Dialog
              setActiveDialog={setActiveDialog}
              dialogScript={dialogScript}
            />
          )}
        </ItemContainer>
      </Wrapper>
      {framesLargeModal && (
        <FramesLargeModal
          framesLargeModal={framesLargeModal}
          setFramesLargeModal={setFramesLargeModal}
        />
      )}
    </>
  );
};

export default VaultWall;

const Wrapper = styled.div<{ $isDarkMode: boolean; $isWindowClose: boolean }>`
  width: 100%;
  height: 100%;

  background: url(${bg_vaultwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: ${(props) =>
    props.$isDarkMode && props.$isWindowClose
      ? "brightness(0.3)"
      : props.$isDarkMode || props.$isWindowClose
      ? "brightness(0.5)"
      : "brightness(1)"};
`;

const ItemContainer = styled.div<{ $isRenderedByWidth: boolean }>`
  aspect-ratio: 12 /7;
  ${(props) => (props.$isRenderedByWidth ? `width: 100%;` : `height: 100%;`)}
  position: relative;
`;

const Bull = styled.div`
  /* background-color: pink;
  opacity: 0.4; */
  position: absolute;
  width: 18%;
  height: 27%;

  margin-left: 15%;
  margin-top: 6%;
`;

const Test = styled.div`
  /* background-color: pink;
  opacity: 0.5; */
  position: absolute;
  width: 19%;
  height: 20%;
  margin-left: 14%;
  margin-top: 25%;
`;

const Bear = styled.div`
  /* background-color: pink;
  opacity: 0.4; */
  position: absolute;
  width: 15%;
  height: 22%;
  margin-left: 70%;
  margin-top: 5%;
`;

const Vault = styled.img<{ $isDarkMode: boolean }>`
  position: absolute;
  width: 28%;
  bottom: 0;
  margin-bottom: 2.4%;
  margin-left: 38%;

  // 불 껐을 때 (다크모드) 밝기 올리기
  filter: ${(props) =>
    props.$isDarkMode ? "brightness(1.5)" : "brightness(1)"};
`;

const Frames = styled.img`
  position: absolute;
  width: 27%;
  right: 0;
  margin-right: 7%;
  margin-top: 21%;
`;
