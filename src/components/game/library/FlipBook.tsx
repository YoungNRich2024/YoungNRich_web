import React from "react";
import styled from "styled-components";

// 여러 장 있는 책 컴포넌트
const FlipBook = () => {
  return (
    <FlipBookContainer>
      <div className="book">
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        {/* <div id="cover">
          <img
            src="https://images.pexels.com/photos/7214434/pexels-photo-7214434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div> */}
        <div className="flip-book">
          <div className="flip" id="p1">
            <div className="back">
              <img
                src="https://images.pexels.com/photos/1114797/pexels-photo-1114797.jpeg?cs=srgb&dl=pexels-angele-j-1114797.jpg&fm=jpg"
                alt=""
              />
              <label htmlFor="c1" className="back-btn">
                Before
              </label>
            </div>
            <div className="front">
              <h2>Apple</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus sunt consectetur iusto sint architecto beatae fuga,
                quasi, repellendus tempora cum eaque? Incidunt modi laudantium
                fugit nostrum ipsam consectetur. Illum, dolorum!
              </p>
              <label htmlFor="c1" className="next-btn">
                NEXT
              </label>
            </div>
          </div>

          <div className="flip" id="p2">
            <div className="back">
              <img
                src="https://images.pexels.com/photos/1998630/pexels-photo-1998630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <label htmlFor="c2" className="back-btn">
                Before
              </label>
            </div>
            <div className="front">
              <h2>Orange</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus sunt consectetur iusto sint architecto beatae fuga,
                quasi, repellendus tempora cum eaque? Incidunt modi laudantium
                fugit nostrum ipsam consectetur. Illum, dolorum!
              </p>
              <label htmlFor="c2" className="next-btn">
                NEXT
              </label>
            </div>
          </div>

          <div className="flip" id="p3">
            <div className="back">
              <label htmlFor="c3" className="back-btn">
                Before
              </label>
            </div>
            <div className="front">
              <h2>strawberry</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus sunt consectetur iusto sint architecto beatae fuga,
                quasi, repellendus tempora cum eaque? Incidunt modi laudantium
                fugit nostrum ipsam consectetur. Illum, dolorum!
              </p>
              <label htmlFor="c3" className="next-btn">
                NEXT
              </label>
            </div>
          </div>
        </div>
      </div>
    </FlipBookContainer>
  );
};

export default FlipBook;

const FlipBookContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  align-items: center;
  // background: linear-gradient(90deg, #fff 50%, #4a1010 50%);

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

  /* #cover {
    width: 50%;
    height: 100%;
  } */

  .flip-book {
    width: 50%;
    height: 100%;
    position: relative;
    perspective: 1500px;
  }

  .flip {
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
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }

  .front {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fafafa;
    box-sizing: border-box;
    padding: 0 13px;
    box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, .4);
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
    background-color: #000;
    box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, .4);
  }

  .next-btn {
    position: absolute;
    bottom: 13px;
    right: 13px;
    cursor: pointer;
    color: #000;
  }

  .back-btn {
    position: absolute;
    bottom: 13px;
    right: 13px;
    cursor: pointer;
    color: #fff;
  }

  #p1 {
    z-index: 3;
  }
  #p2 {
    z-index: 2;
  }
  #p3 {
    z-index: 1;
  }

  #c1:checked ~ .flip-book #p1 {
    transform: rotateY(-180deg);
    z-index: 1;
  }
  #c2:checked ~ .flip-book #p2 {
    transform: rotateY(-180deg);
    z-index: 2;
  }
  #c3:checked ~ .flip-book #p3 {
    transform: rotateY(-180deg);
    z-index: 3;
  }
`;
