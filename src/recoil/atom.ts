import { atom } from "recoil";

// 게임 진행상황
// 1은 침실, 2는 침실 -> 서재 이동, 3은 서재, 4는 서재 -> 금고 이동, 5는 금고, 6은 마무리
export const gameStepState = atom<number>({ key: "gameStepState", default: 1 });

// 확대 모달
// 모달 항목의 타입 정의
type ModalItem = {
  isOpen: boolean;
  content: string | null;
};
export const modalState = atom<ModalItem>({
  key: "modalState",
  default: {
    isOpen: false,
    content: null,
  },
});

// 인벤토리
// 인벤토리 항목의 타입 정의
type InventoryItem = {
  id: number;
  name: string;
  image: string; // 이미지의 타입을 string으로 정의
  checked: boolean;
};
// 객체 배열 형태로, id/이름/이미지/checked여부
export const inventoryState = atom<InventoryItem[]>({
  key: "inventoryState",
  default: [],
});

// 서재 퍼즐 3개 완료 여부
// 서재 퍼즐 완료 여부 타입 정의
type LibraryPuzzleItem = {
  puzzleId: number;
  done: boolean;
};
export const libraryPuzzleState = atom<LibraryPuzzleItem[]>({
  key: "libraryPuzzleState",
  default: [
    { puzzleId: 2, done: false },
    { puzzleId: 3, done: false },
    { puzzleId: 4, done: false },
  ],
});

// 서재 퍼즐2 상태
type Puzzle2Item = {
  id: number;
  checked: boolean;
};
export const puzzle2State = atom<Puzzle2Item[]>({
  key: "puzzle2State",
  default: [
    { id: 0, checked: true },
    { id: 1, checked: true },
    { id: 2, checked: true },
    { id: 3, checked: true },
  ],
});

// 서재 퍼즐3 상태
export const puzzle3State = atom<number[]>({
  key: "puzzle3State",
  default: [],
});

// 서재 퍼즐4 상태
// 1: 안정형, 2: 안정추구형, 3: 위험중립형, 4: 적극투자형, 5: 공격투자형
export const puzzle4State = atom<number | null>({
  key: "puzzle4State",
  default: null,
});

// 시간 측정
