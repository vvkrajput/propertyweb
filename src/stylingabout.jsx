import React from 'react'
import bulbimage from './images/icon 1.png'
// import Firstaboutstyling from './Firstaboutstyling'
import{Row,Col}from 'react-bootstrap';

export default function stylingabout() {
    return (
      
<div class="flex-wrapper">
      
      <Row class="capabilities">
      <Col lg={2}></Col>
			<Col lg={3} xs={12}>
				<h3><small className="our">OUR</small> <small className="capability"> CAPABILITIES<small className="our"> FOR</small></small> <br/> <small className="our">OUR</small> <small className="customer">CUSTOMERS</small></h3>
			</Col>
			<Col lg={1} xs={12}>
				<h1 className="dash">|</h1>
			</Col>
			<Col lg={5} xs={12} className="capabilitytext">
				<p>Aldus PageMaker including versions of Lorem Ipsum.containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.</p>
    	</Col>
      
    <Col lg={1}></Col>
		</Row>
    <Row className="circle">
    <Col lg={2}></Col>
<Col lg={2} xs={12} className="circles">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="77, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">77%</text>
          </svg>
          <h3 className="Autho">Authorised Property</h3>
        </div>
        </Col>


        <Col lg={2} xs={12} className="circles">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="68, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">68%</text>
          </svg>
          <h3 className="Autho">Customers Covered</h3>
        </div>
        </Col>

        <Col lg={2} xs={12} className="circles">

<div class="single-chart">
  <svg viewBox="0 0 36 36" class="circular-chart green">
    <path class="circle-bg"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path class="circle"
      stroke-dasharray="88, 100"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="18" y="20.35" class="percentage">88%</text>
  </svg>
  <h3 className="Autho">Satisfaction</h3>
        </div>
        </Col>



        <Col lg={2} xs={12} className="circles">

        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="53, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">53%</text>
          </svg>
          <h3 className="Autho">Areas</h3>
        </div>
        </Col>
        <Col lg={2}></Col>
        </Row>







      </div>
    
    )
}
