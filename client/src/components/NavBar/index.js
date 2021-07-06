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
          <NavLogo to="/">منڈی</NavLogo>
          <MobileIcon onClick={click}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">منڈی</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">کیا ہے منڈی</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="buy">خریدیں</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sell">فروخت</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
