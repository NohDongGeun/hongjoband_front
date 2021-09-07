import React from "react";
import styled from "styled-components";
import audioImage from "../../../images/audioImage.jpg";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { GrPrevious } from "react-icons/gr";

const AudioImage: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <ImageInner>
          <ImageBox>
            <Image src={audioImage} />
          </ImageBox>
        </ImageInner>
        <TextBox>
          <Title>Devendre Benhart</Title>
          <Text>Never Seen Such Good</Text>
        </TextBox>
      </ContentContainer>
    </Container>
  );
};

export default AudioImage;

export const Container = styled.div`
  position: relative;
  height: 100%;
  @media only screen and (min-width: 660px) {
    margin: 0 66px 0 33px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: center;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 480px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 660px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`;

export const ImageBox = styled.div`
  background-color: #ddbab1;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media only screen and (min-width: 660px) {
    width: 100%;
    height: 100%;
    padding: 30px;
  }
`;

export const ImageInner = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    display: block;
    padding-bottom: calc(100% - 20px);
  }
  @media only screen and (min-width: 480px) {
    width: 400px;
    height: 400px;
    &:after {
      content: "";
      display: block;
      padding-bottom: 400px;
    }
  }

  @media only screen and (min-width: 660px) {
    min-width: 300px;
    max-width: 300px;
    height: 300px;
    &:after {
      content: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    min-width: 350px;
    max-width: 350px;
    height: 350px;
  }
  @media only screen and (min-width: 1920px) {
    min-width: 400px;
    max-width: 400px;
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;
  height: 100%;

  @media only screen and (min-width: 660px) {
    margin: 0 0 0 -18px;
    align-items: flex-start;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 350px;
  }

  @media only screen and (min-width: 1440px) {
    height: 400px;
    height: 300px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-weight: bold;
  line-height: 1.2;
  font-size: 25px;

  @media only screen and (min-width: 480px) {
    font-size: 35px;
  }

  @media only screen and (min-width: 660px) {
    text-align: left;
    font-size: 45px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 70px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 70px;
  }
`;

export const Text = styled.p`
  color: #736e66;
  font-weight: bold;
  font-size: 16px;

  @media only screen and (min-width: 480px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 660px) {
    margin-left: 50px;
    text-align: left;
    font-size: 20px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
