// 서재에서 사용할 데이터

// 책장벽에서 사용할 데이터
export type bookshelfWallKeys =
  | "financial"
  | "cabinet_opened"
  | "puzzle_fail"
  | "puzzle_success";

type bookshelfWallTypes = {
  [key in bookshelfWallKeys]: string;
};

export const bookshelfWallData: bookshelfWallTypes = {
  financial: "이게 바로 재무제표인가보다! 인벤토리에 넣자!",
  cabinet_opened: "수납장이 열렸다!",
  puzzle_fail: "아무 일도 일어나지 않았다…",
  puzzle_success: "엇! 어딘가에서 자물쇠가 풀리는 소리가 났다…!",
};

// 책장벽 수납장 (퍼즐 2) 관련 퀴즈 정답
export const puzzle2Data = [
  { id: 0, checked: false },
  { id: 1, checked: true },
  { id: 2, checked: true },
  { id: 3, checked: true },
];

// 창문벽 가방 (퍼즐 3) 관련 비밀번호 정답
export const puzzle3Data = [4, 1, 4, 1];

// 문벽에서 사용할 데이터
export type doorWallKeys = "portrait" | "door" | "jacket";

type doorWallTypes = {
  [key in doorWallKeys]: string;
};

export const doorWallData: doorWallTypes = {
  portrait: "우리 할아버지, 알렉산더 밀턴의 초상화이다.",
  door: "방금 들어온 문이다.",
  jacket:
    "코트 주머니에서 수상한 열쇠를 발견했다. 어디에 쓰이는 열쇠지? 일단 챙겨둬 보자.",
};

// 금고벽에서 사용할 데이터
export type vaultWallKeys = "bull" | "bear";

type vaultWallTypes = {
  [key in vaultWallKeys]: string;
};

export const vaultWallData: vaultWallTypes = {
  bull: "주가가 오르는 모습은 언제나 나를 기쁘게 하지! 좋은 실적을 내는 기업을 보면 곧 그 기업의 주가가 오를 거라는 생각에 가슴이 설레어!",
  bear: "주식시장이 지속해서 약세를 보이면 많은 일이 일어나지… 시가총액이 줄어들고, 소비가 감소해. 이건 마치 자연의 섭리 같은 거야…",
};
