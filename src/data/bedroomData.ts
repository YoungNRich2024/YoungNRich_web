export type bedroomKeys = "photo" | "pillow" | "tv";

type bedroomTypes = {
  [key in bedroomKeys]: string;
};

export const bedroomData: bedroomTypes = {
  photo:
    "할아버지와 어린 시절의 내가 함께 찍힌 사진이다. 동전 탑을 쌓으며 할아버지와 즐거운 시간을 보냈던 그 시절은 아직까지도 내게 가장 행복했던 기억으로 남아있다..",
  pillow: "리모콘을 발견했다…!",
  tv: "TV의 채널을 돌릴 무언가가 필요하다..",
};
