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
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}>
              <ServicesH2>Benefits for Farmers</ServicesH2>
              <ServicesItem>20% more revenue</ServicesItem>
              <ServicesItem>One-stop-sale</ServicesItem>
              <ServicesItem>Fast payment</ServicesItem>
              <ServicesItem>Fast payment</ServicesItem>
            </ServicesIcon>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}>
              <ServicesH2>Convenience for Retailers</ServicesH2>
              <ServicesItem>Competitive Pricing</ServicesItem>
              <ServicesItem>Doorstep delivery</ServicesItem>
              <ServicesItem>High quality graded produce</ServicesItem>
              <ServicesItem>Convenient and time saving</ServicesItem>
            </ServicesIcon>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}>
              <ServicesH2>Savings for vendors</ServicesH2>
              <ServicesItem>Hygienically handled produce</ServicesItem>
              <ServicesItem>
                100% traceable to farm - Improves food safety
              </ServicesItem>
              <ServicesItem>Better quality</ServicesItem>
              <ServicesItem>Convenient and time saving</ServicesItem>
            </ServicesIcon>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
