import React from 'react'
import Footer from './Footer';
import Contact from './contact';




import image from './images/listingleftportionimage.jpg'
import Likeicon from './images/likeicon.png';
import DisLikeicon from './images/dislikeicon.png';
import whatsappicon from './images/whatsappicon.png';
import facebookicon from './images/facebook.png';
import mailicon from './images/mailicon.png';

import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import whitelogo from './images/whitelogo.png';
import locationfirsticon from './images/location.png'
import telephonesecondicon from './images/phone.png';
import mailthirdicon from './images/mail.png';
import dummyimage from './images/dummy.jpg';
import image2 from './images/imagelistint2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import coverimagepropertydetails from './images/propertydetailsimage.jpg';
import secondimagepropertydetails from './images/ndimagepropertydetails.jpg'
import propertydetailsimage from './images/galleryimage1propertydetails.jpg';
import kitchenpropertydetails from './images/kitchenpropertydetails.jpg';
import propertydetailsmap from './images/propertydetailsmapimage.png';
import Ownerdetails from './ownerdetails';
import Interestedform from './Interstedproperty';
import image11 from './images/image11.jpg';

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
import ownerdetails from './ownerdetails';
export default function Propertydetails() {
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
        <Nav.Link href="#pricing"><b><i class="fa fa-envelope-o" aria-hidden="true"></i> info@propertyask.com</b></Nav.Link>
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
    <div className="Listing">
    <div className="HeadListing">
        <h1>LISTING</h1>
    </div>
</div>

<img src={coverimagepropertydetails} width="1349px" height="700px">

</img>

<Row>
  <Col lg={8} xs={12}>

  </Col>
  
  <Col lg={4} xs={12}>
    
  </Col>
</Row>


<Row className="Bodypropertydetails">
  <Col lg={8} xs={12}>
    <Row>
      <Col lg={12} xs={12}>
        <h6><br/>2 BHK 800 sq.ft Residential Apartment for sale in Kolar Road bhopal </h6>
      </Col>

    </Row>

    <Row>
      <Col lg={2} xs={6}>
        <h6>Sale Type</h6>
        <h3>Resale</h3>
      </Col>


      <Col lg={2} xs={6}>
        <h6>Built Up Area</h6>
        <h3>800 sq.ft</h3>
      </Col>


      <Col lg={2} xs={6}>
        <h6>Bedroom</h6>
        <h3>3</h3>
      </Col>


      <Col lg={2} xs={6}>
        <h6>Share</h6>
        <Link to="#"><img src={whatsappicon} height="25px"></img> </Link> 
       <Link to="#"><img src={facebookicon} height="22px"></img> </Link>    
        <Link to="#"><img src={mailicon } height="28px"></img> </Link>
        </Col>
    

      <Col lg={3} xs={6}>
        <h6>Information Useful</h6>
        <Link to="#"> <img src={Likeicon} height="30px"></img>  </Link> 
       <Link to="#"> <img src={DisLikeicon} height="30px"></img></Link>
      </Col>


      <Col lg={1} xs={6}>
      </Col>
      </Row>
      <hr className="borderpropertydetails"></hr>

    <Row>
      <Col lg={9} xs={12}>
        <h3>Features</h3>
        <hr align="left" className="featurescolorgreen"/>
      </Col>
      <Col lg={3} xs={12}>
        <h6>view Similar Properties</h6>
      </Col>
    </Row>

    <Row>
      <Col lg={1} xs={6}>
        <h6>Balcony</h6>
        <br></br>
        <h6>1</h6>
      </Col>
      
      <Col lg={1} xs={6}>
      <h6>Floor</h6>
        <br></br>
        <h6>1</h6>
      </Col>
      
      <Col lg={3} xs={6}>
      <h6>Price Negoitable</h6>
        <br></br>
        <h6>Yes</h6>
      </Col>
      
      <Col lg={2} xs={6}>
        <h6>Parking</h6>
        <br></br>
        <h6>1</h6>

        
      </Col>
      
      <Col lg={2} xs={6}>
        <h6>Ownership Type</h6>
        <br></br>
        <h6>Freehold</h6>
      </Col>
    </Row>
    <hr className="borderpropertydetails"></hr>
    <div className="aboutpropertydetails">
    <div id="particularproperty">
    <Row>
      <Col lg={4} xs={12}>
      <h3>ABout Property</h3>
      <hr align="left" className="featurescolorgreen"/>


      </Col>

      <Col lg={4} xs={12}>
     <h6> 134 People Has Viewed this property</h6>

      </Col>

      <Col lg={4} xs={12}>
     <h6> 134 Time this property has been searched</h6>

      </Col>

      </Row>
      

      <Row className="addresspropertydetails">
        <Col lg={12} xs={12}>
          <h6>Opposite Bima Kunj Kolar Road.Next To Main Road.Road facing Balcony.Urgent selling Only cash</h6>
          <br></br>
          <h6>This Information Has Been Provided have been collected from Publicly,available sources,and is yet to veified as RERA<br></br>
          Guidelines</h6>
        </Col>
      </Row>
      </div>
      <div id="particularproperty">
      <Row >
      <Col lg={12} xs={12}>
        <h3>Social Ammenities</h3>
        <hr align="left" className="featurescolorgreen"/>
        </Col>
      </Row>
      
      <Row>
      <Col lg={12} xs={12}>
      <h6>Maintenance</h6>

      </Col>

      </Row>
      </div>


      <div id="particularproperty">
      <Row >
      <Col lg={12} xs={12}>
        <h3>Gallery</h3>
        <hr align="left" className="featurescolorgreen"/>
        </Col>
      </Row>

      <Row>
      <Col lg={12} xs={12}>
      <h6>Photos</h6>

      </Col>

      </Row>

      <Row>
        <Col lg={6} xs={12}>
        <img src={propertydetailsimage} width="100%" height="400px"></img>

        </Col>

        <Col lg={4} xs={12}>
        <Row className="firstimageproperty">
          <Col lg={12} xs={12}>
          <img src={kitchenpropertydetails} width="100%" height="200px"></img>

          </Col>
        </Row>

        <Row>
          <Col lg={12} xs={12}>
          <img src={secondimagepropertydetails} width="100%" height="200px"></img>

          </Col>
        </Row>
        </Col>
        </Row>
        <div id="particularproperty">
      <Row>
          <Col lg={12} xs={12}>
          <h3>Location</h3>
        <hr align="left" className="featurescolorgreen"/>
        <img src={propertydetailsmap} width="100%" >

        </img>

          </Col>
      </Row>
</div>
        
        
      
      
      </div>
</div>
      
    
    
  </Col>

  
  <Col lg={4}>

  <Row>
    <Col lg={12} xs={12} className="sideporperty11">
    <h3>11 Lakh</h3>
    <button className="propertydetailsbutton">Contact Owner</button>
    <br/>
    </Col>
  </Row>


  <Row>
    <Col lg={12} xs={12}>
    

  {/* <img src={image} width="169px" height="126px"></img> */}
  <Interestedform/>


    </Col>
      </Row>
    
   <Row>
    <Col lg={12} xs={12}>
    

  {/* <img src={image} width="169px" height="126px"></img> */}
  <Ownerdetails/>
  

    </Col>
      </Row>

    

  <Row>
    <Col lg={12} xs={12}>
    <div className="text img-thumbnail thumbnailnext">
    <h6>Similar Projects</h6>
    <hr align="left" className="featurescolorgreen"/>

  <img src={image11} width="180px" height="150px"></img>
  <br/>

  <div className="smallpropertydescriptiondetails">
  <h4>3 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  </div>

    </Col>
      </Row>


      <Row>
    <Col lg={12} xs={12}>
    <div className="text img-thumbnail thumbnailnext">
    <h6>Similar Properties</h6>
    <hr align="left" className="featurescolorgreen"/>

  <img src={image} width="180px" height="150px"></img>
  <br/>
  <h4>3 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>

    </Col>
      </Row>


  </Col>
</Row>

  




<Contact/>
<Footer/>
          </div>
    )
}