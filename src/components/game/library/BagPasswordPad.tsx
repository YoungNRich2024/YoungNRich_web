import React, { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { libraryPuzzleState, puzzle3State } from "../../../recoil/atom";
import {
  bookshelfWallData,
  bookshelfWallKeys,
  puzzle3Data,
} from "../../../data/libraryData";
import Dialog from "../../common/Dialog";

// 창문벽 가방 속 비밀번호 키패드
// - 4자리 모두 입력 시 검사
// - fail일 경우 번호판에서 다시 누르면 초기화, 결과 상태 =_=로 변경
// - success일 때는 번호판 비활성화
// - 입력 중일 때는 (=_=) 표시

const BagPasswordPad = () => {
  const [activeDialog, setActiveDialog] = useState(false); // dialog 활성화 여부
  const [dialogScript, setDialogScript] = useState<string | null>(null); // 클릭한 아이템에 대한 대사
  const setPuzzleState = useSetRecoilState(libraryPuzzleState); // 서재 퍼즐 상태 설정 함수

  const [puzzlePassword, setPuzzlePassword] = useRecoilState(puzzle3State); // 사용자가 입력하는 비밀번호 값
  const [puzzle3Result, setPuzzle3Result] = useState("=_="); // 비밀번호 결과
  const passwordLength = 4; // 비밀번호 4자리

  // 대화창 띄우기
  const turnOnDialog = (item: bookshelfWallKeys) => {
    setActiveDialog(true); // activeDialog를 true로 변경
    setDialogScript(bookshelfWallData[item]); // 클릭한 item을 바탕으로 대사 찾기
  };

  // 입력한 비밀번호와 빈 칸을 포함한 총 4개의 칸을 렌더링
  const passwordItems = [
    ...puzzlePassword,
    ...Array(passwordLength - puzzlePassword.length).fill(null),
  ];

  // 비밀번호 키 패드 버튼 클릭 시 실행되는 함수
  const clickKeyPadBtn = (keyNumber: number) => {
    if (puzzlePassword.length === passwordLength) {
      // 4자리 모두 입력 후 추가 입력 시 처음부터 시작
      setPuzzlePassword([keyNumber]);
      setPuzzle3Result("=_="); // 입력 중으로 변경
    } else {
      setPuzzlePassword((prevPassword) => [...prevPassword, keyNumber]); // 배열에 비밀번호 입력 추가
    }
  };

  const clickDeletePadBtn = () => {
    if (puzzlePassword.length >= 1 && puzzlePassword.length < 4) {
      // 1자리 이상일 경우 제일 뒷 자리 삭제
      // 4자리(다 입력 완료)일 경우 delete 버튼 비활성화
      setPuzzlePassword((prevPassword) => [...prevPassword].slice(0, -1));
    }
  };

  useEffect(() => {
    if (puzzlePassword.length === passwordLength) {
      // 4자리 모두 입력 시 비밀번호 점검
      if (JSON.stringify(puzzlePassword) === JSON.stringify(puzzle3Data)) {
        // 성공 시
        setPuzzle3Result("success :)"); // 성공 결과 띄우기
        turnOnDialog("puzzle_success"); // 퍼즐 성공 대화창
        setPuzzleState((prePuzzle) =>
          prePuzzle.map((puzzle) =>
            puzzle.puzzleId === 3 ? { ...puzzle, done: true } : puzzle
          )
        ); // 서재 퍼즐3 done 여부 true로 변경
      } else {
        // 실패 시
        setPuzzle3Result("fail :("); // 실패 결과 띄우기
      }
    }
  }, [puzzlePassword]);

  return (
    <>
      <Wrapper>
        <Title>암호 4자리를 입력하시오.</Title>
        <PasswordSection>
          {passwordItems.map((item) => (
            <PasswordKey>{item}</PasswordKey>
          ))}
        </PasswordSection>
        <PasswordResult $puzzle3Result={puzzle3Result}>
          {puzzle3Result}
        </PasswordResult>
        <KeyPadContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <KeyPadBtn key={number} onClick={() => clickKeyPadBtn(number)}>
              {number}
            </KeyPadBtn>
          ))}
          <DeletePadBtn onClick={clickDeletePadBtn}>DELETE</DeletePadBtn>
        </KeyPadContainer>
      </Wrapper>
      {/* 대화창 */}
      {activeDialog && (
        <Dialog setActiveDialog={setActiveDialog} dialogScript={dialogScript} />
      )}
    </>
  );
};

export default BagPasswordPad;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 90%;
  height: 90%;

  background-color: var(--gray);
  box-sizing: border-box;
  border: 5px solid var(--darkgray);
  border-radius: 16px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    gap: 8px;
  }
`;

const Title = styled.div`
  font-family: GowunBatang-Regular;
  font-size: 16px;
  color: white;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 10px;
  }
`;

const PasswordSection = styled.div`
  width: 65%;
  display: flex;
  gap: 1%;
`;

const PasswordKey = styled.div`
  background: var(--darkgray);
  color: var(--white);
  aspect-ratio: 1;
  width: 25%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: DS-Digital;
  font-size: 32px;

  border-radius: 5px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 20px;
  }
`;

const PasswordResult = styled.div<{ $puzzle3Result: string }>`
  background: var(--darkgray);
  color: ${(props) =>
    props.$puzzle3Result === "success :)"
      ? "var(--bookshelfGreen)"
      : props.$puzzle3Result === "fail :("
      ? "var(--bookshelfRed)"
      : "var(--bookshelfBlue)"};

  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px 8px;

  font-family: DS-Digital;
  font-size: 32px;
  text-align: center;

  width: 60%;
  white-space: nowrap;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 20px;
    line-height: 24px;
    padding: 2px 4px;
  }
`;

const KeyPadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
  width: 60%;
`;

const KeyPadBtn = styled.div`
  width: 100%;
  background: var(--lightgray);
  color: var(--white);
  border-radius: 4px;

  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 28px;
  text-align: center;

  cursor: pointer;

  &:active {
    color: var(--darkgray);
  }

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    font-size: 16px;
  }
`;

const DeletePadBtn = styled(KeyPadBtn)`
  grid-column: span 3;
`;
