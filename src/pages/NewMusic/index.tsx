import React, { useRef, useState } from "react";
import styled from "styled-components";
import AudioImage from "../../components/molecules/AudioImage";
import AudioPlayer from "../../components/molecules/AudioPlayer";
import MusicText from "../../components/molecules/MusicText";
import NewAudioPlayer from "../../components/molecules/NewAudioPlayer";
import Header from "../../components/organisms/Header";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

interface IMusic {
  src?: string;
}

const NewMusic: React.FC<IMusic> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [pos, setPos] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState(0);

  const progressBar = useRef(0);

  const handleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrev = () => {
    setPos(0);
    console.log("prev");
  };

  const handleNext = () => {
    setPos(0);
  };

  // const onPosChange = () => {
  //   progressBar.current.style.setProperty(
  //     "--seek-before-width",
  //     `${(progressBar.current.value / duration) * 100}%`
  //   );
  //   setCurrentTime(progressBar.current.value);
  // };

  return (
    <>
      <Container>
        <ContentContainer>
          <Header />
          <PrevButton onClick={handlePrev}>
            <PrevText>prev song</PrevText>
            <CgArrowLongLeft size={"30"} color={"#736e66"} />
          </PrevButton>
          <AudioImage />
          <NewAudioPlayer
            handleMusic={handleMusic}
            isPlaying={isPlaying}
            currentTime={currentTime}
            endTime={12}
            pos={pos}
            // onPosChange={onPosChange}
          />
          <NextButton onClick={handleNext}>
            <PrevText>next song</PrevText>
            <CgArrowLongRight size={"30"} color={"#736e66"} />
          </NextButton>
        </ContentContainer>
        <Number>02</Number>
      </Container>
    </>
  );
};

export default NewMusic;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e1d6c3;
  position: relative;
  /* overflow: hidden; */
`;

export const ContentContainer = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5000;
`;

export const Number = styled.div`
  color: #ffffff;
  position: absolute;
  top: calc(100% - 200px);
  left: calc(100% - 200px);
  font-weight: bold;
  font-size: 100px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2px;
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 60px;
  z-index: 6000;
  display: flex;
  flex-direction: column;
`;

export const PrevText = styled.p`
  color: #736e66;
  font-size: 13px;
  font-weight: 600;
`;

export const NextButton = styled.button`
  position: absolute;
  left: 90%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 60px;
  z-index: 6000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
