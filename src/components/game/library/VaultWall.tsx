import React, { useEffect } from "react";
import styled from "styled-components";
import bg_vaultwall from "../../../assets/library/vaultwall/bg_vaultwall.png";

import vault_0sol from "../../../assets/library/vaultwall/vault_0sol.png";
import vault_1sol from "../../../assets/library/vaultwall/vault_1sol.png";
import vault_2sol from "../../../assets/library/vaultwall/vault_2sol.png";
import vault_3sol from "../../../assets/library/vaultwall/vault_3sol.png";

import frames from "../../../assets/library/vaultwall/frames.png";

import { useRecoilValue } from "recoil";
import { libraryPuzzleState } from "../../../recoil/atom";

interface VaultWallProps {
  puzzleSuccess: number; // 서재 퍼즐 성공 개수
  setPuzzleSuccess: React.Dispatch<React.SetStateAction<number>>; // 서재 퍼즐 성공 개수 설정 함수
  isDarkMode: boolean; // 불 껐는지 여부 (다크모드)
}

// 금고벽
const VaultWall: React.FC<VaultWallProps> = ({
  puzzleSuccess,
  setPuzzleSuccess,
  isDarkMode,
}) => {
  const puzzleState = useRecoilValue(libraryPuzzleState); // 서재 퍼즐 상태

  useEffect(() => {
    // puzzleState에서 done 여부 개수 세기
    const puzzleCount = puzzleState.filter((puzzle) => puzzle.done).length;
    setPuzzleSuccess(puzzleCount); // done 여부 개수 상태 업데이트
  }, [puzzleState]);

  return (
    <Wrapper $isDarkMode={isDarkMode}>
      <Vault
        src={
          puzzleSuccess === 1
            ? vault_1sol
            : puzzleSuccess === 2
            ? vault_2sol
            : puzzleSuccess === 3
            ? vault_3sol
            : vault_0sol
        }
        alt="vault"
        $isDarkMode={isDarkMode}
      />
      <Frames src={frames} alt="frames" />
    </Wrapper>
  );
};

export default VaultWall;

const Wrapper = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  background: url(${bg_vaultwall}) center no-repeat;
  background-size: contain;
  overflow-y: hidden;
  position: relative;

  filter: ${(props) =>
    props.$isDarkMode ? "brightness(0.5)" : "brightness(1)"};
`;

const Vault = styled.img<{ $isDarkMode: boolean }>`
  position: absolute;
  width: 24.2%;
  bottom: 0;
  margin-bottom: 2.4%;
  margin-left: 39.5%;

  // 불 껐을 때 (다크모드) 밝기 올리기
  filter: ${(props) =>
    props.$isDarkMode ? "brightness(1.5)" : "brightness(1)"};
`;

const Frames = styled.img`
  position: absolute;
  width: 24%;
  right: 0;
  margin-right: 12.3%;
  /* margin-top: 16.5%; */
  margin-top: 18%;
`;
