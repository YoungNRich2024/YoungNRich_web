import React, { useState } from "react";
import styled from "styled-components";
import bg_color_modal from "../../../assets/common/bg_color_modal.png";
import ic_down from "../../../assets/common/ic_down.png";
import { FrameItem } from "./FramesLargeModal";
import { investorFrameData } from "../../../data/libraryData";
import TwoWayDialog from "../../common/TwoWayDialog";

interface FrameModalProps {
  frameModal: FrameItem; // 책장 확대 모달 활성화 여부
  setFrameModal: React.Dispatch<React.SetStateAction<FrameItem>>; // 책장 확대 모달 활성화 여부 설정 함수
}

// 각 액자 모달 - 투자자와의 대화
const FrameModal: React.FC<FrameModalProps> = ({
  frameModal,
  setFrameModal,
}) => {
  const frameId = frameModal.content; // 사용자가 선택한 액자 아이디

  // 전체 투자자 데이터에서 사용자가 선택한 아이디를 바탕으로 데이터 추려내기
  const [investorData] = investorFrameData.filter(
    (investor) => investor.investorId === frameId
  );

  // 대사 step
  const [curDialogStep, setCurDialogStep] = useState(1);

  // 액자 모달 닫는 함수
  const closeModal = () => {
    setFrameModal({ isOpen: false, content: null });
  };

  if (!frameModal.isOpen) {
    return null;
  } else {
    // modal의 isOpen이 true일 경우 액자 모달 리턴
    return (
      <Wrapper>
        <FrameContainer>
          <FrameImageSection>
            <img
              src={investorData.frameImage}
              className="frameImage"
              alt="investorFrameImage"
            />
            {/* 투자 전략 설명 시에만 포트폴리오 보여줌 */}
            {curDialogStep === 3 && (
              <img
                src={investorData.portfolioImage}
                className="portfolioImage"
                alt="investorPortfolioImage"
              />
            )}
          </FrameImageSection>

          <TwoWayDialog
            investorData={investorData}
            curDialogStep={curDialogStep}
            setCurDialogStep={setCurDialogStep}
          />
        </FrameContainer>
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

export default FrameModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  background: url(${bg_color_modal}) center no-repeat;
  background-size: cover;

  z-index: 20; // 액자 전체 모달(10)보다 z index 더 키우기
`;

const FrameContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FrameImageSection = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  .frameImage {
    height: 100%;
  }

  .portfolioImage {
    height: 70%;
  }
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

  z-index: 40; // 전체 확대 모달(30)보다 z index 더 키우기

  @keyframes down-animation {
    0% {
    }
    100% {
      transform: translateY(20px);
    }
  }
`;
