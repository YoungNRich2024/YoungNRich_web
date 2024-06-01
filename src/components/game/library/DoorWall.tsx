import React from "react";
import styled from "styled-components";
import bg_doorwall from "../../../assets/library/doorwall/bg_doorwall.png";

// 문벽
const DoorWall = () => {
  return <Wrapper></Wrapper>;
};

export default DoorWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_doorwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
`;
