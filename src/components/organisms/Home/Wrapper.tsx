import React, { useEffect, useRef, useState } from "react";
import { RiCoinsLine } from "react-icons/ri";
import { SiBreaker } from "react-icons/si";
import styled from "styled-components";
import Header from "../Header";
import About from "./About";
import Active from "./Active";
import MainBox from "./MainBox";
import Poster from "./Poster";
import Video from "./Video";

const EASE = 0.075;
const SCENE = [{}, {}, {}, {}, {}, {}];

const Wrapper: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const containerRef = useRef<any>(null);
  const containerHeightRef = useRef<any>();
  const windowWidthRef = useRef<any>(null);
  const sceneHeightRef = useRef<any>(null);
  const fakeScrollRef = useRef<any>(null);
  const rafActive = useRef<boolean>(false);
  const rafId = useRef<any>(null);
  const targetScroll = useRef<any>(null);
  const currentScroll = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const aboutImageRef = useRef<any>(null);
  const activeContainerRef = useRef<any>(null);
  const activeLeftWrapperRef = useRef<any>(null);
  const activeRightWrapperRef = useRef<any>(null);
  const activeLeftRef = useRef<any>(null);
  const activeLeftImgRef = useRef<any>(null);
  const activeRightRef = useRef<any>(null);
  const activeRightImgRef = useRef<any>(null);
  const videoContainerRef = useRef<any>(null);
  const headerRef = useRef<any>(null);
  const posterRef = useRef<any>(null);
  const postCheck = useRef<boolean>(false);

  const setTransformPoster = (transX: number) => {
    if (!posterRef.current) {
      return;
    }
    if (postCheck.current) {
      posterRef.current.style.transform = `translate(-50%, -50%)`;
      return;
    }

    posterRef.current.style.transform = `translate(${transX}%, -50%)`;
  };

  const updateScroll = () => {
    if (window.innerWidth < 1440) {
      return;
    }
    targetScroll.current = window.scrollY || window.pageYOffset;
    startAnimation();
  };

  const setColor = (colorR: number, colorG: number, colorB: number) => {
    if (videoContainerRef.current) {
      videoContainerRef.current.style.backgroundColor = `rgba(${colorR}, ${colorG}, ${colorB})`;
    }
  };

  const setTransform = (currentScroll: string) => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "translateY(" + -currentScroll + "px)";
      containerRef.current.style.WebkitTransform =
        "translateY(" + -currentScroll + "px)";
      headerRef.current.style.transform = "translateY(" + currentScroll + "px)";
      headerRef.current.style.Webkittransform =
        "translateY(" + currentScroll + "px)";
    }

    if (+currentScroll !== 0) {
      headerRef.current.style.backgroundColor = "#ffffff";
    } else {
      headerRef.current.style.backgroundColor = "transparent";
    }
  };

  const setTransformAbout = (scale: string, translateY: string) => {
    if (aboutImageRef.current && aboutRef.current) {
      aboutRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale}, ${scale})`;
      aboutImageRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
    }
  };
  const setTransformActive = (scale: string, translateY: string) => {
    if (
      activeLeftRef.current &&
      activeLeftImgRef.current &&
      activeRightRef.current &&
      activeRightImgRef.current
    ) {
      activeLeftRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale}, ${scale})`;
      activeRightRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale}, ${scale})`;
      activeLeftImgRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
      activeRightImgRef.current.style.transform = `translate3d(0, ${translateY}%, 0)`;
    }
  };
  const updateAnimationImages = (index: number) => {
    let ratio = currentScroll.current / window.innerHeight;
    let intersectionRatioIndex = index;
    let intersectionRatioValue = ratio - intersectionRatioIndex;
    let intersectionRatio = Math.max(0, 1 - Math.abs(intersectionRatioValue));
    let colorR: number = 246;
    let colorG: number = 245;
    let colorB: number = 241;
    let color: string = "";
    let scale = 1.2 - 1.2 * intersectionRatio + 1 * intersectionRatio;
    let translateY = -30 - -30 * intersectionRatio;
    let posterTranslateX =
      ((-50 - 100) / (1 - 0)) * (intersectionRatio - 0) + 100;

    if (index === 4 && +intersectionRatio.toFixed(2) >= 0.99) {
      postCheck.current = true;
      posterTranslateX = -50;
    }

    //x = 마우스의 x가 0부터 (a) 500까지(b) 움직일땐
    //y = 1번 이미지부터(c) 40번 이미지까지(d) 불러오고 싶다;
    //y = (d-c)/(b-a) * (X -a) +c;
    // 스크롤의  X가 0 (A)부터 0.5(B)까지 움직일떄
    // 100(C)부터 -50(D) 불러오고싶다
    //A = 0, B =1, C=100, D=-50, X = RATIO

    // const trX = (transX[1] - transX[0]) / (height max - height min) (scroll - height min) + transX[0];
    // rotateXMaxList[index] - (rotateXMaxList[index] * intersectionRatio);
    // if (index === 2 || +intersectionRatio.toFixed(2) >= 0.7) {
    //   let value = intersectionRatio * 0.3;

    //   colorR = 246 - 246 * value + 14 * value;
    //   colorG = 245 - 245 * value + 20 * value;
    //   colorB = 241 - 241 * value + 29 * value;
    // }

    if (scale <= 1) {
      scale = 1;
    }
    if (translateY >= 0) {
      translateY = 0;
    }

    // if (+valueintersectionRatio.toFixed(2) >= 0.7) {
    //   colorR = 246;
    //   colorG = 245;
    //   colorB = 241;
    // }

    switch (index) {
      case 1:
        setTransformAbout(scale.toFixed(2), translateY.toFixed(2));
        break;

      case 2:
        setTransformActive(scale.toFixed(2), translateY.toFixed(2));
        break;

      case 3:
        setColor(colorR, colorG, colorB);
        break;

      case 4:
        setTransformPoster(+posterTranslateX.toFixed(2));

        break;
      default:
        break;
    }
  };

  const handleScroll = () => {
    SCENE.map((item, index) => {
      switch (index) {
        case 1:
          return updateAnimationImages(1);

        case 2:
          return updateAnimationImages(2);

        case 4:
          return updateAnimationImages(4);

        default:
          return;
      }
    });
  };

  const updateAnimation = () => {
    let diff = targetScroll.current - currentScroll.current;
    let delta = Math.abs(diff) < 0.1 ? 0 : diff * EASE;

    if (delta) {
      currentScroll.current += delta;
      currentScroll.current = parseFloat(currentScroll.current.toFixed(2));
      rafId.current = requestAnimationFrame(updateAnimation);
    } else {
      currentScroll.current = targetScroll.current;
      rafActive.current = false;
      cancelAnimationFrame(rafId.current);
    }

    handleScroll();

    setTransform(currentScroll.current);
  };

  const startAnimation = () => {
    if (!rafActive.current) {
      rafActive.current = true;
      rafId.current = requestAnimationFrame(updateAnimation);
    }
  };

  const init = () => {
    if (window.innerWidth < 1440) {
      return;
    }
    setHeight(window.innerHeight);
    windowWidthRef.current = window.innerWidth;
    containerHeightRef.current =
      containerRef.current.getBoundingClientRect().height;
    sceneHeightRef.current = containerHeightRef.current / 4;
    fakeScrollRef.current.style.height = `${containerHeightRef.current}px`;
    aboutImageRef.current = aboutRef.current.children[0];

    activeLeftWrapperRef.current = activeContainerRef.current.children[0];
    activeRightWrapperRef.current = activeContainerRef.current.children[1];
    activeLeftRef.current = activeLeftWrapperRef.current.children[0];
    activeRightRef.current = activeRightWrapperRef.current.children[0];

    activeLeftImgRef.current = activeLeftRef.current.children[0];

    activeRightImgRef.current = activeRightRef.current.children[0];
    startAnimation();
  };

  useEffect(() => {
    init();

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", init);
  }, [height]);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <React.Fragment>
      <Container ref={containerRef}>
        <Header ref={headerRef} handleSideNav={() => console.log("asd")} />
        <MainBox height={height} />
        <About ref={aboutRef} height={height} />
        <Active ref={activeContainerRef} height={height} />
        <Video ref={videoContainerRef} height={height} />
        <Poster ref={posterRef} height={height} />
        <Video ref={videoContainerRef} height={height} />
      </Container>
      <FakeScroll ref={fakeScrollRef}></FakeScroll>
    </React.Fragment>
  );
};

export default Wrapper;

export const Container = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const FakeScroll = styled.div`
  display: none;

  @media only screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    display: block;
    width: 1px;
  }
`;
