import React from 'react'
import {Row,Col}from 'react-bootstrap';
import {Route,BrowserRouter as Router,Switch, Link,withRouter }from 'react-router-dom';
import Home from './App';
// import Aboutus from './AboutUS';
export default function Footer() {
    const currentTab = (history, path) =>{
        if(history.location.pathname === path)
            return {color : "#5cb85c"}
        else
            return {color : "#d1d1d1"}
    }
    return (
        <div className="final">
            <Row>
                <Col lg={3} xs={12} className="finalcol1">
                    <h3>ABOUT PORPERTY ASK</h3>
                
                    <p className="finalpara">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </p>
                    <i class="fa fa-facebook-official fa-2x ouricon" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square fa-2x ouricon" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square fa-2x ouricon" aria-hidden="true"></i>
                </Col>

                <Col lg={3} xs={12} className="quicklinksandnewsletter">
                    <h3>QUICK LINKS</h3>
                    <hr className="foot" align="left" />
                    <br/>
                    <div>
                        <ul className="footerlist">
                        
                            <Link to="/"><li>HOME</li><br/></Link>
                           <Link to="#"> <li>SHOP</li><br/></Link>
                            <Link to="#"><li>COMPANY NEWS</li><br/></Link>
                           <Link to="#"><li>PROJECT</li><br/></Link> 
                        </ul>
                        <ul className="footerlist">
                        <Link to="/AboutUS"><li>ABOUT</li><br/></Link>
                          <Link to="#">  <li>CAREERS</li><br/></Link>
                            <Link to="#"><li>SERVICES</li><br/></Link>
                            <Link to="/ContactUS"><li>CONTACT US</li><br/></Link>
                        </ul>
                    </div>
                </Col>

                <Col lg={3} xs={0}>
                    
                </Col>
                <Col lg={3} xs={12} className="quicklinksandnewsletter">
                    <h3>NEWSLETTER</h3>
                    <hr className="foot" align="left"/>
                    <br/>
                    <p className="finalpara">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                    <form className="newsletter">
                    <input type="email" placeholder="Email Address"/>
                    <button type="submit">GO</button>
                    </form>
                 </Col>
            </Row>

            <Row className="copy-right">
                <Col lg={12} xs={12}>
                <p>
                 &copy; Copyright @2020 By PropertyAsk rights reserved
                </p>
                </Col>
            </Row>
        </div>
        )
}
