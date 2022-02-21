import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./TrungProject.css"
import academy_1 from "../../images/acdemy_1.jpg"
import academy_2 from "../../images/academy_2.jpg"
import academy_3 from "../../images/academy_3.jpg"
import academy_4 from "../../images/academy_4.jpg"
import academy_5 from "../../images/academy_5.jpg"

const TrungAcademy = () => {
    return (
        <div className="home-page background-black">
            <div className="container">
                <div className="row background-black pb-5 pt-5">
                    <div className="col-8">
                        <h1>Summary & Motivation</h1>
                        <div className="summary">
                            <div>
                                <h1>Technologies, Frameworks and Libraries</h1>
                                <ul>
                                    <li>MERN stack</li>
                                    <li>Redux</li>
                                    <li>Ant Design</li>
                                    <li>Amazon S3</li>
                                    <li>Formidable</li>
                                    <li>Stripe</li>

                                </ul>
                            </div>
                            <div>
                                <a href="https://github.com/trungpham2807/lms">
                                    <Button className="button-color">Link Github</Button>
                                </a>
                            </div>
                        </div>


                    </div>          
                </div>
                <hr/>
                <div className="row background-black pb-5 pt-5">
                    <div className="col-8">
                        <h1>Solve Problems</h1>
                        <p>Handle video and image size from local (max size, resize) then storage to my own cloud</p>
                        <p>Handle both instructor and student routes</p>
                        <p>Handle both client side and server side</p>
                        <h1>The Result</h1>
                        <p>Basically, it has almost features learning online</p>
                        <p>Actually this project right now just for academy purpose so the most difficult part is the load capacity of many users when watching video together which i can't handle this.</p>
                    </div>          
                </div>
                <hr/>
                {/* Gallery need to be fixed responsive */}
                <div className="row background-black pb-5 pt-5">
                        <h1>Gallery</h1>
                        <div className="row projects-image">
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy_1} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy_2} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy_3} />
                                </Card>
                            </div>
                        </div>
                        <div className="row projects-image">
                            <div className="col-2">

                            </div>
                            <div className="col-5">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy_4} />
                                </Card>
                            </div>
                            <div className="col-5">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={academy_5} />
                                </Card>
                            </div>
                        </div>
                        
                                 
                </div>
            </div>
        </div>
    )
}

export default TrungAcademy
