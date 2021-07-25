import React, { useEffect, useRef, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import audioTest from "../../../images/audioTest.jpg";

// interface IAudioPlayer {
//   title: string;
//   albumName: string;
//   src: string;
//   image: string;
//   isPlaying: boolean;
//   onPrev: () => void;
//   onNext: () => void;
//   onMute: () => void;
// }

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<any>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!audioPlayer.current || !progressBar.current) return;
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const handlePrev = () => {
    progressBar.current.value = 0;
    changeRange();
  };

  const handleNext = () => {
    progressBar.current.value = 0;
    changeRange();
  };

  const setMuted = () => {
    setIsMuted((prev) => !prev);
  };

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    if (!audioPlayer.current) return;

    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (!audioPlayer.current) return;
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    if (!audioPlayer.current) return;
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <Container>
      <ImageBox>
        <Image src={audioTest} />
      </ImageBox>
      <AudioBox>
        <audio
          ref={audioPlayer}
          src={
            "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
          }
          preload={"metadata"}
          muted={isMuted}
        ></audio>
        <AudioTop>
          <PlayButton onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause size={"20"} />
            ) : (
              <FaPlay size={"20"} style={{ marginLeft: "3px" }} />
            )}
          </PlayButton>
          <TitleBox>
            <Name>제이크 블라인드(Jake Blind)</Name>
            <Title>미 어게인(Me Again)</Title>
          </TitleBox>
        </AudioTop>
        <AudioBottom>
          <PrevButton onClick={handlePrev}>
            <MdSkipPrevious size={"30"} />
          </PrevButton>
          <PrevButton onClick={handleNext}>
            <MdSkipNext size={"30"} />
          </PrevButton>
          <RangeBox>
            <Range
              ref={progressBar}
              type="range"
              defaultValue="0"
              onChange={changeRange}
            />
          </RangeBox>
          <div>
            <CurrentText>{calculateTime(currentTime)} / 04:05</CurrentText>
          </div>
          <VolumeBox onClick={setMuted}>
            {isMuted ? (
              <BsFillVolumeMuteFill size={"25"} />
            ) : (
              <BsFillVolumeDownFill size={"25"} />
            )}
          </VolumeBox>
        </AudioBottom>
      </AudioBox>
    </Container>
  );
};

export default AudioPlayer;

export const Container = styled.div`
  display: flex;

  @media only screen and (min-width: 660px) {
    flex-direction: row;
    max-width: 585px;
    min-width: 585px;
    min-height: 180px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
`;

export const ImageBox = styled.div`
  @media only screen and (min-width: 660px) {
    min-width: 180px;
    height: 100%;
    border-radius: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AudioBox = styled.div`
  display: flex;

  @media only screen and (min-width: 660px) {
    padding: 30px 10px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
  }
`;

export const AudioTop = styled.div`
  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-basis: auto;
  }
`;

export const AudioBottom = styled.div`
  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const PlayButton = styled.button`
  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    min-width: 50px;
    border: 1px solid #000000;
    border-radius: 50%;
    margin: 0 23px 0 13px;
  }
`;

export const TitleBox = styled.div`
  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Title = styled.h3`
  @media only screen and (min-width: 660px) {
    color: #000000;
    font-size: 23px;
    font-weight: 600;
  }
`;

export const Name = styled.h3`
  @media only screen and (min-width: 660px) {
    font-size: 16px;
    color: #000000;
    margin-bottom: 5px;
  }
`;

export const PrevButton = styled.button`
  @media only screen and (min-width: 660px) {
    padding: 0;
    margin-right: 13px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const RangeBox = styled.div`
  @media only screen and (min-width: 660px) {
    width: 170px;
    margin-right: 13px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Range = styled.input`
  width: 100%;
`;

export const CurrentText = styled.p`
  font-size: 13px;
`;

export const VolumeBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
