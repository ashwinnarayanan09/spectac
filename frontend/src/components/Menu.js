import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Menu() {
    //const handleSelect = eventKey => alert(`selected ${eventKey}`);

    return (
        <Navbar  expand="lg" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <Navbar.Brand href="#home" style={{color: 'white', textDecoration: 'none'}}>SPECTAC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto" >
                    <Nav.Link href="/home" style={{color: 'white', textDecoration: 'none'}}>Home</Nav.Link>
                    <Nav.Link href="/jobs" style={{color: 'white', textDecoration: 'none'}}>Jobs</Nav.Link>
                    <Nav.Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Nav.Link>
                    <Nav.Link href="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;