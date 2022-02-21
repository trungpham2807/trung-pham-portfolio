import React from 'react'
import "./Footer.css"
import "../pages/HomePage.css"
import line2 from "../images/line2.svg"
import line_down from "../images/line_down.svg"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Footer = () => {
    return (
        <div className="footer">
            <div className="row footer-container background-charcoal">
                <div className="col-6">
                    <h1>Get in touch!</h1>
                    <p>Feel free to send me an email at trungpq287@gmail.com or find me on social media whether it be about my work, new opportunities or just natter.</p>
                    <hr/>
                    <p>
                        This website code by ReactJs. Copyright by Trung Pham, 2021
                    </p>
                </div>


                <div className="col-6 quick-links">
                    <h1>Quick Links</h1>
                    <ul>
                        <div className="footer-icon">
                            <EmailIcon />
                            <li className="footer-icon-text">trungpq287@gmail.com</li>
                        </div>
                        <a href="https://github.com/trungpham2807">
                            <div className="footer-icon">
                                <GitHubIcon/>
                                <li className="footer-icon-text">Github</li>        
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/trung-ph%E1%BA%A1m-83968a226/">
                        <div className="footer-icon">   
                                <LinkedInIcon />
                                <li className="footer-icon-text">LinkedIn</li>
                        </div>
                        </a>
                        <a href="https://www.dropbox.com/s/40se7p8mv4zvj11/Pham_Quoc_Trung_Front_End_Web.pdf?dl=0">
                        <div className="footer-icon">
                                <AttachFileIcon/>
                                <li className="footer-icon-text">CV/Resume</li>
                        </div>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Footer
