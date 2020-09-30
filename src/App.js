import React from 'react';
import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import image2 from './images/property-asknew_22.gif';
import image1 from './images/banner_image.gif';
import image3 from './images/logo.gif';

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

import './App.css';
import Listing from './Listing';
import Jumbotron from 'react-bootstrap/Jumbotron'
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
import WHATNEW from './Whatnew';
import Cards from './cards'
import Latestproperties from './Latestproperties';
import whitelogo from './images/whitelogo.png';
import Advancesearch from './Advancesearch';
import pattern from './images/seriousaboutbuyingpattern.png';
import Houseimage from './images/House.jpg';

import flat from './images/02 (1).png'
import Contact from './contact';
import Footer from './Footer';

function App(){
  return (
    //<div className="container-fluid">
    <div>
    <div className="row">
    <div className="col-sm-12">
    

  
    <Navbar collapseOnSelect expand="lg" bg="#000000" variant="dark" className="nav1">
    <Navbar.Brand href="#home" id="mumbai"><b><i class="fa fa-phone-square" aria-hidden="true"></i> MUMBAI: +91-8448455532</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#pricing" className="info"><b>BHOPAL: +91-8448455596 </b></Nav.Link>
        <Nav.Link href="#pricing" className="info"><b><i class="fa fa-envelope-o" aria-hidden="true"></i> info@propertyask.com</b></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
    </div>
    <div className="row">
    <div className="col-sm-12">
      <div className="jumbotron-fluid">
      <div className="rd-navbar-inner">
      <div className="rd-navbar-panel">
      <div class="rd-navbar-nav-wrap "> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navhome" className="nav2">
      <Navbar.Brand href="#home"> {<img src={whitelogo} className="navlogo"></img>}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navbar-right">
          <Link to="/"><b className="rightLink">Home /</b></Link>
          <Link to="/Listing"><b className="rightLink">Listings /</b></Link>
          <Link to="/AboutUS"><b className="rightLink">About Us /</b></Link>
          <Link to="/Whatnew"><b className="rightLink"> What's New /</b></Link>
          <Link to="/ContactUs"><b className="rightLink">Contact Us </b></Link>
        </Nav>
              </Navbar.Collapse>
    </Navbar>
        </div>
        </div>
        </div>




      <Row>
      <Col xs={6} lg={12}>
        <h3 id="capsheading">LET'S FIND A<br/>
         PROPERTY THAT'S <br/>
        PERFECT FOR YOU
        </h3>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
        <h3 id="smallheading">BASED IN MUMBAI & BHOPAL</h3>
        </Col>
        </Row>
        {/* <hr size="5"/> */}
        {/* <img src={image2}className="img-fluid"/> */}

        
        
      </div>
      </div>
    </div>
    <Advancesearch />


<div className="container-fluid forbuying">
      <Row>
      <Col lg={2}></Col>
          <Col lg={4} sm={12}>
            <div className="heading">
              
              <h3>SERIOUS ABOUT <br/>
                BUYING ? </h3>

                <br></br>
                <br></br>


                  
            </div>

            <div className="seriousaboutpara">
            <h5>containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h5>
            <br></br>
            <h5>containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h5>
          
            <br></br>
            <h3>OUR SERVISES</h3>

            <ul id="services" type="none">
                    <b><li>Buy Sell</li></b>
                    <b><li>Property Management</li></b>
                    <b><li>Commercial Property</li></b>
                  </ul>
                  </div>
                  <div className="learnmore">
                 <Link to="AboutUS"><b><h4 id="LearnMore">——  LEARN MORE</h4></b></Link>
          </div>  
          </Col>
          <Col lg={4} xs={12}>
          <img src={Houseimage} className="Houseimage"></img>

          </Col>


        <Col lg={2}></Col>
        
</Row>
      </div>
<br/><br/>
<Cards />


   <Latestproperties />
   <br></br>
   <br></br>

   <Contact />
   
    <Footer/>

   </div>

  
    
  );

}

export default App;
