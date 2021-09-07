import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import dummy01 from "../../../images/dummy01.jpg";
import sbh1 from "../../../images/sbh1.jpg";
import honjoMain from "../../../images/honjoMain.jpg";
import sbh2 from "../../../images/sbh2.jpg";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IPoster {
  height?: number;
}

const Poster = React.forwardRef<any | null, IPoster>((props, ref) => {
  const [setting, setSetting] = useState<Settings>();
  const slickRef = useRef<any>(null);

  useEffect(() => {
    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: false,
      arrows: false,
    };
    setSetting(settings);
  }, []);

  return (
    <Container height={props.height}>
      <ContentContainer>
        <TitleBox>
          <Title>Poster</Title>
        </TitleBox>
        <PosterWrapper ref={ref}>
          <Slick ref={slickRef} {...setting}>
            <ImgBox>
              <Img src={dummy01} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh1} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh2} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh1} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={honjoMain} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={dummy01} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh1} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={honjoMain} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh2} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={sbh1} alt={""} />
            </ImgBox>
            <ImgBox>
              <Img src={honjoMain} alt={""} />
            </ImgBox>
          </Slick>
        </PosterWrapper>
      </ContentContainer>
    </Container>
  );
});

export default Poster;

export const Container = styled.section<IPoster>`
  width: 100%;
  height: ${(props) => props.height && `${props.height}px`};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  position: relative;
`;

export const TitleBox = styled.div`
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const PosterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(100%, -50%);
  max-width: 1439px;
  width: 100%;
`;

export const ImgBox = styled.div`
  display: flex;
  height: 500px;
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
