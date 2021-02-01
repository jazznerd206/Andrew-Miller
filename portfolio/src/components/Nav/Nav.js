import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css';

function Navigation() {
    return (
        <Navbar variant="dark" expand="lg">
            <Navbar.Toggle />
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Navigation;
