import React from "react";
import styled from "styled-components";
import bg_dialog from "../../assets/common/bg_dialog.png";
import ic_x from "../../assets/common/ic_x.png";

interface DialogProps {
  setActiveDialog: React.Dispatch<React.SetStateAction<boolean>>; // 대화창 활성화 설정 함수
  dialogScript: string | null; // 클릭한 아이템에 대한 대사
}

const Dialog: React.FC<DialogProps> = ({ setActiveDialog, dialogScript }) => {
  // 대화창 닫는 함수
  const closeDialog = () => {
    setActiveDialog(false);
  };
  return (
    <Wrapper>
      <img src={ic_x} className="x" alt="x" onClick={closeDialog} />
      <div className="dialog">
        "{dialogScript}"
      </div>
    </Wrapper>
  );
};

export default Dialog;

const Wrapper = styled.div`
  background: url(${bg_dialog}) center no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: portrait) {
    width: 50vh;
    height: 12.5vh;
  }
  @media screen and (orientation: landscape) {
    width: 50vw;
    height: 12.5vw;
  }

  .x {
    width: 15px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 3%;
    margin-right: 5%;

    @media screen and (max-width: 500px), (max-height: 500px) {
      width: 10px;
    }
  }

  .dialog {
    width: 90%;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Pretendard-Regular;
    color: var(--darkblue);

    word-break: keep-all;

    @media screen and (max-width: 500px), (max-height: 500px) {
      font-size: 12px;
    }
  }
`;
