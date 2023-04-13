import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Navbar,Nav} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css'

class primaryNav extends Component{
    render(){
         return(
            <div className="navbar-main">
                <div className="container-fluid">
                    <Row>
                      <Col>
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <Nav.Link href="#home">Gallery</Nav.Link>
                                <Nav.Link href="#home">Admissions</Nav.Link>
                                <Nav.Link href="#home">Scholarships</Nav.Link>
                                <Nav.Link href="#home">Contact Us</Nav.Link>
                                <Nav.Link href="#link">FaQs</Nav.Link>
                                <Nav.Link href="#link">Register</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                       </Col>
                    </Row>
                </div>
            </div>
        );
    }   
}

export default primaryNav;