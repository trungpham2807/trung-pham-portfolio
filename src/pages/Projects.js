import React from 'react'
import {Card, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import { Pagination } from '@mui/material';
import academy from "../images/academy.png"
import ecommerce from "../images/ecommerce.png"
import realtime from "../images/real-time.png"
import "./Projects.css"
const Projects = () => {
    return (
        <div className="background-black">
             <div className="container ">
                <div className="row background-black pb-5 pt-5">
                    <h1>Projects</h1>
                    <p>I've worked on a range of accessible websites and web-apps</p>
                    <p>Below are some case studies for my projects</p>
                    <div className="row ">
                        <div className="col-6">
                            <h3>E-commerce React</h3>
                            <Link to="/projects/e-commerce">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecommerce} />
                                </Card>
                            </Link>
                            <p>A website selling clothes</p>

                        </div>
                        <div className="col-6">
                            <h3>Academy</h3>
                            <Link to="/projects/academy">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy} />
                                </Card>
                            </Link>
                            <p>A website for learning online and marketplace</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3>Ecom-Angular (MEAN)</h3>
                            <Link to="/projects/ecom-angular">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={realtime} />
                                </Card>
                            </Link>
                            <p>A website for selling with Angular</p>
                        </div>
                        <div className="col-6">                       
                        </div>
                    </div>
                    <div className="projects-pagination">
                        <Pagination variant="outlined" count={5} color="primary" />    
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Projects
