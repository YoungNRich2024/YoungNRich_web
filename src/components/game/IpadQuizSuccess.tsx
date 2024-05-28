import React from "react";
import styled from "styled-components";
import ic_success from "../../assets/bedroom/ic_success.png";

// 침실 아이패드 퀴즈 실패 페이지
const IpadQuizSuccess = () => {
  return (
    <Wrapper>
      <Icon src={ic_success} alt="성공" />

      <MainText>정답입니다!</MainText>
      <SubText>
        침실 탈출에 성공하셨습니다! {"\n"} 아래 버튼을 클릭하면 다음 방으로
        이동합니다.
      </SubText>
      <MoveBtn>next ▶</MoveBtn>
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
