import React, { RefObject } from "react";
import styled from "styled-components";
import hongjoImg from "../../../images/honjoMain.jpg";
import testImg from "../../../images/sbh2.jpg";
import FadeIn from "react-fade-in";

interface IAboutState {
  height?: number;
}

const About = React.forwardRef<any | null, IAboutState>((props, ref) => {
  return (
    <Container height={props.height}>
      <ContentContainer>
        <ImageBox height={props.height}>
          <ImageBoxLeft ref={ref}>
            <Image src={testImg} />
          </ImageBoxLeft>
        </ImageBox>
        <TextBox height={props.height}>
          <TextWrapper>
            <Title>ABOUT US</Title>
            <Text>
              여성 2인조로 구성된 어쿠스틱 밴드 홍조는 그녀들의 노래를 듣고
              행복감에 볼이 발그레 해졌으면 한다는 의미를 가졌다. 보컬(수영)과
              건반(가빈)으로 구성된 홍조는 달달하고 감성을 자극하지만 에너지가
              넘치는 음악으로 스토리가 있는 음악을 하며 즐거운 음악, 즐거운
              인생을 꿈꾸는 뮤지션이다.
            </Text>
          </TextWrapper>
        </TextBox>
      </ContentContainer>
    </Container>
  );
});

export default About;

export const Container = styled.div<IAboutState>`
  width: 100%;
  background-color: #0c141d;

  @media only screen and (min-width: 1440px) {
    height: ${(props) => props.height && `${props.height}px`};
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  padding-top: 60px;
  @media only screen and (min-width: 480px) {
    padding-top: 0;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 60px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    padding: 0 70px 50px 70px;
  }
  @media only screen and (min-width: 1510px) {
    padding: 0 0 50px 0;
    max-width: 1438px;
    margin: 0 auto;
  }
`;

export const ImageBox = styled.div<IAboutState>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  height: 320px;
  @media only screen and (min-width: 480px) {
    width: 100%;
    height: 80vw;
  }
  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
    overflow: hidden;
    height: ${(props) => props.height && `${props.height / 2 + 110}px`};
  }
  @media only screen and (min-width: 1440px) {
    height: 100%;
  }
`;

export const ImageBoxLeft = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: auto;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

export const TextBox = styled.div<IAboutState>`
  padding: 40px 20px 110px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 480px) {
    padding: 40px 40px 110px 40px;
  }
  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
    justify-content: flex-end;
    padding: 0 20px 0px 20px;
  }

  @media only screen and (min-width: 1440px) {
    justify-content: center;
    padding-top: ${(props) => props.height && `${props.height / 2 - 50}px`};
    height: ${(props) => props.height && `${props.height}px`};
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 28px;
  color: #ffffff;
`;

export const Text = styled.p`
  color: #ffffff;
  margin-top: 40px;
  font-size: 17px;
  line-height: 1.7;
`;
