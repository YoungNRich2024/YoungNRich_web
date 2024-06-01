import React from "react";
import styled from "styled-components";
import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";

// 금고벽
const VaultWall = () => {
  return <Wrapper></Wrapper>;
};

export default VaultWall;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_vaultwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;
`;
