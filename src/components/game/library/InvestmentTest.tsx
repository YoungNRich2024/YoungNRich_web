import React, { useState } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";

import sticky_note_title from "../../../assets/library/vaultwall/sticky_note_title.png";
import loading from "../../../assets/common/loading.gif";

import { investmentTestData } from "../../../data/libraryData";

import { useSetRecoilState } from "recoil";
import { puzzle4State } from "../../../recoil/atom";

// 투자 성향 테스트 컴포넌트
const InvestmentTest = () => {
  // 테스트 시작 여부
  const [isTestStart, setIsTestStart] = useState(false);
  // 투자 성향 테스트 현재 문제 번호
  const [currentTestNum, setCurrentTestNum] = useState(0);
  // 투자 성향 테스트 점수
  const [testScore, setTestScore] = useState(0);
  // 퍼즐 4 전역 상태 저장 설정 함수
  const setPuzzle4Score = useSetRecoilState(puzzle4State);

  // loading 창 유무
  const [isLoading, setIsLoading] = useState(false);

  // 테스트 시작하기 버튼 클릭 시 실행되는 함수
  const clickTitleNote = () => {
    setIsTestStart(true); // 테스트 시작하기 이미지 지우기
  };

  // 선택지 클릭 시 실행되는 함수
  const clickOption = (score: number) => {
    if (currentTestNum >= 6) {
      // 마지막 문제 답 입력 시
      const finalScore = testScore + score; // 최종 점수 계산 // 최종 점수 반영
      // 점수 계산해서 전역 상태로 투자 성향 값 추가
      setIsLoading(true); // 로딩 창 띄우기
      // 2초 뒤에 결과 계산 -> 전역 상태에 값 저장 시 바로 result 컴포넌트로 이동
      setTimeout(() => {
        if (finalScore >= 7 && finalScore <= 11) {
          setPuzzle4Score(1); // 7 ~ 11점 : 안정형 (1)
        } else if (finalScore >= 12 && finalScore <= 18) {
          setPuzzle4Score(2); // 12 ~ 18점 : 안정추구형 (2)
        } else if (finalScore >= 19 && finalScore <= 24) {
          setPuzzle4Score(3); // 19 ~ 24점 : 위험중립형 (3)
        } else if (finalScore >= 25 && finalScore <= 31) {
          setPuzzle4Score(4); // 25 ~ 31점 : 적극투자형 (4)
        } else if (finalScore >= 32 && finalScore <= 36) {
          setPuzzle4Score(5); // 32 ~ 36점 : 공격투자형 (5)
        }
      }, 2000);
    } else {
      // 점수 합산
      setTestScore((prevTestScore) => prevTestScore + score);
      setCurrentTestNum(currentTestNum + 1);
    }
  };

  return (
    <>
      {/* 테스트 완료 시 로딩 창 활성화 */}
      {isLoading ? (
        <Loading>
          <img src={loading} className="loading" alt="loading" />
          <div className="loadingText">결과 분석 중...</div>
        </Loading>
      ) : (
        <Contents>
          {/* 테스트 시작하기 이미지 */}
          {!isTestStart && (
            // 하위 컴포넌트 클릭 막기
            <StartSection onClick={(e) => e.stopPropagation()}>
              <TitleNote
                src={sticky_note_title}
                alt="sticky_note_title"
                onClick={clickTitleNote}
              />
            </StartSection>
          )}
          {/* 테스트 내용 */}
          <QuestionImages>
            {investmentTestData.slice(currentTestNum).map((note) => (
              <Note
                key={note.testId}
                src={note.question_image}
                style={{ zIndex: 7 - note.testId }}
                alt="sticky_note"
              />
            ))}
          </QuestionImages>
          <AnswerSection>
            <ProgressSection>
              <Progress>{`${currentTestNum + 1} / ${
                investmentTestData.length
              }`}</Progress>
              <ProgressBar
                $currentTestNum={currentTestNum + 1}
                $totalLength={investmentTestData.length}
              >
                <div className="currentProgress" />
              </ProgressBar>
            </ProgressSection>
            <Options>
              {investmentTestData[currentTestNum].optionList.map(
                (test, index) => (
                  <OptionBtn
                    key={index}
                    onClick={() => clickOption(test.score)}
                  >
                    {test.option}
                  </OptionBtn>
                )
              )}
            </Options>
          </AnswerSection>
        </Contents>
      )}
    </>
  );
};

export default InvestmentTest;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const QuestionImages = styled.div`
  width: 50%;
  position: relative;
`;

const AnswerSection = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5%;
`;

const ProgressSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Progress = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 16px;
  color: var(--darkblue);

  width: 100%;
  text-align: end;
  margin-right: 5%;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 12px;
  }
`;

const ProgressBar = styled.div<{
  $currentTestNum: number;
  $totalLength: number;
}>`
  width: 100%;
  height: 20px;
  background: color-mix(in srgb, var(--darkblue) 20%, transparent);
  border-radius: 16px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    height: 10px;
    border-radius: 20px;
  }

  .currentProgress {
    width: ${(props) =>
      `calc(100% * ${props.$currentTestNum / props.$totalLength})`};
    height: 100%;

    background: var(--darkblue);
    border-radius: 16px;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 60%;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    gap: 8px;
  }
`;

const OptionBtn = styled.button`
  background: var(--darkblue);
  box-sizing: border-box;
  box-shadow: color-mix(in srgb, var(--darkblue) 30%, transparent) 0px 5px 10px;
  color: var(--white);
  border-radius: 16px;
  padding: 10px;
  word-break: keep-all;
  font-family: "GowunBatang-Regular";
  font-weight: bold;
  font-size: 16px;
  border: 0px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 12px;
    padding: 5px;
  }
`;

const StartSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
`;

const TitleNote = styled.img`
  height: 100%;
`;

const Note = styled.img`
  position: absolute;
  max-width: 100%;
  height: 90%;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3%;
  width: 100%;
  height: 100%;

  .loading {
    width: 10%;
  }

  .loadingText {
    font-family: GowunBatang-Regular;
    font-weight: bold;
    font-size: 16px;
    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      font-size: 12px;
    }
  }
`;
