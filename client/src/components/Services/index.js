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
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>کیا ہے منڈی</ServicesH2>
          <ServicesList>
          <ServicesItem>کیا ہے منڈی</ServicesItem>
          <ServicesItem>One-stop-sale</ServicesItem>
          <ServicesItem>Fast payment</ServicesItem>
          <ServicesItem>Convenience</ServicesItem>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Convenience for Retailers</ServicesH2>
          <ServicesList>
          <ServicesItem>Competitive Pricing</ServicesItem>
          <ServicesItem>Doorstep delivery</ServicesItem>
          <ServicesItem>High quality graded produce</ServicesItem>
          <ServicesItem>Convenience</ServicesItem>
          </ServicesList>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Savings for vendors</ServicesH2>
          <ServicesList>
            <ServicesItem>Hygienical produce</ServicesItem>
            <ServicesItem>100% traceable to farm</ServicesItem>
            <ServicesItem>Better quality</ServicesItem>
            <ServicesItem>Convenience</ServicesItem>
          </ServicesList>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
