import React, { useState } from "react";
import styled from "styled-components";
import About from "../../components/organisms/Home/About";
import Active from "../../components/organisms/Home/Active";
import MainBox, { ImageBox } from "../../components/organisms/Home/MainBox";
import Header from "../../components/organisms/Header";
import MobileNav from "../../components/organisms/MobileNav";
import Wrapper from "../../components/organisms/Home/Wrapper";
import MobileWrapper from "../../components/organisms/Home/MobileWrapper";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Wrapper />
      <MobileWrapper />
    </React.Fragment>
  );
};

export default Home;

export const Container = styled.div`
  width: 100%;
  background-color: #f6f4f0;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
