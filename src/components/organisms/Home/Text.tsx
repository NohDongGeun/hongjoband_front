import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import dummy01 from "../../../images/dummy01.jpg";
import sbh1 from "../../../images/sbh1.jpg";
import honjoMain from "../../../images/honjoMain.jpg";
import sbh2 from "../../../images/sbh2.jpg";
import { FrameLayout } from "@egjs/react-infinitegrid";

const Text: React.FC = () => {
  return (
    <ContentContainer>
      <FrameLayout
        className="framelayout container"
        groupBy={(item) => item.props["data-groupkey"]}
        options={{
          isOverflowScroll: false,
          useFit: true,
          useRecycle: true,
          horizontal: false,
        }}
        layoutOptions={{
          margin: 5,
          itemSize: 0,
          frame: [
            [1, 1, 2, 3, 4, 4],
            [5, 5, 6, 7, 4, 4],
            [5, 5, 8, 9, 9, 10],
          ],
          frameFill: false,
        }}
        onAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;
        }}
      >
        <GridItem>
          <Img src={dummy01}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh1}></Img>
        </GridItem>
        <GridItem>
          <Img src={honjoMain}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh2}></Img>
        </GridItem>
        <GridItem>
          <Img src={dummy01}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh1}></Img>
        </GridItem>
        <GridItem>
          <Img src={honjoMain}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh2}></Img>
        </GridItem>
        <GridItem>
          <Img src={dummy01}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh1}></Img>
        </GridItem>
        <GridItem>
          <Img src={honjoMain}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh2}></Img>
        </GridItem>
        <GridItem>
          <Img src={dummy01}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh1}></Img>
        </GridItem>
        <GridItem>
          <Img src={honjoMain}></Img>
        </GridItem>
        <GridItem>
          <Img src={sbh2}></Img>
        </GridItem>
      </FrameLayout>
    </ContentContainer>
  );
};

export default Text;

export const Container = styled.div``;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridItem = styled.div``;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
