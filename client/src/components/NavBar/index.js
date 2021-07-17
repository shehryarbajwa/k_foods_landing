import React, {useState, useEffect} from "react";
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

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">منڈی</NavLogo>
          <MobileIcon onClick={toggle}>
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
