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
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            big='true'
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://mandiv1-env.eba-mhqg9vpc.ap-south-1.elasticbeanstalk.com/sell";
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
