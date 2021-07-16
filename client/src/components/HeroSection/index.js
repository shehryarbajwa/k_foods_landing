import React, { useState } from "react";
import Video from "../../videos/Video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Button from "../ButtonElement";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Mandi is a B2B technology enabled food distribution platform
        </HeroH1>
        <HeroP>
          منڈی کسانوں کو سیدھا خریداروں ریسٹورنٹوں اور سہولت کاروں کے ساتھ ملا
          کر پاکستان کے کسانوں اور سہولت کاروں کے ایک اہم مسئلے کو حل کر رہی ہے۔
        </HeroP>
        <HeroBtnWrapper >
          <Button
            onMouseEnter={hover}
            onMouseLeave={hover}
            primary="true"
            big="true"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/sell";
            }}
          >
            منڈی پر فروخت
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
