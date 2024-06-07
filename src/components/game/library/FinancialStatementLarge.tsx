import React from "react";
import styled from "styled-components";
import financial_statement_a from "../../../assets/library/bookshelfwall/financial_statement_a.png";
import financial_statement_b from "../../../assets/library/bookshelfwall/financial_statement_b.png";

// 재무제표 확대
const FinancialStatementLarge = () => {
  return (
    <Wrapper>
      <FinancialImage src={financial_statement_a} alt="financial_statement_a" />
      <FinancialImage src={financial_statement_b} alt="financial_statement_b" />
    </Wrapper>
  );
};

export default FinancialStatementLarge;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  // background: var(--gold2);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const FinancialImage = styled.img`
  height: 100%;
`;
