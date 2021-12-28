import React from 'react'
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import "./AboutMe.css"
import avatar from "../images/avatar.jpg"
import peaky from "../images/peaky.jpg"
import piano from "../images/piano.jpg"
import real from "../images/real.png"
const AboutMe = () => {
    return (
        <div className="home-page background-black">
            <div 
            className="container"
            >
                {/* section about */}
                <div className="row background-black pt-5">
                    <div className="col-8">
                        <h1>Objectives</h1>
                        <div className="home-text-typing">
                            <h2>I'm a Front-end developer. 
                            </h2>
                        </div>
                        <p>Now i'm living in Ha Noi, Viet Nam, as a continued learner at a fast pace with enthusiastic, i set goals for myself:</p>
                        <h3>Short-term objectives</h3>
                        <p>Proficient in front-end programming tools, frameworks and libraries. 
                            Make code and user interface clean better, faster, secure, easily to scale and friendly for SEO.</p>
                        <h3>Long-term objectives</h3>
                        <p>Learn more about back-end programming to become master in web development. Then with little experience with marketing as freelancer and past jobs to know more about user experience,
                         can become product owner.</p>
                         <p>Here is more about my CV</p>
                    </div>

                    <div className="col-4">
                    <Avatar className="home-avatar" src={avatar}>Tr</Avatar>
                    </div>
                    <div className="more-cv">
                        <Link to="/my-cv">
                        <Button className="button-color">Get more my CV</Button>
                        </Link>
                    </div>
                    
                </div>
                <hr/>
                <div className="row background-black mt-5 pb-5">
                    <div>
                        <h1>My journey</h1>
                      <p>The journey to find my passion which is website is a long one.</p>
                      <p>When i first took the university entrance exam, perhaps the concept of choosing a suitable major was something quite far away because there was no experience at all, all i know is i'm pretty good at Math and have a curiosity about repairing computer since childhood, that's why i choose Robotics major. </p>
                      <p>Then in my university and my past jobs spending time working with machines, but something went wrong, feel empty and wonder what to do for a long times</p>
                      <p>I watched Steve Jobs's speech and there was one sentence that i will always remember: "If today were my last day of my life, would i want to do what i am about to do today? If they answer was "No" too many days in a row, i know i need to change something. And i decided to quit my past job then register school for coding boot-camp without hesitating </p>
                      <p>Working with websites is so fascinating where i can spend day after day doing this without boring and make a bunch of new things, it's not just working with machines, it's about business and how interacts with users and interacts with beautiful things </p>
                      <p>So i'm here today in my journey.</p>
                    </div>
                    <div class="stepper-wrapper">
                        <div class="stepper-item completed">
                            <div class="step-counter">
                                <img src="https://image.exam24h.com/public/exam24h-wiki/university/9cd088c0c11dd4f7ca3e916de7e24e32.JPEG" alt="" width="100%"/>
                            </div>
                            <div class="step-name">Ha Noi University of Science and Technology</div>
                        </div>
                        <div class="stepper-item completed">
                            <div class="step-counter">
                                <img src="https://i.pinimg.com/736x/92/43/b1/9243b10aa7605af02c83104e67cbac2b.jpg" alt="" width="100%"/>
                            </div>
                            <div class="step-name">VNC Group</div>
                        </div>
                        <div class="stepper-item completed">
                            <div class="step-counter">
                            <img src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/359/original/logo-cs-01-01.png" width="100%" alt=""/>
                            </div>
                            <div class="step-name">CoderSchool</div>
                        </div>
                        <div class="stepper-item completed">
                            <div class="step-counter">
                                <img src="https://itproger.com/img/tests/github.svg" alt="" width="100%"/>
                            </div>
                            <div class="step-name">Front-end Developer</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row background-black mt-5 pb-5">
                    <div>
                        <h1>Interests</h1>
                      <p>When i'm not in front of my computer writing code, 
                    honestly i spent a lot of time on football but due to the covid epidemic,
                    no play football in real life, no hangout and travel as well, it's kind of boring, right?
                    But fortunately, tv-series is also my hobby and you know what, "Peaky Blinder" is one of my favorite series. 
                    Last but not least, music is a part of my life, listening every single day with various kind of genres and trying to play organ for few months is memorable experience and make my life more colorful.</p>
                    </div>
                    <div className="interest-image">
                        <Avatar className="home-avatar" src={real}>Tr</Avatar>
                        <Avatar className="home-avatar" src={peaky}>Tr</Avatar>
                        <Avatar className="home-avatar" src={piano}>Tr</Avatar>
                    </div>

                </div>
            </div>

        
        </div>
    )
}

export default AboutMe
