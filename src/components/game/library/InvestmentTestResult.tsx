import React from "react";
import styled from "styled-components";
import { investmentTestResultData } from "../../../data/libraryData";

// 투자 성향 테스트 완료 컴포넌트

interface InvestmentTestResultProps {
  testResultNum: number;
}

const InvestmentTestResult: React.FC<InvestmentTestResultProps> = ({
  testResultNum,
}) => {
  // investmentTestResultData에서 결과 데이터 가져오기 
  // [{}] 형태이므로 첫 번째 요소만 가져오기
  const [userTestData] = investmentTestResultData.filter(
    (result) => result.resultId === testResultNum
  );
  return (
    <Wrapper>
      <Contents>
        <ImageSection>
          <img
            src={userTestData.resultImage}
            className="resultImage"
            alt="resultImage"
          />
        </ImageSection>
        <TextSection $resultColor={userTestData.resultColor}>
          <div className="resultIntro">당신의 투자 성향은...</div>
          <div className="resultTitle">{userTestData.resultTitle}</div>
          <div className="resultContent">{userTestData.resultContent}</div>
        </TextSection>
      </Contents>
    </Wrapper>
  );
};

export default InvestmentTestResult;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  width: 80%;
  height: 80%;
`;

const ImageSection = styled.div`
  width: 40%;
  .resultImage {
    width: 100%;
  }
`;

const TextSection = styled.div<{ $resultColor: string }>`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  width: 50%;

  .resultIntro {
  }

  .resultTitle {
    color: ${(props) => props.$resultColor};
    font-size: 48px;

    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      font-size: 32px;
    }
  }

  .resultContent {
    font-size: 20px;
    white-space: pre-wrap;
    word-break: keep-all;
    margin-top: 40px;

    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      font-size: 12px;
    }
  }
`;
