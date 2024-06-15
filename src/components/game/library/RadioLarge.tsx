import React, { useRef } from "react";
import styled from "styled-components";
import radio_large from "../../../assets/library/bookshelfwall/radio_large.png";

import puzzle3_radio from "../../../assets/library/bookshelfwall/puzzle3_radio.mp3";
import puzzle3_radio_reverse from "../../../assets/library/bookshelfwall/puzzle3_radio_reverse.mp3";

// 책장벽 라디오 확대
const RadioLarge = () => {
  const audioRef = useRef<HTMLAudioElement>(null); // 라디오 음성
  const rewindAudioRef = useRef<HTMLAudioElement>(null); // 역재생 라디오 음성

  const handlePlay = () => {
    if (audioRef.current) {
      // 다른 음원이 play되고 있을 경우
      audioRef.current.pause(); // 일시정지
      audioRef.current.currentTime = 0; // 초기화
    }
    if (rewindAudioRef.current) {
      rewindAudioRef.current.play(); // 역재생 음원 play
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      // 정상 음원
      audioRef.current.pause(); // 일시정지
      audioRef.current.currentTime = 0; // 초기화
    }
    if (rewindAudioRef.current) {
      // 역재생 음원
      rewindAudioRef.current.pause(); // 일시정지
      rewindAudioRef.current.currentTime = 0; // 초기화
    }
  };

  const handleRewindPlay = () => {
    if (rewindAudioRef.current) {
      // 다른 음원이 play되고 있을 경우
      rewindAudioRef.current.pause(); // 일시정지
      rewindAudioRef.current.currentTime = 0; // 초기화
    }
    if (audioRef.current) {
      audioRef.current.play(); // 정상 음원 play
    }
  };

  return (
    <Wrapper>
      <audio src={puzzle3_radio} ref={audioRef} />
      <audio src={puzzle3_radio_reverse} ref={rewindAudioRef} />
      <RadioButtons>
        <div className="btn" onClick={handlePlay} />
        <div className="btn" onClick={handlePause} />
        <div className="btn" onClick={handleRewindPlay} />
      </RadioButtons>
    </Wrapper>
  );
};

export default RadioLarge;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  background: url(${radio_large}) center no-repeat;
  background-size: contain;
`;

const RadioButtons = styled.div`
  position: absolute;
  width: 25%;
  height: 10%;
  margin-left: 10%;
  margin-top: 20%;
  display: flex;

  .btn {
    width: 33%;
    height: 100%;

    cursor: pointer;

    &:active {
      background: var(--darkblue);
      opacity: 0.1;
    }
  }
`;
