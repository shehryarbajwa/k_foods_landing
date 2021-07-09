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

  @media screen and (max-width: 480px) {
    margin: 30px;
    padding: 0px;
    width: 100%;
    overflow: visible;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) { 
    text-decoration: none;
    margin: 100px;
    font-size: 22px;
 }
`;



export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 120px;
  font-size: 32px;
  font-weight: bold;

  &:hover {
    color: black;
    transition: 0.3s ease-out;
  }

  @media all and (max-width: 480px) { 
    margin: 5px;
    font-size: 13px;
    width: 90%;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) { 
    margin: 7px;
    font-size: 13px;
    font-weight: bold;
    width: 80%;
    
  }
`;




export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 16px;

  @media all and (max-width: 480px) { 
    margin: 5px;
    font-size: 10px;
    width: 90%;
  }

`;
