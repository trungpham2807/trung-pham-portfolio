import React from 'react'
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
// Material UI
import Avatar from '@mui/material/Avatar';
// import
import "./HomePage.css"
// images
import avatar from "../images/svg/avatar.svg"
import academy from "../images/academy.png"
import ecommerce from "../images/ecommerce.png"
import realtime from "../images/real-time.png"
const HomePage = () => {
    return (
        <div className="home-page background-black">
            <div 
            className="container"
            >
                {/* section about */}
                <div className="row home-about background-black pt-5">
                    <div className="col-8">
                        <div className="home-text-typing">
                            <h1>Hi, My name is Trung Pham
                            </h1>
                        </div>

                        <p>I'm a web developer. I am a person who's always loved technologies and creatives.</p>     
                        <p>Feel free to contact me if you want to find out more info</p>
                        <p>See more about me</p>
                        <div className="more-about">
                        <Link to="/about-me">
                        <Button className="button-color">More about me</Button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-4">
                    <Avatar className="home-avatar" src={avatar}>Tr</Avatar>
                    
                    </div>
                    
                </div>


                {/* section projects */}
                <hr/>
                <div className="home-projects 
                mt-5">
                    <div className="row">
                        <div className="col-6">
                            <div className="home-card">
                                <h1>My Projects</h1>
                                <p>Case studies for a few projects i like to show off</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Academy</h3>
                            <Link to="/projects/academy">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy} />
                                </Card>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3>E-commerce ReactJS (MERN stack)</h3>
                            <Link to="/projects/e-commerce">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecommerce} />
                                </Card>
                            </Link>

                        </div>
                        <div className="col-6">
                            <h3>Ecom Angular (MEAN stack) </h3>
                            <Link to="projects/ecom-angular">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={realtime} />
                                </Card>
                            </Link>

                        </div>
                    </div>
                    <div className="more-button">
                        <Link to="/projects">
                            <Button className="button-color">More Projects</Button>
                        </Link>
                    </div>
                    
                </div>
                <hr/>

                <div className="row home-cv background-black mt-5 pb-5">
                    <div>
                        <h1>Education background</h1>
                        <h4>Ha Noi University of Science and Technology</h4>
                        <p>Major: Mechatronics (Robotics and Automation Engineering)</p> 
                        <h4>CoderSchool</h4>
                        <p>Major: Full-stack Web Development</p>
                    </div>
                    <div className="more-button">
                        <Link to="/my-cv">
                        <Button className="button-color">More about my CV</Button>
                        </Link>
                    </div>
                </div>
            </div>

        
        </div>
        
    )
}

export default HomePage
