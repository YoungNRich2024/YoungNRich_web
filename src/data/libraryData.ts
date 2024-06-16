import sticky_note1 from "../assets/library/vaultwall/sticky_note1.png";
import sticky_note2 from "../assets/library/vaultwall/sticky_note2.png";
import sticky_note3 from "../assets/library/vaultwall/sticky_note3.png";
import sticky_note4 from "../assets/library/vaultwall/sticky_note4.png";
import sticky_note5 from "../assets/library/vaultwall/sticky_note5.png";
import sticky_note6 from "../assets/library/vaultwall/sticky_note6.png";
import sticky_note7 from "../assets/library/vaultwall/sticky_note7.png";

import test_result_1 from "../assets/library/vaultwall/test_result_1.png";
import test_result_2 from "../assets/library/vaultwall/test_result_2.png";
import test_result_3 from "../assets/library/vaultwall/test_result_3.png";
import test_result_4 from "../assets/library/vaultwall/test_result_4.png";
import test_result_5 from "../assets/library/vaultwall/test_result_5.png";

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
export type vaultWallKeys = "bull" | "bear" | "frames";

type vaultWallTypes = {
  [key in vaultWallKeys]: string;
};

export const vaultWallData: vaultWallTypes = {
  bull: "주가가 오르는 모습은 언제나 나를 기쁘게 하지! 좋은 실적을 내는 기업을 보면 곧 그 기업의 주가가 오를 거라는 생각에 가슴이 설레어!",
  bear: "주식시장이 지속해서 약세를 보이면 많은 일이 일어나지… 시가총액이 줄어들고, 소비가 감소해. 이건 마치 자연의 섭리 같은 거야…",
  frames: "... 갑자기 어디선가 시선이 느껴진다.",
};

// 금고벽 투자 성향 테스트 데이터
export const investmentTestData = [
  {
    testId: 0,
    question_image: sticky_note1,
    optionList: [
      { option: "예금 1,000만 원", score: 1 },
      { option: "예금 700만 원, 주식 300만 원", score: 2 },
      { option: "예금 500만 원, 주식 500만 원", score: 3 },
      { option: "예금 300만 원, 주식 700만 원", score: 4 },
      { option: "주식 1,000만 원", score: 5 },
    ],
  },
  {
    testId: 1,
    question_image: sticky_note2,
    optionList: [
      { option: "1개월 미만", score: 5 },
      { option: "1개월 이상~6개월 미만", score: 4 },
      { option: "6개월 이상~1년 미만", score: 3 },
      { option: "1년 이상~3년 미만", score: 2 },
      { option: "3년 이상", score: 1 },
    ],
  },
  {
    testId: 2,
    question_image: sticky_note3,
    optionList: [
      { option: "적금 100만 원", score: 1 },
      { option: "적금 70만 원, 주식 30만 원", score: 2 },
      { option: "적금 50만 원, 주식 50만 원", score: 3 },
      { option: "적금 30만 원, 주식 70만 원", score: 4 },
      { option: "주식 100만 원", score: 5 },
    ],
  },
  {
    testId: 3,
    question_image: sticky_note4,
    optionList: [
      { option: "안전성 > 유동성 > 수익성", score: 1 },
      { option: "안전성 > 수익성 > 유동성", score: 2 },
      { option: "유동성 > 안전성 > 수익성", score: 3 },
      { option: "유동성 > 수익성 > 안전성", score: 4 },
      { option: "수익성 > 안전성 > 유동성", score: 5 },
      { option: "수익성 > 유동성 > 안전성", score: 6 },
    ],
  },
  {
    testId: 4,
    question_image: sticky_note5,
    optionList: [
      { option: "예금", score: 1 },
      { option: "채권", score: 3 },
      { option: "주식", score: 5 },
    ],
  },
  {
    testId: 5,
    question_image: sticky_note6,
    optionList: [
      {
        option: "원금 손실의 위험이 있더라도 시장 평균보다 높은 수익률을 기대",
        score: 5,
      },
      {
        option:
          "원금 손실의 위험이 잘 분산된 포트폴리오를 구성해 시장 평균 정도의 투자 성과를 기대",
        score: 1,
      },
    ],
  },
  {
    testId: 6,
    question_image: sticky_note7,
    optionList: [
      { option: "무슨 일이 있어도 투자 원금은 보전되어야 한다.", score: 1 },
      { option: "10% 미만까지는 손실을 감수할 수 있다.", score: 2 },
      { option: "20% 미만까지는 손실을 감수할 수 있다.", score: 3 },
      { option: "40% 미만까지는 손실을 감수할 수 있다.", score: 4 },
      {
        option: "기대 수익이 높다면 원금 손실의 위험이 높아도 투자하겠다.",
        score: 5,
      },
    ],
  },
];

// 금고벽 투자 성향 테스트 결과 데이터
export const investmentTestResultData = [
  {
    resultId: 1,
    resultImage: test_result_1,
    resultTitle: "안정형",
    resultContent:
      "투자 수익을 크게 기대하지 않으며, 투자 원금의 손실 발생을 원치 않는 유형!\n투자 자금 대부분을 예금 상품에 가입하려고 하는 당신, 조금은 다른 투자를 해보는 것도 좋겠네요!",
    resultColor: "var(--bookshelfBlue)",
  },
  {
    resultId: 2,
    resultImage: test_result_2,
    resultTitle: "안정추구형",
    resultContent:
      "조금의 위험성을 수용하면서 안정적인 투자 수익을 추구하는 유형.\n예금은 금리가 아쉽고 주식은 위험하다 생각하는 당신, 채권 투자에 어울리는군요!",
    resultColor: "var(--bookshelfGreen)",
  },
  {
    resultId: 3,
    resultImage: test_result_3,
    resultTitle: "위험중립형",
    resultContent:
      "투자에는 그에 상응하는 위험이 있음을 충분히 인식하고 있는 유형.\n예금과 적금보다 높은 수익을 기대할 수 있다면 일정 부분의 손실 위험은 감수할 수 있군요!",
    resultColor: "var(--bookshelfYellow)",
  },
  {
    resultId: 4,
    resultImage: test_result_4,
    resultTitle: "적극투자형",
    resultContent:
      "위험을 감내하더라도 높은 투자 수익을 추구하는 유형!\n투자에 대한 정보를 잘 살펴보고 위험을 낮출 수 있는 투자도 고려해 보세요.",
    resultColor: "var(--bookshelfRed)",
  },
  {
    resultId: 5,
    resultImage: test_result_5,
    resultTitle: "공격투자형",
    resultContent:
      "높은 수준의 투자 수익을 추구하며, 이를 위해 손실 위험도 적극 수용하는 유형!\n자금 대부분을 수익 높은 곳에 투자하려는 당신, 투자에는 위험이 따르니 신중히 생각해 보고 투자하세요!",
    resultColor: "var(--black)",
  },
];
