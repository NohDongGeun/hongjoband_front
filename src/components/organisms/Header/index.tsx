import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../images/hongo_logo.png";
import Mobiles from "../../../images/hongjo_logo_text.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../MobileNav";

interface IHeader {
  handleSideNav: () => void;
}

const Header: React.FC<IHeader> = ({ handleSideNav }) => {
  return (
    <>
      <Container>
        <ContentContainer>
          <LogoBox>
            <Logo src={logo} />
            <MobileLogo src={Mobiles} />
          </LogoBox>
          <MobileNavButton onClick={handleSideNav}>
            <GiHamburgerMenu size={"30"} color={"	#ff3673"} />
          </MobileNavButton>
          <NavBox>
            <NavUl>
              <NavLi>
                <NavText>Home</NavText>
              </NavLi>
              <NavLi>
                <NavText>Music</NavText>
              </NavLi>
              <NavLi>
                <NavText>Jeju</NavText>
              </NavLi>
              <NavLi>
                <NavText>Guest</NavText>
              </NavLi>
              <NavLi>
                <ContactBox>Contact</ContactBox>
              </NavLi>
            </NavUl>
          </NavBox>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Header;

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ffc4d6;
  background-color: #fafbfc;
  position: fixed;
  left: 0;
  top: 0;

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
  padding: 10px 10px;

  @media only screen and (min-width: 660px) {
    padding: 0px 20px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0px 40px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0px 70px;
    max-width: 1520px;
  }

  @media only screen and (min-width: 1640px) {
    padding: 0;
    margin: 0 auto;
  }
`;

export const LogoBox = styled.div`
  width: 160px;
  height: 30px;

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
  justify-content: center;
`;

export const NavLi = styled.li`
  list-style-type: none;
  margin-right: 20px;
`;

export const NavText = styled.p`
  color: #ff7da4;
  font-weight: bold;
  font-size: 20px;
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
