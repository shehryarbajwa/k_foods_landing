import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #56b87c;
`;

export const FooterWrap = styled.div`
  padding: 5px 20px;
  display: flex;
  // flex-direction: reverse-row;
  align-items: center;
  max-width: 1200px;
`;

export const FooterLinksContainer = styled.div`
    display:inline-block;
    line-height: 1.5;
    text-decoration: none;
    color:  inherit;
`;

export const FooterLinksWrapper = styled.div`
  display: inline-block;
`;

export const FooterLinkItems = styled.div`
  display: inline-block;
  margin: 50px;
  text-align: left;
  width: 1200px;
  color: black;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;



export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 100px;
  font-size: 22px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin: 9px;
    font-size: 13px;
    letter-spacing: 1.5px;
    overflow: hidden;
  }

  @media screen and (max-width: 820px) {
    margin: 9px;
    font-size: 13px;
    letter-spacing: 1.5px;
    overflow: hidden;
  }

  


`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 16px;

`;



export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
