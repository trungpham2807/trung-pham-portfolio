import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallax from "../Components/Parallax"
import {Card, Button} from "react-bootstrap"
// Material UI
import Avatar from '@mui/material/Avatar';
// import
import "./HomePage.css"
// images
import test from "../images/test.jpg"
import line2 from "../images/line2.svg"
import line_down from "../images/line_down.svg"
import avatar from "../images/svg/avatar.svg"
import academy from "../images/academy.png"
import ecommerce from "../images/ecommerce.png"
import realtime from "../images/real-time.png"
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="container">
                <div style={{fontSize: "0"}}>
                    <img src={line2} alt=""/>
                    <img src={line_down} alt=""/>
                </div>
                {/* section about */}
                <div className="row home-about background-black">
                    <div className="col-8">
                        <div className="home-text-typing">
                            <h1>Hi, My name is Trung Pham
                            </h1>
                        </div>

                        <p>I'm a web developer. I am a person who's always loved technologies and creatives.</p>     
                        <p>Feel free to contact me if you want to find out more info</p>
                        <p>See more about me</p>
                        <div className="more-about">
                        <Button className="button-color">More about me</Button>
                        </div>
                    </div>
                    <div className="col-4">
                    <Avatar className="home-avatar" src={avatar}>Tr</Avatar>
                    
                    </div>
                    
                </div>
                <div 
                // style={{fontSize: "0"}}
                >
                    <img src={line2} alt=""/>
                    <img src={line_down} alt=""/>
                </div>
                {/* section projects */}
                <div className="home-projects background-charcoal">
                    <div className="row">
                        <div className="col-6">
                            <div className="home-card">
                                <h1>My Projects</h1>
                                <p>Case studies for a few projects i like to show off</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <Card className="home-card">
                                <Card.Img className="home-card-image" variant="top" src={academy} />
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Card className="home-card">
                                <Card.Img className="home-card-image" variant="top" src={ecommerce} />
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card className="home-card">
                                <Card.Img className="home-card-image" variant="top" src={realtime} />
                            </Card>
                        </div>
                    </div>
                    <div className="more-projects">
                        <Button className="button-color">More Projects</Button>
                    </div>
                    
                </div>
                <div style={{fontSize: "0"}}>
                    <img src={line2} alt=""/>
                    <img src={line_down} alt=""/>
                </div>
                {/* section CV */}
                <div className="row home-cv background-black">
                    <div>
                        <h1>Education background</h1>
                        <h2>Ha Noi University of Science and Technology</h2>
                        <p>Major: Mechatronics (Robotics and Automation Engineering)</p> 
                        <h2>CoderSchool</h2>
                        <p>Major: Full-stack Web Development</p>
                    </div>
                    <div className="more-cv">
                        <Button className="button-color">More about my CV</Button>
                    </div>
                </div>
                <div style={{fontSize: "0"}}>
                    <img src={line2} alt=""/>
                    <img src={line_down} alt=""/>
                </div>
            </div>

        
        </div>
        
    )
}

export default HomePage
