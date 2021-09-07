import React from "react";
import styled from "styled-components";
import dummy01 from "../../../images/dummy01.jpg";

interface IVideo {
  height?: number;
}

const Video = React.forwardRef<any | null, IVideo>((props, ref) => {
  return (
    <Container ref={ref} height={props.height}>
      <ContentContainer>
        <TitleBox>
          <Title>OUR VIDEO</Title>
        </TitleBox>
        <VideoWrapper>
          <ImgBox>
            <a href={"/"}>
              <Img src={dummy01} />
            </a>
          </ImgBox>
          <ImgBox>
            <Img src={dummy01} />
          </ImgBox>
          <ImgBox>
            <Img src={dummy01} />
          </ImgBox>
          <ImgBox>
            <Img src={dummy01} />
          </ImgBox>
          <ImgBox>
            <Img src={dummy01} />
          </ImgBox>
        </VideoWrapper>
      </ContentContainer>
    </Container>
  );
});

export default Video;

export const Container = styled.section<IVideo>`
  width: 100%;
  background-color: #000000;
  @media only screen and (min-width: 1440px) {
    height: ${(props) => props.height && `${props.height}px`};
  }
`;

export const ContentContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 1510px) {
    padding: 0;
    margin: 0 auto;
    max-width: 1438px;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 40px;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImgBox = styled.div`
  flex-basis: 100%;
  margin-bottom: 20px;
  height: 270px;
  cursor: pointer;

  @media only screen and (min-width: 480px) {
    height: 280px;
    flex-basis: calc(50% - 6px);
    &:nth-child(2n) {
      margin-left: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-basis: calc(33.3% - 10px);
    height: 300px;
    &:nth-child(2n) {
      margin-left: 0;
    }
    &:nth-child(3n + 2) {
      margin: 0 15px 20px 15px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 320px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
