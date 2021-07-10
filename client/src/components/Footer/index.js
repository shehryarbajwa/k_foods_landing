import React from "react";

import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  WebsiteRights
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink to="/about" onClick={toggleHome}>کیا ہے منڈی   </FooterLink>
              <FooterLink to="/buy" onClick={toggleHome}>خریدیں   </FooterLink>
              <FooterLink to="/sell" onClick={toggleHome}>فروخت   </FooterLink>
              <WebsiteRights> All rights reserved © منڈی   </WebsiteRights>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
