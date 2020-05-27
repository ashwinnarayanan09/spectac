import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const title = {
    color:'pink',
    textDecoration:'none'
};


function Menu() {
    //const handleSelect = eventKey => alert(`selected ${eventKey}`);

    return (
        <Navbar  expand="lg" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <Navbar.Brand href="#home" style={title}>SPECTAC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto" >
                    <Nav.Link href="/home" style={title}>Home</Nav.Link>
                    <Nav.Link href="/jobs" style={title}>Jobs</Nav.Link>
                    <Nav.Link href="/about" style={title}>About</Nav.Link>
                    <Nav.Link href="/contact" style={title}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
           {/* <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>*/}
        </Navbar>
    );
}

export default Menu;