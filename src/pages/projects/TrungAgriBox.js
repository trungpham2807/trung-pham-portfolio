import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./TrungProject.css"
import agribox from "../../images/agribox.png"
import agri_1 from "../../images/agri_1.png"
import agri_2 from "../../images/agri_2.png"
import agri_3 from "../../images/agri_3.png"


const TrungAgriBox = () => {
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
                                    <li>Network Protocol: Https, MQTT, TCP/IP</li>
                                    <li>Communication protocol: UART, I2C,..</li>
                                    <li>Google Cloud, FireBase</li>
                                </ul>
                            </div>

                        </div>


                    </div>
         
                </div>
                <hr/>
                <div className="row background-black pb-5 pt-5">
                    <div className="col-8">
                        <h1>Features & Solve Problems</h1>
                        <div>
                            <ul>
                                <li> Control </li>
                               

                            </ul>





                        </div>
                    </div>          
                </div>
                <hr/>
                {/* Gallery need to be fixed responsive and optimize by create list array data */}
                <div className="row background-black pb-5 pt-5">
                        <h1>Gallery</h1>
                        <div className="row projects-image">
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={agribox} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={agri_1} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={agri_2} />
                                </Card>
                            </div>
                        </div>
                        <div className="row projects-image">
                            <div className="col-2">

                            </div>
                        </div>
                        
                                 
                </div>
            </div>
        </div>
    )
}

export default TrungAgriBox
