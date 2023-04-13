import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './videoSection.css'

class videoSection extends Component{
    render(){
         return(
           <section className="video-section">
               <video loop autoPlay muted className="bg-video">
                    <source src="images/typing-video.mp4"></source>
               </video>
               <div className="container">
                   <Row>
                       <Col md="6" className="d-block mx-auto serach-column">
                           <h4><span>Search</span> & Choose your Dream University</h4>
                           <form action="#">
                               <div className="form-group">
                                   <label>Select University Type</label>
                                   <select className="form-control">
                                       <option>Public</option>
                                   </select>
                               </div>
                               <div className="form-group">
                                   <label>Select University</label>
                                   <select className="form-control">
                                       <option>Punjab University</option>
                                   </select>
                               </div>
                               <div className="form-group mb-2r">
                                   <label>Select Program</label>
                                   <select className="form-control">
                                       <option>Undergraduate</option>
                                       <option>Graduate</option>
                                   </select>
                               </div>
                               <div className="form-group">
                                  <button className="btn btn-block mt-3">Search</button>
                               </div>
                           </form>
                       </Col>
                   </Row>
               </div>
            </section>
         )
        }
    }
export default videoSection;