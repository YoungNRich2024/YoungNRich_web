import React, { useEffect } from "react";
import styled from "styled-components";
import door_open from "../../../assets/movestage/door_open.gif";
import { useRecoilState } from "recoil";
import { gameStepState } from "../../../recoil/atom";

// 서재로 이동할 때 나타나는 컴포넌트

const GotoLibrary = () => {
  const [gameStep, setGameStep] = useRecoilState(gameStepState); // 게임 단계 설정 함수

  // 3초 뒤에 서재로 이동
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGameStep(3);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [gameStep]);

  return (
    <Wrapper>
      <div className="text">서재로 이동합니다.. </div>
      <img src={door_open} alt="서재로 이동" className="door"/>
    </Wrapper>
  );
};

export default GotoLibrary;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;

  @media screen and (orientation: portrait) {
    width: 90vh;
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    width: 90vw;
    height: 100vh;
  }

  .text {
    font-family: GowunBatang-Regular;
    font-weight: bold;
  }

  .door {
    width: 30%;
  }
`;
