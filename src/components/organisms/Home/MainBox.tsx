import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import hongjo from "../../../images/honjoMain.jpg";
import testImg from "../../../images/sbh1.jpg";
import FadeIn from "react-fade-in";
import "./main.css";

interface IMainBoxState {
  imgHeight: number;
}
interface IMainBoxProps {
  height?: number;
}

const MainBox: React.FC<IMainBoxProps> = ({ height }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setImgHeight(windowHeight + windowHeight / 2 - 200);
  }, []);

  return (
    <Container height={height}>
      <ContentContainer>
        <TopBox>
          <ImageBox height={height}>
            <MainImg src={testImg} />
          </ImageBox>
        </TopBox>
        <BottomBox>
          <FadeIn delay={1500}>
            <TitleBox>
              <Title>HONGJO BAND</Title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="13.251"
                viewBox="0 0 1103.42 13.251"
                className="intro-line-svg intro-line-svg-1"
              >
                <path
                  data-name="Path 26"
                  d="M0-1.551s73.14-11.91,210.818-11.91c53.281,0,136.262,8.933,359.387,11.91s293.5-10.875,533.113,0"
                  transform="translate(0.08 ,13.962)"
                  fill="none"
                  stroke="#24344d"
                  strokeWidth="2"
                  className="st1"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="30.477"
                viewBox="0 0 1103.368 30.477"
                className="bottom_svg"
              >
                <path
                  data-name="Path 30"
                  d="M1103.317-1.551,892.5-13.462S758.923-33.7,535.8-30.72,239.614-12.426,0-1.551"
                  transform="translate(0.023 ,31.529)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  className="st1"
                ></path>
              </svg>
            </TitleBox>
          </FadeIn>
          <FadeIn delay={1400}>
            <BottomText ref={textRef}>
              홍조밴드는 제주 인디밴드로써, 대중과의 소통을 목적으로 활동하는
              밴드며 대중에게 행복감과 따스함을 선사하고자 합니다.
            </BottomText>
          </FadeIn>
        </BottomBox>
      </ContentContainer>
    </Container>
  );
};

export default MainBox;

const fadeIn = keyframes`
  from {
   transform: translateY(30%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div<IMainBoxProps>`
  width: 100%;
  background-color: #f6f5f1;
  padding-top: 60px;

  @media only screen and (min-width: 1440px) {
    height: ${(props) => `${props.height}px`};
    padding-top: 150px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    height: 100%;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 70px;
  }
  @media only screen and (min-width: 1510px) {
    padding: 0;
    max-width: 1438px;
    margin: 0 auto;
  }
`;
export const TopBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 320px;
  align-items: flex-end;
  @media only screen and (min-width: 480px) {
    height: 80vw;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-basis: 50%;
    position: relative;
    height: 100%;
  }
`;

export const BottomBox = styled.div`
  padding: 40px 20px;
  @media only screen and (min-width: 480px) {
    padding: 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    padding: 40px 70px;
    flex-basis: 50%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const BottomText = styled.p`
  margin-top: 40px;
  font-size: 17px;
  line-height: 1.7;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #26334c;
  @media only screen and (min-width: 1024px) {
    font-size: 80px;
  }
`;

export const ImageBox = styled.div<IMainBoxProps>`
  width: 320px;
  background-color: white;
  height: 100%;
  @media only screen and (min-width: 480px) {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: ${(props) => props.height && `${props.height / 2 + 150}px`};
    position: absolute;
    top: 0;
    left: 0;
  }
  @media only screen and (min-width: 1440px) {
    height: ${(props) =>
      props.height && `${props.height + props.height / 2 - 200}px`};
    animation-duration: 0.4s;
    opacity: 0;
    animation-delay: 1s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
