import React, { useState } from "react";
import styled from "styled-components";
import cabinet_large from "../../../assets/library/bookshelfwall/cabinet_large.png";
import CabinetToggle from "./CabinetToggle";
import { puzzle2Data } from "../../../data/libraryData";

// 퀴즈 아이템 타입 정의
export interface CabinetQuizItem {
  id: number;
  checked: boolean;
}

// 수납장 확대
const CabinetLarge = () => {
  // 퍼즐 2 수납장 퀴즈
  const [cabinetQuiz, setCabinetQuiz] = useState<CabinetQuizItem[]>([
    { id: 0, checked: true },
    { id: 1, checked: true },
    { id: 2, checked: true },
    { id: 3, checked: true },
  ]);

  // submit 클릭 시 실행되는 함수
  const clickSubmit = () => {
    // 퀴즈가 정답인지 확인
    if (JSON.stringify(cabinetQuiz) === JSON.stringify(puzzle2Data)) {
      console.log("성공");
    } else {
      alert("실패");
    }
  };

  return (
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
    margin-bottom: -3px;
    box-shadow: 0px 0px 0px 0px var(--gold3);

    @media screen and (max-width: 500px), (max-height: 500px) {
      margin-bottom: 0;
    }
  }
`;
