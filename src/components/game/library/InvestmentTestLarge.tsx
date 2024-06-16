import React from "react";
import styled from "styled-components";
import InvestmentTest from "./InvestmentTest";
import { useRecoilValue } from "recoil";
import { puzzle4State } from "../../../recoil/atom";
import InvestmentTestResult from "./InvestmentTestResult";

// 게임 페이지 - 퍼즐 1 ~ 퍼즐 5
const InvestmentTestLarge = () => {
  const isTestComplete = useRecoilValue(puzzle4State);
  // 투자 성향 테스트 완료했을 경우 resultpage, 안되어 있을 경우 testpage
  return (
    <BulletinBoard>
      {isTestComplete ? <InvestmentTestResult /> : <InvestmentTest />}
    </BulletinBoard>
  );
};

export default InvestmentTestLarge;

const BulletinBoard = styled.div`
  width: 80%;
  height: 80%;
  background-color: var(--white);

  border: 5px solid var(--black);
  box-shadow: 0 0 0 10px var(--white), 0 0 0 20px var(--black);

  position: relative;
`;
