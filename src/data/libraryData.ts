// 서재에서 사용할 데이터

// 문벽에서 사용할 데이터
export type doorWallKeys =
  | "portrait"
  | "door"
  | "jacket"
  | "cabinet_closed"
  | "cabinet_opened";

type doorWallTypes = {
  [key in doorWallKeys]: string;
};

export const doorWallData: doorWallTypes = {
  portrait: "우리 할아버지, 알렉산더 밀턴의 초상화이다.",
  door: "방금 들어온 문이다.",
  jacket:
    "코트 주머니에서 수상한 열쇠를 발견했다. 어디에 쓰이는 열쇠지? 일단 챙겨둬 보자.",
  cabinet_closed:
    "닫혀있는 수납장을 열기 위해서는 열쇠가 필요하다. 열쇠는 어디에...?",
  cabinet_opened: "수납장이 열렸다!",
};
