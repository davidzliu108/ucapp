import React from 'react';
import './Navbar.css';
import {Nav, Navbar, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Navigation () {
    return (

    <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to='/' >
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/reddit'>
                        <Nav.Link>Forum</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/progress'>
                        <Nav.Link>Progress</Nav.Link>
                    </LinkContainer>                    
                    <LinkContainer to='/map'>
                        <Nav.Link>Map</Nav.Link>
                    </LinkContainer>                      
                    <LinkContainer to='/more'>
                        <Nav.Link>More</Nav.Link>
                    </LinkContainer>  
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </Container>

    )
}

export default Navigation;