import React,{useState,useEffect} from 'react'
import Footer from './Footer';
import Contact from './contact';
import image100 from './images/image100.jpg';
import image99 from './images/image99.jpg';
import image98 from './images/image98.jpg';
import image97 from './images/image97.jpg';
import Pagination from './Pagination.js';

// const listing = [{
//   1
// },{
//   2
// }]


import image from './images/listingleftportionimage.jpg'
import axios from 'axios';

import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import whitelogo from './images/whitelogo.png';
import locationfirsticon from './images/location.png'
import telephonesecondicon from './images/phone.png';
import mailthirdicon from './images/mail.png';
import dummyimage from './images/dummy.jpg';
import image2 from './images/imagelistint2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image10 from './images/image10.jpg';
import image9 from './images/image9.jpg'
import image11 from './images/image11.jpg';
import image6 from './images/image6.jpg';
import image14 from './images/image14.jpg';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap' 
import Advancesearch from './Advancesearch';

// import Pagination from 'react-bootstrap/Pagination'
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

export default function Listing() {
// ayerData=async()=>{
//     try{
//       const data=await axios.get(
//         "https://nba-players.herokuapp.com/players-stats"
//       );
//       console.log(data)
//       }
//       catch(e){
//         console.log(e);
//       }
//   const [players,setPlayers]=useState([])
//   const [loading,setLoading]=useState(false)
//   const getPl
//   };

//   useEffect(()=>{
//     getPlayerData()
//   })

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
<div className="container advancesearchinlistings">
<Advancesearch/>
</div>

<div id="cardssection" ClassName="container">
<Row className="listingsmalllargesection">
{/* 3 ka poaren'==> 3 cards repeat
8 ka parent====>8 card
{aaray.map(user=>{
  return fkl
})} */}
<Col lg={3} xs={12} className="small">

<div className="texts img-thumbnail">
Similar Properties
<img src={image2} width="169px" height="126px"></img>
  <br/>
  <h4>2 BHK Flat</h4>
  <p>BHOPAL<br/>
  1000 sq.ft
  <h6>Under Construction</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Dilip</p>
  </div>  
  
  <div className="text img-thumbnail thumbnailnext">
  <img src={image} width="169px" height="126px"></img>
  <br/>
  <h4>3 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>

  <div className="text img-thumbnail thumbnailnext">
  <img src={image14} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>


  <div className="text img-thumbnail thumbnailnext">
  <img src={image} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  <div className="text img-thumbnail thumbnailnext">
  <img src={image100} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  <div className="text img-thumbnail thumbnailnext">
  <img src={image99} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  <div className="text img-thumbnail thumbnailnext">
  <img src={image98} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  <div className="text img-thumbnail thumbnailnext">
  <img src={image97} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>
  <div className="text img-thumbnail thumbnailnext">
  <img src={image2} width="169px" height="126px"></img>
  <br/>
  <h4>1 BHK Flat</h4>
  BHOPAL<br/>
  1000 sq.ft<br/>
  <h6>Ready To Move</h6>
  ₹ 1.35Cr<br/>
  Owner<br/>
  Vivek
  </div>



    
  </Col>
  {/* <div className="blank col-sm-1">
  </div> */}




  
 <Col lg={9} xs={12} id="largestcolumnlatest"> 
<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image}>
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa </b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
      <Link to="Propertydetails"><button >SUPER AREA </button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>




<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image10}>
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa </b>
    For Sale in Bhopal <br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
      <Link to="Propertydetails"><button >SUPER AREA</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>



<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image14} width="190px" height="220px">
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa </b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
      <Link to="Propertydetails"><button >SUPER AREA</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>



<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image9} width="190px" height="220px">
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa </b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
      <Link to="Propertydetails"><button >SUPER AREA</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>



<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image3} width="190px" height="220px">
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
      <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS<br></br>Complete</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION<br></br>rs50000</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>




<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image9} width="190px" height="220px">
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS<br></br>Complete</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>



<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image100} width="190px" height="200px">
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS<br></br>Complete</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>




<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image}>
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>




<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image}>
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>




<Row className="img-thumbnaillarge">
  <Col lg={2} xs={12}>
    <img src={image}>
    </img>
  </Col>
  <Col lg={1}></Col>
  <Col className="pricelisting"lg={2} xs={12}>
    <h5>₹ 1.02 Cr</h5>
      <h6>₹ 8000 per sqft</h6>
  </Col>
  <Col lg={7} xs={12}>
    <h6> <b>4 BHK Villa</b>
    For Sale in Bhopal<br/>
    Society:Vardhman Colony
 </h6>

  <Row id="buttonslisting">
    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >SUPER AREA<br></br>372</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >STATUS</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <Link to="Propertydetails"><button >TRANSACTION</button></Link>

    </Col>

    <Col lg={3} xs={6}>
    <select>
      <option>1 covered</option>
      <option>3 covered</option>
      <option>2 covered</option>
    </select>
    </Col>
  </Row>
  <Row>
  <Col lg={12} xs={6}>
    <h6>EcoFriendly Villas Carpet Area:3000,Gardens,Malls.....</h6>

  </Col>
  </Row>

  <Row>
    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnred">Contact Builder</button>

    </Col>


    <Col lg={3} xs={6}>
    <button className="contactbuilderlisting btnwhite">Enquiry Now</button>

    </Col>

    <Col lg={2} xs={6}>
    <button className="contactbuilderlisting btnwhite">save</button>

    </Col>

    <Col lg={2} xs={6}>
    <Link path="#" className="sharefeedback" color="black">shareFeedback</Link>
      
    </Col>

    <Col lg={2}>

    </Col>
  </Row>
  </Col>
  
</Row>





  



</Col>
</Row>
</div>



  
  

 










 






        

        
 

<Pagination/>



<Contact/>
<Footer/>
    
</div>
    )
}

