import React from "react";
import styled from "styled-components";
import bg_windowwall from "../../../assets/library/windowwall/bg_windowwall.png";

// 창문벽
const WindowWall = () => {
  return <Wrapper></Wrapper>;
};

export default WindowWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_windowwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
`;
