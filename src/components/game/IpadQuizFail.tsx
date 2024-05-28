import React from "react";
import styled from "styled-components";
import ic_fail from "../../assets/bedroom/ic_fail.png";

interface IpadQuizFailProps {
  setQuizStep: React.Dispatch<React.SetStateAction<number>>; // 아이패드 퀴즈 단계 설정 함수
}

// 침실 아이패드 퀴즈 실패 페이지
const IpadQuizFail: React.FC<IpadQuizFailProps> = ({ setQuizStep }) => {
  // 퀴즈 처음으로 돌아감
  const clickMoveBtn = () => {
    setQuizStep(1);
  };
  return (
    <Wrapper>
      <Icon src={ic_fail} alt="성공" />

      <MainText>정답이 아닙니다!</MainText>
      <SubText>퀴즈를 푸는데 실패하셨군요. {"\n"} 다시 도전해보세요!</SubText>
      <MoveBtn onClick={clickMoveBtn}>quiz ▶</MoveBtn>
    </Wrapper>
  );
};

export default IpadQuizFail;

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

  color: var(--black);
  text-shadow: 0px 0px 10px var(--black);
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
