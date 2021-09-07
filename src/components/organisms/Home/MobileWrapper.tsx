import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import About from "./About";
import Active from "./Active";
import MainBox from "./MainBox";
import Video from "./Video";

const MobileWrapper: React.FC = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Header />
        <MainBox height={height} />
        <About height={height} />
        <Active />
        <Video />
      </Container>
    </React.Fragment>
  );
};

export default MobileWrapper;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;
