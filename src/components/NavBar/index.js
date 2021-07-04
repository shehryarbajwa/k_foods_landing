import React from "react";
import { FaBars } from "react-icons/fa";

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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Mandi</NavLogo>
          <MobileIcon onClick={click}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">خریدیں</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="buy">Buy</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sell">Sell</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
