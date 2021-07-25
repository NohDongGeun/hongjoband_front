import React, { useState } from "react";
import styled from "styled-components";
import AudioPlayer from "../../components/molecules/AudioPlayer";
import MusicText from "../../components/molecules/MusicText";
import Header from "../../components/organisms/Header";
import light from "../../images/light.jpg";

interface IMusic {
  src: string;
}

const Music: React.FC = () => {
  return (
    <>
      <Container src={light}>
        <ContentContainer>
          <MusicText />
          <AudioPlayer />
        </ContentContainer>
      </Container>
    </>
  );
};

export default Music;

export const Container = styled.div<IMusic>`
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  padding: 100px 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
