import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e3fcec;

  @media screen and (max-width: 768px) {
    height: 800px;
    margin-bottom: 100px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 450px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #a2fac3;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-height: 200px;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.1rem;
  }
`;

export const ServicesList = styled.ul`
  display: inline-block;
  text-align: left;

  @media screen and (max-width: 480px) {
    display: none;
  }
  
`

export const ServicesItem = styled.li`
  list-style-type: circle;
  padding: 0 5px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
