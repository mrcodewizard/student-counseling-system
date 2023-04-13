import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import './Scholarship.css'

function Scholarship() {
    return (
        <div className="scholarship-section">
            <h2>Recent <span>Scholarships</span></h2>
            <div className="container">
                <Row>
                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-one.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Lahore</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-two.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Islamabad</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-three.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Multan</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-one.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Lahore</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-two.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Islamabad</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="#">
                            <img src="images/scholarship-three.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarship in Multan</h3>
                            </div>
                        </a>
                    </Col>

                    
                    
                </Row>
            </div>
        </div>
    )
}
export default Scholarship
