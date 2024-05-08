import React from "react";
import styled from "styled-components";
import logo from "../assets/youngnrich_logo.png";

const MainPage = () => {
  return (
    <Wrapper>
      <GameSection>
        <div className="left">새 게임</div>
        <div className="left">이어하기</div>
      </GameSection>
      <img src={logo} className="logo" alt="logo" />
      <UserSection>
        <div className="right">마이페이지</div>
        <div className="right">랭킹</div>
        <div className="right">게임 정보</div>
      </UserSection>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--darkblue);

  font-family: GowunBatang-Regular;
  font-weight: bold;
  color: var(--gold1);

  @media screen and (orientation: portrait) {
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    height: 100vh;
  }

  .logo {
    width: 270px;

    @media screen and (max-width: 350px) {
      width: 200px;
    }

    @media screen and (max-height: 430px) {
      width: 200px;
    }
  }
`;

const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .left {
    font-size: 28px;
    border-left: solid 5px var(--gold2);
    padding-left: 10px;
    cursor: pointer;
  }

  .left:hover {
    color: var(--gold2);
  }
`;

const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .right {
    font-size: 22px;
    border-right: solid 5px var(--gold2);
    padding-right: 10px;
    text-align: end;
    cursor: pointer;
  }

  .right:hover {
    color: var(--gold2);
  }
`;
