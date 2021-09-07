import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import ReactWaves from "@dschoon/react-waves";
import WaveSurfer from "wavesurfer.js";
import { WaveSurferParams } from "wavesurfer.js/types/params";

interface IAudioPlayer {
  isPlaying: boolean;
  duration: string;
  currentTime: string;
  handleMusic: () => void;
}

const NewAudioPlayer = React.forwardRef<any | null, IAudioPlayer>(
  (props, ref) => {
    const { isPlaying, duration, handleMusic, currentTime } = props;

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
          <Time>{currentTime}</Time>
          <RangeBox ref={ref}></RangeBox>
          {/* <Range
            audioFile={
              "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            }
            className={"react-waves"}
            options={{
              height: 50,
              barWidth: 2,
              barHeight: 3,
              barRadius: 3,
              fillParent: true,
              cursorWidth: 0, 
              maxCanvasWidth: 230,
              hideScrollbar: true,
              progressColor: "#EC407A",
              responsive: true,
              waveColor: "#D1D6DA",
            }}
            volume={1}
            pos={pos}
            playing={isPlaying}
            onPosChange={onChangeCurrentTime}
          /> */}

          <Time>{duration}</Time>
        </RightBox>
      </Container>
    );
  }
);

// const NewAudioPlayers = ({ isPlaying = false, pos, handleMusic, endTime }) => {
//   const wavesurfer = useRef<any>(null);
//   const [currentTime, setCurrentTime] = useState<string>("00:00");
//   const time = useRef(0);

//   useEffect(() => {
//     if (!wavesurfer.current) return;
//     isPlaying ? wavesurfer.current.playPause() : wavesurfer.current.playPause();
//   }, [isPlaying]);

//   useEffect(() => {
//     const track = document.querySelector("#track");
//     if (!wavesurfer.current || !track) return;

//     wavesurfer.current = WaveSurfer.create({
//       barWidth: 2,
//       barHeight: 2,
//       barRadius: 3,
//       cursorWidth: 1,
//       container: wavesurfer.current,
//       backend: "WebAudio",
//       height: 70,
//       progressColor: "#EC407A",
//       responsive: true,
//       waveColor: "#D1D6DA",
//       cursorColor: "transparent",
//     });
//     wavesurfer.current.load(track);

//     return () => wavesurfer.current.destroy();
//   }, []);

//   const onChangeCurrentTime = () => {
//     time.current = time.current + 1;
//     const minutes = Math.floor(time.current / 60);
//     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     const seconds = Math.floor(time.current % 60);
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     setCurrentTime(`${returnedMinutes}:${returnedSeconds}`);
//   };
//   const url =
//     "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3";

//   return (
//     <Container>
//       <LeftBox>
//         <PlayPauseButton onClick={handleMusic}>
//           {isPlaying ? (
//             <AiOutlinePause color={"#894f55"} size={"30"} />
//           ) : (
//             <BsFillPlayFill
//               style={{ marginLeft: "5px" }}
//               color={"#894f55"}
//               size={"30"}
//             />
//           )}
//         </PlayPauseButton>
//         <LeftTextBox>
//           <Name>Devandra Benhart</Name>
//           <Title>Never Seen Such Good</Title>
//         </LeftTextBox>
//       </LeftBox>
//       <RightBox>
//         <Time>{currentTime}</Time>
//         <RangeBox ref={wavesurfer}></RangeBox>
//         <audio id="track" src={url} />

//         {/* <Range
//             audioFile={
//               "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
//             }
//             className={"react-waves"}
//             options={{
//               height: 50,
//               barWidth: 2,
//               barHeight: 3,
//               barRadius: 3,
//               fillParent: true,
//               cursorWidth: 0,
//               maxCanvasWidth: 230,
//               hideScrollbar: true,
//               progressColor: "#EC407A",
//               responsive: true,
//               waveColor: "#D1D6DA",
//             }}
//             volume={1}
//             pos={pos}
//             playing={isPlaying}
//             onPosChange={onChangeCurrentTime}
//           /> */}

//         <Time>{endTime}</Time>
//       </RightBox>
//     </Container>
//   );
// };

export default NewAudioPlayer;

export const Container = styled.div`
  background-color: #894f55;
  display: flex;
  flex-direction: row;
  border-top-right-radius: 20px;
  padding: 0 20px;

  @media only screen and (min-width: 480px) {
    padding: 0 40px;
    width: 100%;
  }

  @media only screen and (min-width: 660px) {
    padding: 20px 0 20px 40px;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 900px;
    padding: 20px 0 20px 70px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1024px;
    padding: 20px 0 20px 70px;
  }

  @media only screen and (min-width: 1780px) {
    padding: 20px 0 20px 100px;
    max-width: 65%;
  }
`;

export const LeftBox = styled.div`
  display: none;

  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 50%;
    border-right: 1px solid #a77177;
  }
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
  align-items: center;
  justify-content: center;
  height: 70px;
  flex-basis: 50%;
  background: transparent;
  /* width: 100%;
  display: flex;
  flex-direction: row;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  background: transparent;

  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    padding: 0 20px;
  } */
`;

export const Time = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
`;

export const RangeBox = styled.div`
  width: 100%;
  height: 70px;
  margin: 0 10px;
  /* max-height: 70px;
  margin: 0 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 480px) {
    display: flex;
    max-height: 70px;
    justify-content: center;
    align-items: center;
  } */
`;

export const Range = styled(ReactWaves)`
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
`;

export const CenterBox = styled.div`
  border-right: 1px solid #a77177;
`;
