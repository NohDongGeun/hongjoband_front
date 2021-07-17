import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/organisms/Header";
import MobileNav from "../../components/organisms/MobileNav";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSideNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header handleSideNav={handleSideNav} />
      <MobileNav isOpen={isOpen} handleSideNav={handleSideNav} />
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
