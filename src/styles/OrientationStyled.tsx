import React, { ReactNode } from "react";
import styled from "styled-components";
import useOrientation from "../components/common/useOrientation";

interface OrientationProps {
  children: ReactNode;
}

// 세로모드일 경우 90도 회전
const OrientationStyled: React.FC<OrientationProps> = ({ children }) => {
  const isLandscape = useOrientation();
  return (
    <Wrapper className={isLandscape ? "" : "portrait"}>{children}</Wrapper>
  );
};

export default OrientationStyled;

const Wrapper = styled.div`
  &.portrait {
    transform: rotate(-90deg);
    transform-origin: top left;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vh;
    height: 100vw;
  }
`;
