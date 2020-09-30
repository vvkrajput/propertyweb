import React from 'react'
import contacttexture from './images/contact texture.png'
import map from './images/map.gif'
import Contactform from './contactform'
import{Row,Col}from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="bgcontact">
        <Row>
        <Col lg={12} xs={12}> 
        <br/>
            <h1 className="contact">CONTACT</h1>
        </Col>
        </Row>

        <Row>

                    <Col lg={6} xs={12} className="map">
                        <img src={map}></img>
                        <br/><br/><br/>
                        <Row>
                        
                            <Col lg={3} xs={12} className="add2">
                            <p><b>
                            HEAD OFFICE<br/>
                            Street Address<br/>
                            City Name<br/>
                            Street12345
                            </b></p>
                            </Col>
                    <Col lg={3} xs={12} className="add2">
                        <p>
                        Near Aashima Mall<br/>
                        Bhopal<br/>
                        info@propertyask.com
                        </p>
                    </Col>
                    </Row>
                    
                    </Col>


                    <Col lg={6} xs={12} className="form">

                        <Contactform />

                        
                    </Col>
                </Row>



            </div>
            
    )
}
