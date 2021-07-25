import React from "react";
import styled from "styled-components";
import audioImage from "../../../images/audioImage.jpg";

const AudioImage: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <ImageBox>
          <Image src={audioImage} />
        </ImageBox>
        <TextBox>
          <Title
            dangerouslySetInnerHTML={{ __html: "Devendra<br/> Benhart" }}
          ></Title>
          <Text>Never Seen Such Good</Text>
        </TextBox>
      </ContentContainer>
    </Container>
  );
};

export default AudioImage;

export const Container = styled.div`
  width: 65%;
  position: relative;
  margin-left: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 70px;
`;

export const ImageBox = styled.div`
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  padding: 40px;
  background-color: #ddbab1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 350px;
  height: 100%;
`;

export const Title = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 60px;
  line-height: 1.2;
`;

export const Text = styled.p`
  color: #736e66;
  font-weight: bold;
  margin-left: 40px;
`;
