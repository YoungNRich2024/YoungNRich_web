import { useState, useEffect } from "react";

// 가로모드를 감지할 파일에서 이 파일을 import한 후
// const isLandscape = useOrientation(); 을 내부에 선언해 사용

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    const resizingHandler = () => {
      window.matchMedia("(orientation: landscape)").matches
        ? setIsLandscape(true) // 가로모드
        : setIsLandscape(false); // 세로모드 (넓이 === 높이 포함)
    };

    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return isLandscape;
};

export default useOrientation;
