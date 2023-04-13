import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import './Admissions.css';

class Admissions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showList: false
        }
    }

    handleSearch = () => {
        this.setState({
            showList: true
        })
    }
    
    render() {
        let showList
        if(this.state.showList){
            showList = <AdmissionList/>
        }
        return (
            <div className="admission-section">
                <div className="container">
                    <Row>
                        <Col>
                           <form className="row justify-content-center">
                               <div className="form-group col-md-4">
                                   <label>Select City</label>
                                   <select className="form-control">
                                       <option value="mlt">Multan</option>
                                       <option value="lhr">Lahore</option>
                                       <option value="isl">Islamabad</option>
                                   </select>
                               </div>
                               <div className="form-group col-md-4">
                                   <label>Select Institute</label>
                                   <select className="form-control">
                                       <option value="clg">College</option>
                                       <option value="uni">University</option>
                                   </select>
                               </div>
                               <div className="form-group col-md-2 d-flex align-items-end">
                                   <button type="button" className="btn btn-primary mt-2" onClick={this.handleSearch}>Search</button>
                               </div>
                           </form>
                           {showList}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

class AdmissionList extends Component{
    render() {
        return(
            <div className="admission-list">
                <h1>Admission List</h1>
            </div>
        )
    }
}

export default Admissions
