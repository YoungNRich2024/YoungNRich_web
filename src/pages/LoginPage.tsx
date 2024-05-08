import React from "react";
import styled from "styled-components";
import logo from "../assets/youngnrich_logo.png";
import KakaoBtn from "../components/Login/KakaoBtn";

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="element">
        <img src={logo} className="logo" alt="logo" />
        <KakaoBtn />
      </div>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  background-color: var(--darkblue);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (orientation: portrait) {
    height: 100vw;
  }
  @media screen and (orientation: landscape) {
    height: 100vh;
  }

  .element {
    display: flex;
    flex-direction: column;
    align-items: center;
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
