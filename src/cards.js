import React from "react";
import imageflat from "./images/01 (1).png";
import imagehouse from "./images/02 (1).png";
import imagepent from "./images/03 (1).png";
import imageduplex from "./images/04 (1).png";

import imageplot from "./images/05 (1).png";
import imagevilla from "./images/06 (1).png";
import { Router, Link } from "react-router-dom";
import{Row,Col}from 'react-bootstrap';






export default function Cards() {
  return (
    <div>

<div class="jumbotron">
      <Row>
        <Col lg={3} xs={12} className="logo">
        <Link to="/flat"><img src={imageflat} ></img></Link>
        <h1 class="numbers">01</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>FLAT</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
        <Col lg={3} xs={12} className="logo">
        <Link to="/house"><img src={imagehouse}></img></Link>
        <h1 class="numbers">02</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>INDEPENDENT HOUSE</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
      </Row>
      <Row>
        <Col lg={3} xs={12} className="logo">
        <Link to="/pent"><img src={imagepent} ></img></Link>
        <h1 class="numbers">03</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>PENT HOUSE</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
        <Col lg={3} xs={12} className="logo">
        <Link to="/duplex"><img src={imageduplex}></img></Link>
        <h1 class="numbers">04</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>DUPLEX</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
      </Row>

      
      <Row>
        <Col lg={3} xs={12} className="logo">
        <Link to="/plot"><img src={imageplot} ></img></Link>
        <h1 class="numbers">05</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>PLOT</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
        <Col lg={3} xs={12} className="logo">
        <Link to="/villa"><img src={imagevilla}></img></Link>
        <h1 class="numbers">06</h1>
        </Col>
        <Col lg={3} xs={12} className="text">
          <h4>VILLA</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </Col>
      </Row>
    
  </div>


      
    </div>
  )
}



