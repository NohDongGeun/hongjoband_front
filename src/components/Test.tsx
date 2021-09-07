import React, { useEffect, useRef } from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioImage from "./molecules/AudioImage";

const Test: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    initialSlide: 0,
  };
  return (
    <Slick {...settings}>
      <AudioImage />
      <AudioImage />
      <AudioImage />
      <AudioImage />
      <AudioImage />
    </Slick>
  );
};
export default Test;
