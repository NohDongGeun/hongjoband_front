import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AudioImage from "../../components/molecules/AudioImage";
import NewAudioPlayer from "../../components/molecules/NewAudioPlayer";
import Header from "../../components/organisms/Header";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WaveSurfer from "wavesurfer.js";
import { MUSIC_DUMMY } from "../../Dummy/Music";

interface IMusic {
  src?: string;
}

const NewMusic: React.FC<IMusic> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [pos, setPos] = useState<number>(0);
  const [setting, setSetting] = useState<any>();
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const [duration, setDuration] = useState<string>("00:00");
  const [item, setItem] = useState(0);
  const waveSufferRef = useRef<any | null>(null);
  const slickRef = useRef<any | null>(null);
  const [currentItem, setCurrentItem] = useState<any | null>(null);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }, []);

  const waveInit = (url: string) => {
    console.log("inite");
    waveSufferRef.current = WaveSurfer.create({
      barWidth: 2,
      barHeight: 2,
      barRadius: 3,
      cursorWidth: 1,
      container: waveSufferRef.current,
      backend: "WebAudio",
      height: 70,
      progressColor: "#EC407A",
      responsive: true,
      waveColor: "#D1D6DA",
      cursorColor: "transparent",
    });
    waveSufferRef.current.load(url);
    waveSufferRef.current.on("ready", function () {
      setDuration(formatTime(waveSufferRef.current.getDuration()));
    });
    waveSufferRef.current.on("audioprocess", function () {
      let time = waveSufferRef.current.getCurrentTime();
      setCurrentTime(formatTime(time));
    });
    waveSufferRef.current.on("finish", function () {
      setIsPlaying(false);
    });
  };

  useEffect(() => {
    if (
      !waveSufferRef.current ||
      typeof document === "undefined" ||
      !currentItem
    )
      return;
    const url = currentItem.mp4Url;
    waveSufferRef.current = WaveSurfer.create({
      barWidth: 2,
      barHeight: 2,
      barRadius: 3,
      cursorWidth: 1,
      container: waveSufferRef.current,
      backend: "WebAudio",
      height: 70,
      progressColor: "#EC407A",
      responsive: true,
      waveColor: "#D1D6DA",
      cursorColor: "transparent",
    });
    waveSufferRef.current.load(url);
    waveSufferRef.current.on("ready", function () {
      setDuration(formatTime(waveSufferRef.current.getDuration()));
    });
    waveSufferRef.current.on("audioprocess", function () {
      let time = waveSufferRef.current.getCurrentTime();
      setCurrentTime(formatTime(time));
    });
    waveSufferRef.current.on("finish", function () {
      setIsPlaying(false);
    });

    return () => waveSufferRef.current && waveSufferRef.current.destroy();
  }, [currentItem]);

  const handleMusic = () => {
    setIsPlaying((prev) => !prev);
    waveSufferRef.current && waveSufferRef.current.playPause();
  };

  useEffect(() => {
    const current = MUSIC_DUMMY.find((e, i) => {
      return e.index === Math.abs(item);
    });
    setCurrentItem(current);
  }, [item]);

  const handlePrev = useCallback(() => {
    // slickRef.current.slickPrev();
    setItem((prev) => (prev === 4 ? 0 : prev + 1));
    waveSufferRef.current &&
      waveSufferRef.current.load(
        "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
      );
  }, [currentItem]);

  const handleNext = () => {
    slickRef.current.slickNext();
    setItem((prev) => (prev === -4 ? 0 : prev - 1));
  };

  useEffect(() => {
    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      arrows: false,
    };
    setSetting(settings);
  }, []);

  return (
    <>
      <Container>
        <ContentContainer>
          <Header />
          <Slider ref={slickRef} {...setting}>
            <AudioImage />
            <AudioImage />
            <AudioImage />
            <AudioImage />
            <AudioImage />
          </Slider>
          <NewAudioPlayer
            ref={waveSufferRef}
            handleMusic={handleMusic}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
          />
          <PrevButton onClick={handlePrev}>
            <PrevText>prev song</PrevText>
            <CgArrowLongLeft size={"33"} color={"#736e66"} />
          </PrevButton>
          <NextButton onClick={handleNext}>
            <PrevText>next song</PrevText>
            <CgArrowLongRight size={"33"} color={"#736e66"} />
          </NextButton>
        </ContentContainer>
        {/* <Number>02</Number> */}
      </Container>
    </>
  );
};

export default NewMusic;

export const Slider = styled(Slick)`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media only screen and (min-width: 660px) {
    height: 300px;
    padding: 0 40px;
  }
  @media only screen and (min-width: 1024px) {
    height: 350px;
    padding: 0 70px;
  }
  @media only screen and (min-width: 1920px) {
    padding: 0 100px;
    height: 400px;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e1d6c3;
  position: relative;
  /* overflow: hidden; */
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media only screen and (min-width: 1020px) {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 5000;
  }
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
  display: none;
  @media only screen and (min-width: 660px) {
    display: block;
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-100%);
    z-index: 6000;
    display: flex;
    width: 65px;
    flex-direction: column;
    padding: 0;
  }

  @media only screen and (min-width: 1024px) {
    left: 70px;
    top: 50%;
  }
  @media only screen and (min-width: 1920px) {
    left: 100px;
    top: 50%;
  }
`;

export const PrevText = styled.p`
  color: #736e66;
  font-size: 13px;
  font-weight: 600;
`;

export const NextButton = styled.button`
  display: none;

  @media only screen and (min-width: 660px) {
    display: block;
    position: absolute;
    left: calc(100% - 40px);
    width: 65px;
    top: 50%;
    transform: translate(-100%, -100%);
    z-index: 6000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0;
  }

  @media only screen and (min-width: 1024px) {
    left: calc(100% - 70px);
  }
  @media only screen and (min-width: 1920px) {
    left: calc(100% - 100px);
  }
`;
