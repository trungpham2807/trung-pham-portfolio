import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallax from "../Components/Parallax"
import NavBar from "./NavBar"
import test2 from "../images/test2.jpg"


import "./Slider.css"
const Slider = () => {
    return (
        <div className="container slider">
                <div className="nav-bar-wrapper">
                    <NavBar />
                </div>
                <div className="slider-wrapper">
                    <ParallaxProvider>
                        <Parallax 
                        imgsrc={test2} 
                        height="700px" 
                        opacity="0.5"
                        >
                        </Parallax>
                    </ParallaxProvider>       
                </div>
               
        </div>
    )
}

export default Slider
