import '../App.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import Text from './text.js'
import Red from './red';
import Yellow from './yellow';
import { AudioPlayerProvider } from "react-use-audio-player"


const Landing = () => {
    return (     
        <React.Fragment>
            <AliceCarousel autoPlay autoPlayInterval="10000" className="img">
                <img src={image1} className="sliderimg" /> 
                <img src={image2} className="sliderimg" />
                <img src={image3} className="sliderimg" />   
            </AliceCarousel>
            <Text />
            <AudioPlayerProvider>
                <Red file="sample.mp3" />
            </AudioPlayerProvider>
            <Yellow />
        </React.Fragment> 
    );
};

export default Landing;
