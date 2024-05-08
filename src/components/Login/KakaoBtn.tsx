import styled from "styled-components";
import kakao from "../../assets/kakao.png";

const KakaoBtn = () => {
  return (
    <Btn>
      <img src={kakao} alt="kakao" /> <p>카카오 로그인</p>
    </Btn>
  );
};

export default KakaoBtn;

const Btn = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 44px;
  margin: 0 auto;

  background: #fee500;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  cursor: pointer;

  img {
    position: absolute;
    left: 15px;

    width: 18px;
    height: 17px;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
  }
`;
