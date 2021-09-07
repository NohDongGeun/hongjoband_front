import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import ActiveCard from "../../molecules/ActiveCard";
import hongo from "../../../images/honjoMain.jpg";
import test1 from "../../../images/sbh1.jpg";
import test2 from "../../../images/sbh2.jpg";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

interface IActiveProps {
  height?: number;
}

const Active = React.forwardRef<any | null, IActiveProps>((props, ref) => {
  const [setting, setSetting] = useState<Settings>();
  const slickRef = useRef<any | null>(null);

  useEffect(() => {
    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      arrows: false,
      fade: true,
    };
    setSetting(settings);
  }, []);

  const clickNext = () => {
    slickRef.current.slickNext();
  };
  const clickPrev = () => {
    slickRef.current.slickPrev();
  };
  return (
    <Container height={props.height}>
      <ContentContainer>
        <ImageBox ref={ref}>
          <ImageLeftWrapper>
            <LeftImageBox>
              <Image src={test1} />
            </LeftImageBox>
          </ImageLeftWrapper>
          <ImageRightWrapper>
            <RightImageBox>
              <Image src={test2} />
            </RightImageBox>
          </ImageRightWrapper>
        </ImageBox>
        <TitleBox>
          <Title>WHAT WE DONE</Title>
          <Slick {...setting} ref={slickRef}>
            <TextBox>
              <Date>2019</Date>
              <Text>제주 삼다공원 야간콘서트</Text>
              <Text>문화가 있는 날 청춘마이크 연간 공연</Text>
              <Text>제주 도립 미술관 야간콘서트</Text>
              <Text>제주도청 초청 공연</Text>
              <Text>MBC 보물섬 홍조밴드 출연</Text>
              <Text>KBS 보물섬 홍조밴드 출연</Text>
              <Text>제주 야호 페스티벌</Text>
              <Text>제주 설민석 독서문화대전</Text>
              <Text>아리랑 라디오 출연</Text>
              <Text>KCTV 곶자왈 생명수를 품다 출연</Text>
              <Text></Text>
            </TextBox>
            <TextBox>
              <Date>2020</Date>
              <Text>제주 삼다공원 야간콘서트</Text>
              <Text>문화가 있는 날 청춘마이크 연간 공연</Text>
              <Text>제주 도립 미술관 야간콘서트</Text>
              <Text>제주도청 초청 공연</Text>
              <Text>MBC 보물섬 홍조밴드 출연</Text>
              <Text>KBS 보물섬 홍조밴드 출연</Text>
              <Text>제주 야호 페스티벌</Text>
              <Text>제주 설민석 독서문화대전</Text>
              <Text>아리랑 라디오 출연</Text>
              <Text>KCTV 곶자왈 생명수를 품다 출연</Text>
              <Text></Text>
            </TextBox>
            <TextBox>
              <Date>2021</Date>
              <Text>제주 삼다공원 야간콘서트</Text>
              <Text>문화가 있는 날 청춘마이크 연간 공연</Text>
              <Text>제주 도립 미술관 야간콘서트</Text>
              <Text>제주도청 초청 공연</Text>
              <Text>MBC 보물섬 홍조밴드 출연</Text>
              <Text>KBS 보물섬 홍조밴드 출연</Text>
              <Text>제주 야호 페스티벌</Text>
              <Text>제주 설민석 독서문화대전</Text>
              <Text>아리랑 라디오 출연</Text>
              <Text>KCTV 곶자왈 생명수를 품다 출연</Text>
              <Text></Text>
            </TextBox>
          </Slick>
          <ButtonBox>
            <PrevButton onClick={clickPrev}>
              <ButtonText>prev</ButtonText>
              <CgArrowLongLeft size={"20"} color={"#26334c"} />
            </PrevButton>
            <NextButton onClick={clickNext}>
              <ButtonText>next</ButtonText>
              <CgArrowLongRight size={"20"} color={"#26334c"} />
            </NextButton>
          </ButtonBox>
        </TitleBox>
      </ContentContainer>
    </Container>
  );
});

export default Active;
export const ButtonText = styled.p`
  font-size: 15px;
  color: #26334c;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = css`
  margin-top: 10px;
  border-radius: 50%;
  padding: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ffffff;
    opacity: 0.8;
  }
  &:active {
    background-color: #ffffff;
    opacity: 0.8;
  }
`;

export const NextButton = styled.button`
  ${Button}
  margin-left: 10px;
`;

export const PrevButton = styled.button`
  ${Button}
`;

export const Slick = styled(Slider)`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div<IActiveProps>`
  width: 100%;
  background-color: #f6f5f1;

  @media only screen and (min-width: 1440px) {
    height: ${(props) => props.height && `${props.height}px`};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;

  @media only screen and (min-width: 768px) {
    padding: 0 70px 70px 70px;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
  @media only screen and (min-width: 1440px) {
    justify-content: center;
  }

  @media only screen and (min-width: 1510px) {
    padding: 0 0 70px 0;
    max-width: 1438px;
    margin: 0 auto;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
    max-width: 500px;
    align-items: center;
    height: 100%;
  }
`;

export const ImageLeftWrapper = styled.div`
  overflow: hidden;
  width: 50%;
  margin-right: 0px;
  height: 400px;
  @media only screen and (min-width: 768px) {
    margin-right: 15px;
    width: calc(50% - 7.5px);
    margin-bottom: -150px;
  }
`;
export const ImageRightWrapper = styled.div`
  overflow: hidden;
  width: 50%;
  height: 400px;
  margin-top: -150px;
  @media only screen and (min-width: 768px) {
    width: calc(50% - 7.5px);
    margin-top: 0;
  }
`;

export const LeftImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const RightImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
    width: 50%;
  }
`;

export const Title = styled.h2`
  margin: 40px 0;
  font-size: 25px;
  font-weight: bold;
  color: #26334c;
  @media only screen and (min-width: 768px) {
    margin: 70px 0;
    font-size: 28px;
    font-weight: bold;
    color: #26334c;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10px;
`;
export const Date = styled.h3`
  font-size: 20px;
  color: #26334c;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 17px;
  color: #26334c;
  margin-bottom: 5px;
`;
