import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallax from "../Components/Parallax"
import NavBar from "./NavBar"
import test2_compressed from "../images/test2_compressed.jpg"


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
                        imgsrc={test2_compressed} 
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
