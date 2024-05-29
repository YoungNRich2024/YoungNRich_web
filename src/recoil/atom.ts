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

// 시간 측정
