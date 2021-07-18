import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdClose } from "react-icons/md";
import logo from "../../../images/hongo_logo.png";
import { RiHomeFill, RiHome2Line } from "react-icons/ri";
import { SiApplemusic } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdLibraryMusic } from "react-icons/md";
import { GiIsland } from "react-icons/gi";

interface IMobileNavProps {
  isOpen: boolean;
  handleSideNav?: () => void;
}

const MobileNav: React.FC<IMobileNavProps> = ({ isOpen, handleSideNav }) => {
  const [color, setColor] = useState<string>("#606060");
  const [home, setHome] = useState<string>("#606060");
  const [music, setMusic] = useState<string>("#606060");
  const [jeju, setJeju] = useState<string>("#606060");
  const [guest, setGuest] = useState<string>("#606060");
  const [contact, setContact] = useState<string>("#606060");

  const hoverColor = (i: number) => {
    switch (i) {
      case 0:
        home === "#606060" ? setHome("#ffc4d6") : setHome("#606060");
        return;

      case 1:
        music === "#606060" ? setMusic("#ffc4d6") : setMusic("#606060");
        return;

      case 2:
        jeju === "#606060" ? setJeju("#ffc4d6") : setJeju("#606060");
        return;

      case 3:
        guest === "#606060" ? setGuest("#ffc4d6") : setGuest("#606060");
        return;

      case 4:
        contact === "#606060" ? setContact("#ffc4d6") : setContact("#606060");
        return;
    }
  };
  return (
    <>
      <Container isOpen={isOpen}>
        <ContentContainer>
          <Xbox>
            <XboxButton onClick={handleSideNav}>
              <MdClose size={"30"} color={"#ff5a8c"} />
            </XboxButton>
          </Xbox>
          <LogoBox>
            <LogoImg src={logo} />
            <LogoMail>chltndud222@hanmail.net</LogoMail>
          </LogoBox>
          <NavBox>
            <NavUl>
              <NavLi
                onMouseEnter={() => hoverColor(0)}
                onMouseLeave={() => hoverColor(0)}
              >
                <RiHomeFill
                  className={"icon"}
                  size={25}
                  color={`${home}`}
                  style={{ margin: "0 0 0 10px" }}
                />
                <NavText>Home</NavText>
              </NavLi>
              <NavLi
                onMouseEnter={() => hoverColor(1)}
                onMouseLeave={() => hoverColor(1)}
              >
                <MusicIcon
                  size={25}
                  color={`${music}`}
                  style={{ margin: "0 0 0 10px" }}
                />
                <NavText>Music</NavText>
              </NavLi>
              <NavLi
                onMouseEnter={() => hoverColor(2)}
                onMouseLeave={() => hoverColor(2)}
              >
                <JejuIcon
                  size={25}
                  color={`${jeju}`}
                  style={{ margin: "0 0 0 10px" }}
                />
                <NavText>Jeju</NavText>
              </NavLi>
              <NavLi
                onMouseEnter={() => hoverColor(3)}
                onMouseLeave={() => hoverColor(3)}
              >
                <GuestIcon
                  size={25}
                  color={`${guest}`}
                  style={{ margin: "0 0 0 10px" }}
                />
                <NavText>Guest</NavText>
              </NavLi>
              <NavLi
                onMouseEnter={() => hoverColor(4)}
                onMouseLeave={() => hoverColor(4)}
              >
                <ContactIcon
                  size={25}
                  color={`${contact}`}
                  style={{ margin: "0 0 0 10px" }}
                />
                <NavText>Contact</NavText>
              </NavLi>
            </NavUl>
          </NavBox>
        </ContentContainer>
      </Container>
    </>
  );
};

export default MobileNav;

export const HomeIcon = styled(RiHomeFill)``;
export const MusicIcon = styled(MdLibraryMusic)``;
export const JejuIcon = styled(GiIsland)``;
export const GuestIcon = styled(BsFillPeopleFill)``;
export const ContactIcon = styled(IoMdContact)``;

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
  justify-content: start;
  position: relative;
`;

export const LogoBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid #e8e9eb;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 70px;
`;

export const LogoMail = styled.p`
  margin-left: 3px;
  color: #ffc4d6;
`;

export const Xbox = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
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
  padding: 10px 20px;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
`;

export const NavIcon = styled.div``;

export const NavText = styled.button`
  font-weight: bold;
  font-size: 18px;
  color: #606060;
  margin: 0 0 0 35px;
  background-color: transparent;
  outline: none;
  border: 0;
`;

export const NavLi = styled.li`
  list-style-type: none;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;

  &:hover {
    background-color: #ff5a8c;
    border-radius: 10px;
  }

  &:active {
    background-color: #ff5a8c;
  }

  &:focus &.icon {
    color: #ffc4d6;
  }

  &:active &.icon {
    color: #ffc4d6;
  }

  &:hover ${NavText} {
    color: #ffc4d6;
  }

  &:active ${NavText} {
    color: #ffc4d6;
  }
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
