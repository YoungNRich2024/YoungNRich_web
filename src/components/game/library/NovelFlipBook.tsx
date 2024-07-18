import React, { useState } from "react";
import styled from "styled-components";
import { novelData } from "../../../data/flipbookData";

// 여러 장 있는 책 컴포넌트
const NovelFlipBook = () => {
  const [isFliped, setIsFliped] = useState(
    Array.from({ length: novelData.length }, (v) => false)
  );

  // 파라미터로 flipId를 받아서 fliped 상태를 바꿔주는 함수
  const handleFlip = (flipId: number) => {
    setIsFliped((prev) => {
      const newIsFliped = [...prev];
      newIsFliped[flipId] = !newIsFliped[flipId];
      return newIsFliped;
    });
  };

  return (
    <FlipBookContainer>
      <div className="book">
        <FlipBook>
          {novelData.map((page, index) => {
            return (
              <Flip $isFliped={isFliped[index]} $flipId={index + 1}>
                <div className="back">
                  {page[1].imageSrc ? (
                    <img src={page[1].imageSrc} alt="secret_book_cover" />
                  ) : (
                    <div className="page">
                      <h4>{page[1].content.title}</h4>
                      <p>{page[1].content.text}</p>
                    </div>
                  )}
                  <label className="back-btn" onClick={() => handleFlip(index)}>
                    ◀
                  </label>
                </div>
                <div className="front">
                  {page[0].imageSrc ? (
                    <img src={page[0].imageSrc} alt="secret_book_cover" />
                  ) : (
                    <div className="page">
                      <h4>{page[0].content.title}</h4>
                      <p>{page[0].content.text}</p>
                    </div>
                  )}
                  <label className="next-btn" onClick={() => handleFlip(index)}>
                    ▶
                  </label>
                </div>
              </Flip>
            );
          })}
        </FlipBook>
      </div>
    </FlipBookContainer>
  );
};

export default NovelFlipBook;

const FlipBookContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  align-items: center;
  // background: linear-gradient(90deg, #fff 50%, #4a1010 50%);

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    width: 80%;
  }

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .book {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 75%;
  }
`;

const FlipBook = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  perspective: 1500px;
`;

const Flip = styled.div<{ $isFliped: boolean; $flipId: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: 0.5s;
  color: #000;

  p {
    font-size: 14px;
    line-height: 24px;

    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      font-size: 12px;
      line-height: 20px;
    }
  }

  .front {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fafafa;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);
  }

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    background-color: #fafafa;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
  }

  .next-btn {
    position: absolute;
    top: 50%;
    right: 13px;
    cursor: pointer;
    color: var(--gold4);
    font-size: 24px;
  }

  .back-btn {
    position: absolute;
    top: 50%;
    left: 13px;
    cursor: pointer;
    color: var(--gold4);
    font-size: 24px;
  }

  .page {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 3%;
    font-family: GowunBatang-Regular;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // z-index 1, 2, 3, 4 이렇게 차례대로
  ${(props) => `z-index: calc(4 - ${props.$flipId});`}
  // 클릭될 때마다 
  ${(props) =>
    props.$isFliped &&
    `transform: rotateY(-180deg); z-index: ${props.$flipId};`}
`;
