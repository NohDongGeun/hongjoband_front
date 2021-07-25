import React from "react";
import styled from "styled-components";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import ReactWaves from "@dschoon/react-waves";

interface IAudioPlayer {
  isPlaying: boolean;
  currentTime: number;
  endTime: number;
  pos: number;
  handleMusic: () => void;
}

const NewAudioPlayer: React.FC<IAudioPlayer> = ({
  isPlaying = false,
  currentTime,
  endTime,
  pos,
  handleMusic,
}) => {
  return (
    <Container>
      <LeftBox>
        <PlayPauseButton onClick={handleMusic}>
          {isPlaying ? (
            <AiOutlinePause color={"#894f55"} size={"30"} />
          ) : (
            <BsFillPlayFill
              style={{ marginLeft: "5px" }}
              color={"#894f55"}
              size={"30"}
            />
          )}
        </PlayPauseButton>
        <LeftTextBox>
          <Name>Devandra Benhart</Name>
          <Title>Never Seen Such Good</Title>
        </LeftTextBox>
      </LeftBox>
      <RightBox>
        <Time>00:00</Time>
        <RangeBox>
          <Range
            audioFile={
              "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            }
            className={"react-waves"}
            options={{
              barHeight: 2,
              cursorWidth: 0,
              hideScrollbar: true,
              height: 30,
              progressColor: "#EC407A",
              responsive: true,
              waveColor: "#D1D6DA",
            }}
            volume={1}
            zoom={1}
            pos={pos}
            playing={isPlaying}
            onPosChange={console.log}
          />
        </RangeBox>
        <Time>04:10</Time>
      </RightBox>
    </Container>
  );
};

export default NewAudioPlayer;

export const Container = styled.div`
  background-color: #894f55;
  display: flex;
  position: absolute;
  top: calc(100% - 100px);
  left: 0;
  flex-direction: row;
  border-top-right-radius: 2px;

  @media only screen and (min-width: 660px) {
    padding: 20px 0 20px 40px;
    width: 60%;
  }

  @media only screen and (min-width: 1024px) {
    padding: 20px 0 20px 50px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 20px 0 20px 70px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 40%;
  border-right: 1px solid #a77177;
`;

export const PlayPauseButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fee1b4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const LeftTextBox = styled.div``;

export const Name = styled.h3`
  color: #ffffff;
  font-weight: bold;
`;
export const Title = styled.h3`
  color: #a77177;
  font-weight: bold;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 60%;
`;

export const Time = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
`;

export const RangeBox = styled.div`
  width: 50%;
  margin: 0 20px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Range = styled(ReactWaves)`
  width: 100%;
  height: 100%;
`;

export const CenterBox = styled.div`
  height: 100%;
  border-right: 1px solid #a77177;
`;
