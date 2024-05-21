import { atom } from "recoil";

// 게임 진행상황
export const stepState = atom({ key: "stepState", default: 1 });

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
