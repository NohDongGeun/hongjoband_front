import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../images/hongo_logo.png";
import Mobiles from "../../../images/hongjo_logo_text.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../MobileNav";
import FadeIn from "react-fade-in";

interface IHeader {
  handleSideNav?: () => void;
}

const Header = React.forwardRef<any | null, IHeader>((props, ref) => {
  return (
    <>
      <Container ref={ref}>
        <ContentContainer>
          <FadeIn delay={300}>
            <LogoBox>
              {/* <Logo src={logo} />
            <MobileLogo src={Mobiles} /> */}
              HONGJO
            </LogoBox>
          </FadeIn>
          <MobileNavButton onClick={() => console.log}>
            <GiHamburgerMenu size={"30"} color={"	#ff3673"} />
          </MobileNavButton>
          <NavBox>
            <NavUl>
              <NavLi>
                <FadeIn delay={400}>
                  <NavText>Home</NavText>
                </FadeIn>
              </NavLi>
              <NavLi>
                <FadeIn delay={500}>
                  <NavText>Music</NavText>
                </FadeIn>
              </NavLi>
              <NavLi>
                <FadeIn delay={600}>
                  <NavText>Jeji</NavText>
                </FadeIn>
              </NavLi>
              <NavLi>
                <FadeIn delay={700}>
                  <NavText>Guest</NavText>
                </FadeIn>
              </NavLi>
              <NavLi>
                <FadeIn delay={800}>
                  <NavText>Contact</NavText>
                </FadeIn>
              </NavLi>
            </NavUl>
          </NavBox>
        </ContentContainer>
      </Container>
    </>
  );
});

export default Header;

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  @media only screen and (min-width: 660px) {
    height: 70px;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;

  @media only screen and (min-width: 480px) {
    padding: 10px 40px;
  }

  @media only screen and (min-width: 660px) {
    padding: 0px 40px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0px 70px;
  }
  @media only screen and (min-width: 1510px) {
    padding: 0;
    margin: 0 auto;
    max-width: 1438px;
  }
`;

export const LogoBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #736e66;
  @media only screen and (min-width: 660px) {
    height: 60px;
  }
`;

export const Logo = styled.img`
  display: none;

  @media only screen and (min-width: 660px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const MobileLogo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (min-width: 660px) {
    display: none;
  }
`;

export const MobileNavButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }

  @media only screen and (min-width: 660px) {
    display: none;
  }
`;

export const MobileButtonImg = styled(GiHamburgerMenu)`
  width: 100%;
  height: 100%;
`;

export const NavBox = styled.nav`
  display: none;

  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavUl = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLi = styled.li`
  list-style-type: none;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavText = styled.p`
  color: #ff7da4;
  font-weight: bold;
  font-size: 16px;
  color: #736e66;
`;

export const ContactBox = styled.button`
  padding: 5px 25px;
  background-color: #ff7da4;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 40px;
  &:hover {
    opacity: 0.8;
  }
`;
