import React from "react";
import Nav from 'react-bootstrap/Nav'


function Menu() {
    //const handleSelect = eventKey => alert(`selected ${eventKey}`);

    return (
        <Nav activeKey="1" className="navbar navbar-expand-lg navbar-light bg-dark">
            <Nav.Item>
                <Nav.Link eventKey="1" href="/home">
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href ="/jobs"  title="Item">
                    Jobs
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href ="/about"  title="Item">
                    About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href ="/contact"  title="Item">
                    Contact
                </Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default Menu;