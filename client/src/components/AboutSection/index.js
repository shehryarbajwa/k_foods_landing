import React from "react";
import { AboutContainer, AboutWrapper, AboutHeading, AboutImage } from "./AboutElements";
import journey from '../../images/journey.png'
const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>Supply Chain and Tech</AboutHeading>
      <AboutWrapper>
        Retail in Pakistan is informal and fragmented — 91% of retail flows
        through independent ‘mom-and-pop’ stores. Because of this fragmentation,
        stores struggle to buy inventory. Today, stores spend hours every week
        dealing with dozens of different suppliers. They passively wait for
        salespeople to arrive on designated days, or close their stores (and
        lose customers!) to visit wholesalers. Even after placing orders,
        deliveries are often late, incorrect, or never arrive at all. Stores
        often learn prices at the point of delivery, and struggle to compare
        prices across suppliers. The result? Stores overpay for inventory, fail
        to get stock when they need it, and suffer lower incomes. Meanwhile,
        suppliers miss out on sales from eager customers. Mom-and-pop stores are
        the arteries of Pakistan's economy. What can we do to help them?
      </AboutWrapper>
      <AboutWrapper>
        Supply Chain and Tech Ninjacart is India's largest fresh produce supply
        chain company that is solving one of the toughest problems in the world
        through technology. We connect producers of food directly with
        retailers, restaurants, and service providers using in-house
        applications that drive end to end operations. Currently, our Supply
        Chain is equipped to move 1400 tonnes of perishables from farms to
        businesses, every day, in less than 12 hours.
      </AboutWrapper>
      <AboutHeading>Growth and development</AboutHeading>
      <AboutImage src={journey} alt="customer journey" />
    </AboutContainer>
  );
};

export default About;
