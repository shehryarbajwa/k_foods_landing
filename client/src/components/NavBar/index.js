import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = ({ click }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">منڈی</NavLogo>
          <MobileIcon onClick={click}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">منڈی</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">کیا ہے منڈی</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/buy" onClick={toggleHome}>خریدیں</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/sell" onClick={toggleHome}>فروخت</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
