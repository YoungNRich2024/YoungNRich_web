import React from "react";
import styled from "styled-components";
import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";
import vault_0sol from "../../../assets/library/vaultwall/vault_0sol.png";
import frames from "../../../assets/library/vaultwall/frames.png";

interface VaultWallProps {
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
}

// 금고벽
const VaultWall: React.FC<VaultWallProps> = ({ isDarkMode }) => {
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Vault src={vault_0sol} alt="vault" isDarkMode={isDarkMode} />
      <Frames src={frames} alt="frames" />
    </Wrapper>
  );
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

const Vault = styled.img<{ isDarkMode: boolean }>`
  position: absolute;
  width: 24.2%;
  bottom: 0;
  margin-bottom: 2.4%;
  margin-left: 39.5%;

  // 불 껐을 때 (다크모드) 밝기 올리기
  filter: ${(props) =>
    props.isDarkMode ? "brightness(1.5)" : "brightness(1)"};
`;

const Frames = styled.img`
  position: absolute;
  width: 24%;
  right: 0;
  margin-right: 12.3%;
  /* margin-top: 16.5%; */
  margin-top: 18%;
`;
