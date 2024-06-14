import React, { useState } from "react";
import styled from "styled-components";
import cabinet_large from "../../../assets/library/bookshelfwall/cabinet_large.png";
import CabinetToggle from "./CabinetToggle";
import {
  bookshelfWallData,
  bookshelfWallKeys,
  puzzle2Data,
} from "../../../data/libraryData";
import Dialog from "../../common/Dialog";

import { useRecoilState, useSetRecoilState } from "recoil";
import { libraryPuzzleState, puzzle2State } from "../../../recoil/atom";

// 퀴즈 아이템 타입 정의
export interface CabinetQuizItem {
  id: number;
  checked: boolean;
}

// 수납장 확대
const CabinetLarge = () => {
  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사
  const setPuzzleState = useSetRecoilState(libraryPuzzleState); // 서재 퍼즐 상태 설정 함수

  // 퍼즐 2 수납장 퀴즈
  const [cabinetQuiz, setCabinetQuiz] = useRecoilState(puzzle2State);

  // 대화창 띄우기
  const turnOnDialog = (item: bookshelfWallKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(bookshelfWallData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  // submit 클릭 시 실행되는 함수
  const clickSubmit = () => {
    // 퀴즈가 정답인지 확인
    if (JSON.stringify(cabinetQuiz) === JSON.stringify(puzzle2Data)) {
      turnOnDialog("puzzle_success"); // 퍼즐 성공 대화창
      setPuzzleState((prePuzzle) =>
        prePuzzle.map((puzzle) =>
          puzzle.puzzleId === 2 ? { ...puzzle, done: true } : puzzle
        )
      ); // 서재 퍼즐2 done 여부 true로 변경
    } else {
      turnOnDialog("puzzle_fail"); // 퍼즐 실패 대화창
    }
  };

  return (
    <>
      <Wrapper>
        <ToggleDiv>
          {[0, 1].map((section) => (
            <ToggleSection key={section}>
              {cabinetQuiz
                .filter((_, index) => Math.floor(index / 2) === section) // index 0, 1은 section 0, index 2, 3은 section 1
                .map((item) => (
                  <CabinetToggle
                    key={item.id}
                    toggleId={item.id}
                    cabinetQuiz={cabinetQuiz}
                    setCabinetQuiz={setCabinetQuiz}
                  />
                ))}
            </ToggleSection>
          ))}
          <SubmitBtn onClick={clickSubmit}>submit</SubmitBtn>
        </ToggleDiv>
      </Wrapper>
      {/* 대화창 */}
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
    </>
  );
};

export default CabinetLarge;

const Wrapper = styled.div`
  width: 50%;
  height: 80%;
  background: url(${cabinet_large}) center no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleDiv = styled.div`
  width: 50%;
  height: 80%;
  margin-bottom: 3%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  gap: 60px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    gap: 40px;
  }

  /* background-color: pink;
  opacity: 0.4; */
`;

const ToggleSection = styled.div`
  width: 100%;
  /* height: 50%; */

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    gap: 15px;
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 3%;
  margin-right: 3%;

  border-radius: 50%;

  width: 13%;
  aspect-ratio: 1;

  font-family: GowunBatang-Regular;
  font-weight: bold;
  background: var(--gold4);
  color: var(--white);
  border: 1px solid var(--black);
  box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--black);

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    width: 16%;
    font-size: 10px;
  }

  &:active {
    box-shadow: 0px 0px 0px 0px var(--gold3);
  }
`;
