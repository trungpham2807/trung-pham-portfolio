import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./TrungProject.css"
import ecom_1 from "../../images/ecom_1.png"
import ecom_2 from "../../images/ecom_2.png"
import ecom_3 from "../../images/ecom_3.png"
import ecom_4 from "../../images/ecom_4.png"
import ecom_5 from "../../images/ecom_5.png"

const TrungEcommerce = () => {
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
                                    <li>Styling Component</li>
                                    <li>Stripe</li>
                                </ul>
                            </div>
                            <div>
                                <a href="https://github.com/trungpham2807/E-commerce-React-App">
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
                    </div>          
                </div>
                <hr/>
                {/* Gallery need to be fixed responsive and optimize by create list array data */}
                <div className="row background-black pb-5 pt-5">
                        <h1>Gallery</h1>
                        <div className="row projects-image">
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecom_1} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecom_2} />
                                </Card>
                            </div>
                            <div className="col-3">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecom_3} />
                                </Card>
                            </div>
                        </div>
                        <div className="row projects-image">
                            <div className="col-2">

                            </div>
                            <div className="col-5">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecom_4} />
                                </Card>
                            </div>
                            <div className="col-5">
                                <Card className="home-card">
                                    <Card.Img className="home-card-image" variant="top" src={ecom_5} />
                                </Card>
                            </div>
                        </div>
                        
                                 
                </div>
            </div>
        </div>
    )
}

export default TrungEcommerce
