import React from 'react'
import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #121111;
  background: ${({ greenBg }) => (greenBg ? '#e3fcec' : '#010606')};
  padding: 5px 5px;
  

  @media screen and (max-width: 768px) {
    padding: 5px 5px ;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \''
    If the imageStart is true, then use col2 then col1 as grid template area to begin displaying InfoRow
  */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #01bf71;
  font-size: 40px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 34px;
`;

export const Heading = styled.h1`
  margin-bottom: 34px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ greenText }) => (greenText ? '#01bf71' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 45px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#01bf71' : '#01bf71')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 405px;
  height: 70%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 100;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 100;
`;