import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg_intro from "../assets/bg_intro.png";
import { introData } from "../data/introData";

const IntroPage = () => {
  const navigate = useNavigate();
  const [introStep, setIntroStep] = useState(0);

  const skipClick = () => {
    navigate("/tutorial");
  };

  const prevClick = () => {
    if (introStep > 0) {
      setIntroStep(introStep - 1);
    }
  };

  const nextClick = () => {
    if (introStep === introData.length - 1) {
      navigate("/tutorial");
    }
    if (introStep < introData.length - 1) {
      setIntroStep(introStep + 1);
    }
  };

  return (
    <Wrapper>
      <Background />
      <IntroBtn className="skip" onClick={skipClick}>
        skip ▶▶︎
      </IntroBtn>
      <IntroText>{introData[introStep]}</IntroText>
      <IntroBtn className="prev" onClick={prevClick}>
        ◀ prev
      </IntroBtn>
      <IntroBtn className="next" onClick={nextClick}>
        {introStep === introData.length - 1 ? "game" : "next"} ▶︎
      </IntroBtn>
    </Wrapper>
  );
};

export default IntroPage;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    height: 100vh;
  }
`;

// 배경 이미지를 어둡게 처리하기 위한 오버레이 레이어
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg_intro}) center no-repeat;
  background-size: cover;
  filter: brightness(40%);
  z-index: 0; // 뒤쪽에 배치
`;

const IntroBtn = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 24px;
  color: var(--gold1);

  position: absolute;

  text-shadow: 0px 0px 10px var(--gold1);
  letter-spacing: 1px;
  z-index: 1;

  cursor: pointer;

  &.skip {
    top: 0;
    left: 0;
    margin-top: 2%;
    margin-left: 2%;
  }

  &.prev {
    bottom: 0;
    left: 0;
    margin-bottom: 2%;
    margin-left: 2%;
  }

  &.next {
    bottom: 0;
    right: 0;
    margin-bottom: 2%;
    margin-right: 2%;
  }
`;

const IntroText = styled.div`
  font-family: KCCImkwontaek;
  font-weight: bold;
  font-size: 32px;
  color: var(--gold1);

  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 45px;

  width: 70%;
  text-align: center;

  z-index: 1;
`;
