import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">DOC_CITY</Navbar.Brand>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">  
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/appoinment#appoinment">Get Appoinment</Nav.Link>
                <Nav.Link as={HashLink} to="/departments#departments">Our Departments</Nav.Link>
                <Nav.Link as={HashLink} to="/registration#register">Sign Up</Nav.Link>
                { user?.email ?
                    <Button onClick={logOut} variant="light">Log Out</Button> :
                     <Nav.Link as={HashLink} to="/login#login">Login</Nav.Link>
                } 
                <Navbar.Text className="mx-3">
                    Signed in as: <a href="#login">{user && user.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;