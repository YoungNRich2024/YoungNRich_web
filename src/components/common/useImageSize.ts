import { useState, useEffect } from "react";

// library 배경이미지 관련 파일에서 이 파일을 import한 후
// const isRenderedByWidth = useImageSize(); 을 내부에 선언해 사용

// backgroundImage가 contain으로 설정된 div가 있을 때,
// 부모 div의 ratio와 backgroundImage의 ratio를 비교해서
// 배경이미지가 부모 div의 너비에 맞춰지는지 (=true), 높이에 맞춰지는지(=false) return
// true일 경우 width: 100%; aspect-ratio: 12/7;
// false일 경우 height: 100%; aspect-ratio: 12/7;

const useImageSize = () => {
  const [isRenderedByWidth, setIsRenderedByWidth] = useState(false);

  const calculateImageSize = () => {
    let parentRatio;
    let imageRatio = 12 / 7;
    if (window.matchMedia("(orientation: portrait)").matches) {
      // 이미지의 비율이 부모 div의 비율보다 큰 경우: 이미지가 너비에 맞춰짐
      parentRatio = (window.innerHeight * 0.9) / window.innerWidth;
    } else {
      // 이미지의 비율이 부모 div의 비율보다 작은 경우: 이미지가 높이에 맞춰짐
      parentRatio = (window.innerWidth * 0.9) / window.innerHeight;
    }

    if (imageRatio > parentRatio) {
      setIsRenderedByWidth(true);
    } else {
      setIsRenderedByWidth(false);
    }
  };

  useEffect(() => {
    calculateImageSize();
    window.addEventListener("resize", calculateImageSize);
    return () => {
      window.removeEventListener("resize", calculateImageSize);
    };
  }, []);

  return isRenderedByWidth;
};

export default useImageSize;
