import React from 'react'
import "./NavBar.css"
import {Nav, Navbar, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="nav-bar">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                <Link to="/">
                    <Navbar.Brand className="nav-brand">Trung Pham</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Link className="nav-text" to="/">Home</Link>
                    <Link className="nav-text" to="/about-me">About me</Link>
                    <Link className="nav-text" to="/projects">Projects</Link>
                    <Link className="nav-text" to="/my-cv">My CV</Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
       
    )
}

export default NavBar
