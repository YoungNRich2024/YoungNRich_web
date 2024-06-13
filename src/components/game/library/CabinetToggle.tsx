import React from "react";
import styled from "styled-components";
import { CabinetQuizItem } from "./CabinetLarge";

interface CabinetToggleProps {
  toggleId: number; // 토글 id - 상태 변경에 사용
  cabinetQuiz: CabinetQuizItem[]; // 아이패드 퀴즈 답안
  setCabinetQuiz: React.Dispatch<React.SetStateAction<CabinetQuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
}

// 수납장 토글
const CabinetToggle: React.FC<CabinetToggleProps> = ({
  toggleId,
  cabinetQuiz,
  setCabinetQuiz,
}) => {
  // 토글 아이디에 따른 색상 부여
  const bookshelfColors: { [key: string]: string } = {
    0: "var(--bookshelfBlue)",
    1: "var(--bookshelfGreen)",
    2: "var(--bookshelfRed)",
    3: "var(--bookshelfYellow)",
  };
  const toggleColor = bookshelfColors[toggleId];

  // 토글 변경
  const handleToggle = (isChecked: boolean) => {
    // console.log(cabinetQuiz);
    setCabinetQuiz((prevQuiz) =>
      prevQuiz.map((item) =>
        item.id === toggleId ? { ...item, checked: isChecked } : item
      )
    );
  };
  return (
    <ToggleStyle $toggleColor={toggleColor}>
      <label className="switch">
        <input
          type="checkbox"
          className="cb"
          // input checkbox는 클릭해야 true로 변경되므로
          // true가 default인 토글 디자인과 상태가 완전 반대됨
          checked={!cabinetQuiz[toggleId].checked}
          onChange={(e) => handleToggle(!e.target.checked)}
        />
        <span className="toggle">
          <span className="left">TRUE</span>
          <span className="right">FALSE</span>
        </span>
      </label>
    </ToggleStyle>
  );
};

export default CabinetToggle;

const ToggleStyle = styled.div<{ $toggleColor: string }>`
  display: flex;
  justify-content: center;

  .switch {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    display: inline-block;
    width: 6.5em;
    height: 3em;

    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      font-size: 12px;
      width: 5rem;
      height: 3em;
    }
  }

  .switch .cb {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.$toggleColor};
    border-radius: 0.1em;
    transition: 10s;
    font-weight: 700;
    overflow: hidden;
    box-shadow: -0.3em 0 0 0 ${(props) => props.$toggleColor},
      -0.3em 0.3em 0 0 ${(props) => props.$toggleColor},
      0.3em 0 0 0 ${(props) => props.$toggleColor},
      0.3em 0.3em 0 0 ${(props) => props.$toggleColor},
      0 0.3em 0 0 ${(props) => props.$toggleColor};
  }

  .toggle > .left {
    position: absolute;
    display: flex;
    width: 50%;
    height: 88%;
    background-color: #ffffffcc;
    color: ${(props) => props.$toggleColor};
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transform-origin: right;
    transform: rotateX(10deg);
    transform-style: preserve-3d;
    transition: all 150ms;
  }

  .left::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center left;
    transform: rotateY(90deg);
  }

  .left::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center bottom;
    transform: rotateX(90deg);
  }

  .toggle > .right {
    position: absolute;
    display: flex;
    width: 50%;
    height: 88%;
    background-color: rgba(255, 255, 255, 0.8);
    color: rgb(206, 206, 206);
    right: 1px;
    bottom: 0;
    align-items: center;
    justify-content: center;
    transform-origin: left;
    transform: rotateX(10deg) rotateY(-30deg);
    transform-style: preserve-3d;
    transition: all 150ms;
  }

  .right::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center right;
    transform: rotateY(-90deg);
  }

  .right::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(112, 112, 112);
    transform-origin: center bottom;
    transform: rotateX(90deg);
  }

  .switch input:checked + .toggle > .left {
    transform: rotateX(10deg) rotateY(30deg);
    color: rgb(206, 206, 206);
  }

  .switch input:checked + .toggle > .right {
    transform: rotateX(10deg) rotateY(0deg);
    color: ${(props) => props.$toggleColor};
  }
`;
