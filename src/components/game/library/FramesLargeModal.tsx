import React, { useState } from "react";
import styled from "styled-components";
import bg_modal from "../../../assets/common/bg_modal.png";
import ic_down from "../../../assets/common/ic_down.png";
import original_frames from "../../../assets/library/vaultwall/original_frames.png";
import useImageSize from "../../common/useImageSize";

interface FramesLargeModalProps {
  framesLargeModal: boolean; // 전체 액자 확대 모달 활성화 여부
  setFramesLargeModal: React.Dispatch<React.SetStateAction<boolean>>; // 전체 액자 확대 모달 활성화 여부 설정 함수
}

// 액자 모달 관련 타입 정의
export type FrameItem = {
  isOpen: boolean; // 책 모달을 열었는지 여부
  content: number | null; // 어떤 책 모달인지
};

// 액자 확대 컴포넌트
const FramesLargeModal: React.FC<FramesLargeModalProps> = ({
  framesLargeModal,
  setFramesLargeModal,
}) => {
  const isRenderedByWidth = useImageSize(); // 배경이미지 부모 div 너비에 맞춰지는지 여부
  // 액자 모달 닫는 함수
  const closeModal = () => {
    setFramesLargeModal(false);
  };

  // 각 액자 모달 상태
  const [frameModal, setFrameModal] = useState<FrameItem>({
    isOpen: false,
    content: null,
  });

  if (!framesLargeModal) {
    return null; // 책장 확대 modal 상태가 false일 경우 null 리턴
  } else {
    // 책장 확대 modal 상태가 true일 경우 모달 보여주기
    return (
      <Wrapper>
        <BackgroundImage>
          <ItemContainer $isRenderedByWidth={isRenderedByWidth}>
            <FirstFrame />
            <ThirdFrame />
            <FifthFrame />
            <SecondFrame />
            <FourthFrame />
          </ItemContainer>
        </BackgroundImage>
        <CloseArrow
          src={ic_down}
          className="down"
          alt="close"
          onClick={closeModal}
        />
      </Wrapper>
    );
  }
};

export default FramesLargeModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  background: url(${bg_modal}) center no-repeat;
  background-size: cover;

  z-index: 10; // 금고벽 위에 띄우는 것이므로 z index 추가
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${original_frames}) center no-repeat;
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div<{ $isRenderedByWidth: boolean }>`
  aspect-ratio: 12 /7;
  ${(props) => (props.$isRenderedByWidth ? `width: 100%;` : `height: 100%;`)}
  position: relative;
`;

const Frame = styled.div`
  background-color: pink;
  opacity: 0.4;
  position: absolute;

  width: 15%;
  height: 33%;
`;

const FirstFrame = styled(Frame)`
  margin-left: 22%;
  margin-top: 16%;
`;

const SecondFrame = styled(Frame)`
  margin-left: 45%;
  margin-top: 31%;
`;

const ThirdFrame = styled(Frame)`
  margin-left: 42%;
  margin-top: 8%;
`;

const FourthFrame = styled(Frame)`
  margin-left: 64%;
  margin-top: 25%;
`;

const FifthFrame = styled(Frame)`
  margin-left: 27%;
  margin-top: 37%;
`;

const CloseArrow = styled.img`
  width: 4%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;

  animation-name: down-animation;
  animation-duration: 1s;
  animation-iteration-count: 2;

  cursor: pointer;

  @keyframes down-animation {
    0% {
    }
    100% {
      transform: translateY(20px);
    }
  }
`;
