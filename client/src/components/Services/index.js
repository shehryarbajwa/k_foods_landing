import React from "react";
import Icon1 from "../../images/watermelon.svg";
import Icon2 from "../../images/apple.svg";
import Icon3 from "../../images/banana.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesItem,
  ServicesList,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>کیا ہے منڈی</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>کیا ہے منڈی</ServicesH2>
          <ServicesList>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>کیا ہے منڈی</ServicesH2>
          <ServicesList>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>کیا ہے منڈی</ServicesH2>
          <ServicesList>
            <ServicesItem>کیا ہے منڈی</ServicesItem>
            <ServicesItem>کیا ہے منڈی</ServicesItem>
            <ServicesItem>کیا ہے منڈی</ServicesItem>
            <ServicesItem>کیا ہے منڈی</ServicesItem>
          </ServicesList>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
