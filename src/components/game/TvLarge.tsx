import React from "react";
import styled from "styled-components";
import tv_large from "../../assets/bedroom/tv_large.png";
import YouTube from "react-youtube";

// TV 확대
const TvLarge = () => {
  return (
    <Wrapper>
      <VideoWrapper>
        <YouTube
          videoId="sv91cHVPBVs"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              rel: 0, // 관련 동영상 표시하지 않음
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 동영상이 끝나고 다른 동영상 썸네일이 뜨는 것을 방지
          }}
        />
      </VideoWrapper>
    </Wrapper>
  );
};

export default TvLarge;

const Wrapper = styled.div`
  width: 50%;
  height: 80%;
  background: url(${tv_large}) center no-repeat;
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const VideoWrapper = styled.div`
  width: 60%;
  height: 58%;
  margin-top: 5.8%;

  div {
    width: 100%;
    height: 100%;
  }
`;
