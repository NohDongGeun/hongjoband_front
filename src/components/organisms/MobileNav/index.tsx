import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import logo from "../../../images/hongo_logo.png";

interface IMobileNavProps {
  isOpen: boolean;
  handleSideNav?: () => void;
}

const MobileNav: React.FC<IMobileNavProps> = ({ isOpen, handleSideNav }) => {
  return (
    <>
      <Container isOpen={isOpen}>
        <ContentContainer>
          <TopBox>
            <Xbox>
              <XboxButton onClick={handleSideNav}>
                <MdClose size={"30"} color={"#ff5a8c"} />
              </XboxButton>
            </Xbox>
            <LogoBox>
              <LogoImg src={logo} />
            </LogoBox>
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
                  <NavText>Geust</NavText>
                </NavLi>
              </NavUl>
            </NavBox>
          </TopBox>
          <ContactBox>
            <ContactButton>Contact</ContactButton>
          </ContactBox>
        </ContentContainer>
      </Container>
    </>
  );
};

export default MobileNav;

export const TopBox = styled.div``;

export const Container = styled.div<IMobileNavProps>`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 100%;
  top: 49%;
  z-index: 3000;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translate(-100%, -50%)" : "translate(0, -50%)"};

  @media only screen and (min-width: 660px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const BottomBox = styled.div``;

export const LogoBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ffc4d6;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 70px;
`;

export const Xbox = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 10px;
`;

export const XboxButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.7;
    background-color: #ffffff;
  }
`;

export const NavBox = styled.nav`
  padding: 0 20px;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
`;

export const NavLi = styled.li`
  list-style-type: none;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ffc4d6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavText = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #ff7da4;
  margin: 0;
`;

export const ContactBox = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
`;

export const ContactButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #ff5a8c;
  border: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.7;
    outline: 0;
  }
`;
