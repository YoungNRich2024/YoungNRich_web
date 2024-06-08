import React from "react";
import styled from "styled-components";
import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";

interface VaultWallProps {
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
}

// 금고벽
const VaultWall: React.FC<VaultWallProps> = ({ isDarkMode }) => {
  return <Wrapper isDarkMode={isDarkMode}></Wrapper>;
};

export default VaultWall;

const Wrapper = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_vaultwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;

  filter: ${(props) =>
    props.isDarkMode ? "brightness(0.5)" : "brightness(1)"};
`;
