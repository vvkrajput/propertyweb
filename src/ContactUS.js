import React from 'react'
import Footer from './Footer';
import Contact from './contact';
import generalenquiries from './images/1 .1.jpg'
import emailalerts from './images/1.2.jpg'
import ouroffices from './images/1.3.jpg'


import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import whitelogo from './images/whitelogo.png';
import locationfirsticon from './images/location.png'
import telephonesecondicon from './images/phone.png';
import mailthirdicon from './images/mail.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavDropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col
  }from 'react-bootstrap';
  



 function ContactUS() {
    return (
        <div>


<div className="row">
    <div className="col-sm-12">
    <Navbar collapseOnSelect expand="lg" bg="#000000" variant="dark" className="nav1">
    <Navbar.Brand href="#home"><b><i class="fa fa-phone-square" aria-hidden="true"></i> MUMBAI: +91-8448455532</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#pricing"><b>BHOPAL: +91-8448455596 </b></Nav.Link>
        <Nav.Link href="#pricing"><b><i class="fa fa-envelope-o" aria-hidden="true"></i> #info@propertyask.com</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
    </div>
      <div className="row">
      <div className="col-sm-12">
        {/* <div className="jumbotron-fluid"> */}
    
  
        <Navbar collapseOnSelect expand="lg" bg="#676767" className="nav2" variant="dark" id="navabout">
      <Navbar.Brand href="#home"> {<img src={whitelogo} className="navlogo"></img>}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navbar-right">
          <Link to="/"><b className="rightLink">Home /</b></Link>
          <Link to="/Listing"><b className="rightLink">Listings /</b></Link>
          <Link to="/AboutUS"><b className="rightLink">About Us /</b></Link>
          <Link to="/Whatnew"><b className="rightLink"> What's New /</b></Link>
          <Link to ="/ContactUs"><b className="rightLink">Contact Us </b></Link>
        </Nav>
              </Navbar.Collapse>
    </Navbar>
      
          </div>
          </div>


<Row className="contactBg">
  <Col lg={12} xs={12} className="HeadContact">
    <h1>CONTACT US</h1>
  </Col>
</Row>


            <Row className="firstinformation">


                <Col lg={1} xs={12}>

                </Col>

                <Col lg={3} xs={12} className="firstlocation contacticon">
                    <img src={locationfirsticon}></img>
                    <h5 className="textfirstlocation"> Near Aashima Mall Road<br/>
                    Bhopal</h5>

                </Col>

                <Col lg={3} xs={12} className="secondtelephone contacticon">
                    <img src={telephonesecondicon}></img>
                    <h5 className="textfirstlocation"> +(11)123 456 789<br/>
                    +(11)123 456 789</h5>

                </Col>

                <Col lg={3} xs={12} className="thirdmail contacticon">
                    <img src={mailthirdicon}></img>
                    <h5 className="textfirstlocation" id="infoemail">info@propertyask.com<br/>
                    info@propertycheetah.com</h5>

                </Col>

                <Col lg={1} xs={12}>
                    
                </Col>

            
            </Row>

            <div className="buypicimage">
                <br/>
                <h1>WE'D LOVE TO HEAR FROM YOU.<br></br>
                HERE'S HOW TO GET IN TOUCH.</h1>    
            </div>

            <div>
                <Row className="threeimages">
                    <Col lg={3} xs={12} className="generalenquiries images-three">
                        <img src={generalenquiries}></img>
                        <h4> GENERAL ENQUERIES</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>

                    </Col>
                    <Col lg={1} xs={12}>

                    </Col>

                        <Col lg={3} xs={12} className="emailalerts images-three">
                        <img src={emailalerts}></img>
                        <h4> OUR OFFICES</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>                        
                        </Col>

                        <Col lg={1} xs={12}>
                        
                    </Col>

                        <Col lg={3} xs={12} className="ouroffices images-three">
                        <img src={ouroffices}></img>
                        <h4> EMAIL ALERTS</h4>
                        <h6>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</h6>
                        </Col>

                        <Col lg={2} xs={12}>
                        
                        </Col>

                </Row>
            </div>

            <Contact/>
            <Footer/>
            
        </div>
    )
}export default ContactUS;
