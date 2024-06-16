import React from "react";
import styled from "styled-components";
import ic_success from "../../../assets/bedroom/ic_success.png";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState, gameStepState } from "../../../recoil/atom";

// 침실 아이패드 퀴즈 실패 페이지
const IpadQuizSuccess = () => {
  const setModal = useSetRecoilState(modalState); // 모달 열려있는지 여부 설정 함수
  const [gameStep, setGameStep] = useRecoilState(gameStepState); // 게임 단계
  const clickNextBtn = () => {
    if (gameStep === 1) { // 침실에서만 서재 이동
      setModal({ isOpen: false, content: null }); // 모달 지우기
      setGameStep(2); // 침실 -> 서재 이동 페이지로 연결
    } else {
      alert("이미 제출된 퀴즈입니다.");
      setModal({ isOpen: false, content: null }); // 모달 지우기
    }
  };
  return (
    <Wrapper>
      <Icon src={ic_success} alt="성공" />

      <MainText>정답입니다!</MainText>
      <SubText>
        침실 탈출에 성공하셨습니다! {"\n"} 아래 버튼을 클릭하면 다음 방으로
        이동합니다.
      </SubText>
      <MoveBtn onClick={clickNextBtn}>next ▶</MoveBtn>
    </Wrapper>
  );
};

export default IpadQuizSuccess;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Icon = styled.img`
  width: 20%;
`;

const MainText = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 28px;
  color: var(--gold4);

  margin: 24px 0;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 20px;
    margin: 16px 0;
  }
`;

const SubText = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  color: var(--gold4);
  white-space: pre-wrap;
  text-align: center;

  font-size: 16px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 12px;
  }
`;

const MoveBtn = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 16px;
  }

  position: absolute;
  right: 0;
  bottom: 0;

  letter-spacing: 1px;

  color: var(--gold4);
  text-shadow: 0px 0px 10px var(--gold4);
  cursor: pointer;

  animation-name: move-animation;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes move-animation {
    0% {
    }
    100% {
      transform: translate(10px);
    }
  }
`;
