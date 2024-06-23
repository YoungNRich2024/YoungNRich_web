import React, { useState } from "react";
import styled from "styled-components";
import bg_dialog from "../../assets/common/bg_dialog.png";
import { getTestTypeName, userFrameData } from "../../data/libraryData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { libraryPuzzleState, puzzle4State } from "../../recoil/atom";

interface TwoWayDialogProps {
  investorData: {
    investorId: number;
    investorName: string;
    frameImage: string;
    portfolioImage: string;
    script: string[];
  }; // 인물에 맞는 대사 데이터
  curDialogStep: number; // 현재 대사 step
  setCurDialogStep: React.Dispatch<React.SetStateAction<number>>; // 대사 step 설정 함수
}

// 퍼즐 4 액자(투자자)와의 대화창
const TwoWayDialog: React.FC<TwoWayDialogProps> = ({
  investorData,
  curDialogStep,
  setCurDialogStep,
}) => {
  // 사용자 투자 성향 테스트 결과
  const userTestResult = useRecoilValue(puzzle4State);
  // 사용자가 투자자 선택 여부를 정했을 때 true
  const [userDecided, setUserDecided] = useState(false);
  // 사용자가 투자자 선택 시 돌아오는 답변 state
  const [replyAboutChoice, setReplyAboutChoice] = useState<string | null>(null);

  const setPuzzleState = useSetRecoilState(libraryPuzzleState); // 서재 퍼즐 상태 설정 함수

  // 사용자 답변 클릭 시 실행되는 함수
  const clickNext = (action: boolean | null) => {
    if (action) {
      // '예' 선택 시
      setUserDecided(true); // 선택 완료
      // investorData.investorId와 userTestResult 결과 비교해서
      if (investorData.investorId === userTestResult) {
        // 맞는 경우

        setReplyAboutChoice(
          `<div>우리 <strong>${getTestTypeName(
            investorData.investorId
          )}</strong> 랩실에 온 것을 환영하네!</div><div>딱 자네 같은 <strong>${getTestTypeName(
            investorData.investorId
          )}</strong> 인재를 찾고 있었어!</div><div>자네가 이 방을 탈출할 수 있도록 도움을 주겠네!</div>`
        );
        setPuzzleState((prePuzzle) =>
          prePuzzle.map((puzzle) =>
            puzzle.puzzleId === 4 ? { ...puzzle, done: true } : puzzle
          )
        ); // 서재 퍼즐4 done 여부 true로 변경
        // 자물쇠 열림
      } else {
        // 아닌 경우 '우리와 맞지 않는 인재'
        setReplyAboutChoice(
          `<div>자네의 <strong>투자 성향 테스트 결과</strong>를 보니, 미안하지만 자네는 우리 <strong>${getTestTypeName(
            investorData.investorId
          )}</strong> 랩실과는 <strong>맞지 않는</strong> 인재인 것 같네.</div><div>우리 알렉산더 금융대학원에는 자네의 투자 성향과 아주 잘 맞는 다른 랩실도 있으니 부디 적합한 랩실을 찾아 좋은 결과를 얻길 바라네!</div>`
        );
      }
    } else if (action === false) {
      // '아니오' 선택 시
      setUserDecided(true); // 선택 완료

      // investorData.investorId와 userTestResult 결과 비교해서
      if (investorData.investorId === userTestResult) {
        // 맞는 경우
        setReplyAboutChoice(
          `흠… 자네의 투자 성향 테스트 결과를 다시 잘 고려해볼 필요가 있어보이네.`
        );
      } else {
        // 아닌 경우
        setReplyAboutChoice(
          `<div>하하! 자네의 투자 성향 테스트 결과를 보니 아무래도 우리 <strong>${getTestTypeName(
            investorData.investorId
          )}</strong> 랩실과는 맞지 않겠구만 그래!</div><div>자네의 투자 성향과 잘 맞는 다른 랩실을 잘 찾길 바라네! 행운을 비네 젊은이~</div>`
        );
      }
    } else {
      setCurDialogStep(curDialogStep + 1);
    }
  };

  return (
    <Wrapper>
      <div
        className="dialog"
        dangerouslySetInnerHTML={{
          __html: userDecided
            ? replyAboutChoice || ""
            : investorData.script[curDialogStep - 1],
        }}
      ></div>
      <div className="name">{investorData.investorName}</div>
      {!userDecided && (
        <UserSection>
          <div className="optionSection">
            {userFrameData[curDialogStep - 1].map((item) => (
              <Option onClick={() => clickNext(item.action)}>
                {`☞ ` + item.label}
              </Option>
            ))}
          </div>
        </UserSection>
      )}
    </Wrapper>
  );
};

export default TwoWayDialog;

const Wrapper = styled.div`
  background: url(${bg_dialog}) center no-repeat;
  background-size: contain;
  /* position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  left: 50%;
  transform: translate(-50%); */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 30%;
  aspect-ratio: 128 / 33;

  position: relative;

  .dialog {
    width: 90%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--darkblue);

    font-family: Pretendard-Regular;
    word-break: keep-all;
    white-space: pre-wrap;
    text-align: center;
    line-height: 20px;

    @media screen and (max-width: 500px), (max-height: 500px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .name {
    position: absolute;
    width: 20%;
    height: 20%;
    top: 0;
    left: 0;
    margin-top: -1.5%;
    margin-left: 3%;

    background-color: var(--white);
    border: 1px solid var(--black);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: GowunBatang-Regular;
    font-weight: bold;

    @media screen and (max-width: 500px), (max-height: 500px) {
      font-size: 12px;
    }
  }
`;

const UserSection = styled.div`
  position: absolute;
  /* top: 0; */
  top: 0;
  right: 0;
  margin-right: 1%;

  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-family: GowunBatang-Regular;
  font-weight: bold;
  text-shadow: 0px 0px 10px var(--black);
  letter-spacing: 1px;

  .optionSection {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

const Option = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4% 6%;
  text-align: center;
  word-break: keep-all;

  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 5px;

  &:hover {
    background: color-mix(in srgb, var(--black) 5%, white);
  }

  @media screen and (max-width: 500px), (max-height: 500px) {
    font-size: 12px;
  }
`;
