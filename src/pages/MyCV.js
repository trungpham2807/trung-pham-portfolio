import React from 'react'

const MyCV = () => {
    return (
        <div className="home-page background-black">
            <div className="container">
                {/* Education */}
                <div className="row background-black pb-5 pt-5">
                    <div className="col-8">
                        <h1>Education</h1>
                        <h4>Ha Noi University of Science and Technology</h4>
                        <p>Major: Mechatronics (Robotics and Automation Engineering)</p>
                        <p>Time: 9/2015-3/2020</p>
                        <p>I leant about logics, math and a part of computer science.</p>
                        <h4>CoderSchool</h4>
                        <p>Major: Full-stack development</p>
                        <p>Time: Full-time boot-camp 9/2021 - 12/2021</p>
                        <p>Learn both client and server side programming and doing many exercise and various projects</p>
                    </div>          
                </div>
                <hr/>
                {/* Education */}
                <div className="row background-black pb-5 pt-5">
                    <div className="col-8">
                        <h1>Experience</h1>
                        <h4>Vinacontrol Group</h4>
                        <p>Time: 5/2020 - 8/2020</p>
                        <p>Position: Inspector machines </p>
                        <p>Quality control of machinery and equipment both for technical and commercial</p>
                        <h4> Mechatronics Laboratory HUST</h4>
                        <p>Time: 9/2019 - 1/2020</p>
                        <p>Position: Technical Intern</p>
                        <p>Project: "Smart Agriculture Box" based on MIT's open source using Raspberry Pi, Python, Arduino, Google Cloud and Communication Protocols to solve collects datas from sensors then automatic process</p>
                        <p>Project: Connects network easily with interfaces using Python and Network Protocols</p>
                        <p>Worked with 3D printer</p>
                    </div>          
                </div>
                <hr/>
                {/* Skill and Knowledge */}
                <div className="row background-black mt-5 pb-5">
                    <h1>Skills and Knowledge</h1>
                    <h5>ReactJs</h5>
                    <p>React State with useState, fetch API CRUD with useEffect and api services, React Hook</p>
                    <h5>Redux</h5>
                    <p>State Management with Redux, Redux-thunk, Redux-dev-tools</p>
                    <h5>Html, Markdown</h5>
                    <p>Feel free to write html and readme</p>
                    <h5>Css</h5>
                    <p>Styling with Bootstrap, React-Bootstrap, MaterialUI. Learning Ant Design and Styling Component</p>
                    <h5>Javascript</h5>
                    <p>ES6 syntax</p>
                    <h5>NodeJs</h5>
                    <p>Create API endpoint</p>
                    <h5>ExpressJs</h5>
                    <p>Write middleware to pre-handle request before response (check Admin, check Authentication)</p>
                    <h5>Git/Github</h5>
                    <p></p>
                    <h5>MongoDB</h5>
                    <p></p>
                    <h5>Deploy</h5>
                    <p>Deploy with Netlify and Heroku</p>
                    <h5>Algorithms & Data Structure</h5>
                    <p>Big O, sorts, array, linked list, hash table</p>
                    <h5>SEO</h5>
                    <p>basic SEO techniques (On-page, Off-page)</p>
                    <h5>Third Parties, libraries</h5>
                    <p>Amazon Cloud, Cloudinary to storage videos, images</p>
                    <p>Socket.io for real-time</p>
                    <p>PassportJs, jsonwebtoken, crypto for authentication and authorization</p>
                    <h5>Content Management System (Admin)</h5>
                    <p>Already worked as freelancer with CMS and had user experience</p>
                </div>
                <hr/>
                {/* Certificates */}
                <div className="row background-black mt-5 pb-5">
                    <div className="col-8">
                        <h1>Certificates</h1>
                        <h4>Course: Embedded System: The University of Texas At Austin (USA)</h4>
                        <p>This course was taught by VietNam Education Foundation (VEF)</p>
                        <p>About this course, learn basic C programming, micro controller ARM and handle logic about traffic, music, signal..</p>
                        <h4>Course: Python For Everyone</h4>
                        <p>This course was taught by MindX</p>
                        <p>About this course, learn about fundamentals python and create some cool things like a game, basic web, crawl data in Python</p>
                    </div>          
                </div>
                <hr/>
                {/* Honors/Awards */}
                <div className="row background-black mt-5 pb-5">
                    <div className="col-8">
                        <h1>Honors/Awards</h1>
                        <h4>Reach round 2 VietNam - Germany Creative Startup 2017</h4>
                        <p>Project about intelligence glass can help people prevent from fogging when it rains
                        Plan with solving technical issues, market development and financial problems.
                        </p>
                    </div>          
                </div>
            </div>
        </div>

    )
}

export default MyCV
