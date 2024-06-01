import React from "react";
import styled from "styled-components";
import bg_bookshelfwall from "../../../assets/library/bookshelfwall/bg_bookshelfwall.png";
import financial from "../../../assets/library/bookshelfwall/financial.png";

// 책장벽
const BookShelfWall = () => {
  // 책장, 재무제표, 라디오 테이블, 수납장,
  return (
    <Wrapper>
      <BookShelf />
      <Financial src={financial} />
    </Wrapper>
  );
};

export default BookShelfWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_bookshelfwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
`;

// 책장
const BookShelf = styled.div`
  position: absolute;
  background: pink;
  opacity: 0.4;
  width: 26%;
  height: 88%;
  margin-top: 3.3%;
  margin-left: 36.5%;
`;

// 재무제표
const Financial = styled.img`
  position: absolute;
  width: 8%;

  margin-left: 65%;
  margin-top: 16%;
`;
