import React from 'react'
import Footer from './Footer';
import Contact from './contact';


import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import whitelogo from './images/whitelogo.png';
import locationfirsticon from './images/location.png'
import telephonesecondicon from './images/phone.png';
import mailthirdicon from './images/mail.png';
import dummyimage from './images/dummy.jpg'
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
export default function WHATNEW() {
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

        <div className="container whatnewimages">
        <Row>

          <Col className="firstwhatsnew" lg={6}>
            <img src={dummyimage}></img>
              </Col>

            <Col className="firstwhatsnew" lg={6}>
            <img src={dummyimage}></img>
              
            </Col>
        </Row>
        </div>
        <Footer/>

            
        </div>
    )
}
