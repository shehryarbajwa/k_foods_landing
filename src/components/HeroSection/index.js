import React, {useState} from 'react'
import Video from '../../videos/Video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Button from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
            <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Mandi is a B2B technology enabled food distribution platform</HeroH1>
                <HeroP>
                منڈی کسانوں کو سیدھا خریداروں ریسٹورنٹوں اور سہولت کاروں کے ساتھ میلا کر پاکستان کے کسانوں کے ایک اہم مسئلے کو حل کرنے کی کوشش کر رہی ہے۔

                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/sell" onMouseEnter={hover} onMouseLeave={hover} primary="true" dark="true" big="true">
                    منڈی پر فروخت
 {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection;
