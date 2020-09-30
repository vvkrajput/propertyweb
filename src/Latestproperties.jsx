import React from 'react'
import  firstproperty from "./images/3.jpg"
import secondproperty from  "./images/4.jpg"
import thirdproperty from "./images/5.jpg"
import fourthproperty from "./images/6.jpg"
import fifthproperty from "./images/7.jpg"
import agent1 from "./images/avatar-5.png"
import agent2 from "./images/avatar-6.png"
import agent3 from "./images/avatar-3.png"
import map from "./images/map.gif";
import contacttexture from "./images/contact texture.png"
import{Row,Col}from 'react-bootstrap';
// import latestprotexture from "./images/latest poperty texture.png"

 function Latestproperties() {
    return (
<div>
<div className="Latest">
<Row className="properties">
<Col lg={12} xs={12}> 
<h1>LATEST PROPERTIES </h1>
</Col>
</Row>

        <br></br>
    <div className="forbhopal">
    <Row>
    <Col lg={12} xs={12}>
       <h4>BHOPAL PROPERTIES</h4>
    </Col>
    </Row>
    <div>
    <Row className="firstpro">
        <Col lg={6} xs={12} className="firstproperty">
            <img src={firstproperty} class="firstimg1"></img>
        </Col>
        <Col lg={6} xs={12} className="firstproperty">
            <img src={secondproperty}></img>
        </Col>
    </Row>
        <br></br>



    <Row className="firstpro">
        <Col lg={4} xs={12} className="secondproperty">
            <img src={thirdproperty} class="firstimage2"></img>
        </Col>
        <Col lg={4} xs={12} className="secondproperty">
            <img src={fourthproperty}></img>
        </Col>
        <Col lg={4} xs={12} className="secondproperty">
            <img src={fifthproperty}></img>
        </Col>
    </Row>
    </div>
    </div>


</div>


<br></br>


<div className="agent">
    <Row>
        <Col lg={4} xs={12}>
            <h3>OUR AGENTS<br></br>
                YOU CAN TRUST
            </h3>
            <br></br>
    <p className="para">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown.</p>
        <br/>
        <button className="agentbutton b1"> &#60;  </button>
        <button className="agentbutton">&#62;</button>
   
        </Col>
        <Col lg={2} xs={12} className="agent1">
            <img src={agent1} className="agents"></img>
        </Col>
        <Col lg={2} xs={12}>
            <img src={agent2} className="agents"></img>
            </Col>
            
        <Col lg={2} xs={12}>
             <img src={agent3} className="agents"></img>
        </Col>
        


    </Row>

 </div>
 </div>
    )
 }
export default Latestproperties;