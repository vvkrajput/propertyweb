import React from 'react';
import {Route,Switch,Link, Router, NavLink}from "react-router-dom";
import Slider from './Slider';
import {GetData, PostData, PostFile} from './Api.js';

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
import slider from './Slider';
class Advancesearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Location: '',
    Propertystatus:'',
    Propertytype:'',
    Yourrequirement:'',
    Bedrooms:'',
    Bathrooms:'',
    Pricerange:'',
    Squarefeer:'',
    BathroomArray:[]
  };

    this.handleSubmit = this.handleSubmit.bind(this);
  
  }



 


  handleChange = (event) =>
  this.setState({Location: event.target.value});

  handleChange1 = (event) =>
  this.setState({Propertystatus: event.target.value});

  handleChange2=(event)=>
  this.setState({Propertytype:event.target.value});
  
  handlerequirement=(event)=>
  this.setState({Yourrequirement:event.target.value})

  handleChange4=(event)=>
    this.setState({Bedrooms:event.target.value})

    handleChange5=(event)=>
    this.setState({Bathrooms:event.target.value})

    // handleChange6=(event)=>
    // this.setState({value6:event.target.value}
    // // console.log(event)
    // )

    handleChange7=(event)=>
    this.setState({value7:event.target.value})

    handleChange6 = e => {
      this.setState({ [e.target.name]: e.target.value })
      alert(e);
    };

  

  
  

  handleSubmit(event) {
    alert(`Location : ${this.state.value}"\n"Property Status : ${ this.state.value1}
    Property Type : ${this.state.value2}
  Your Requirement : ${this.state.value3}
    Bedrooms : ${this.state.value4}
    Bathrooms : ${this.state.value5}
    Pricerange:${this.state.value6}
    SquareFeet:${this.state.value7}`);


    event.preventDefault();
  }

  componentDidMount() {
    GetData('bathroomslist')
      .then((response) => {
        console.log('Bathroom', response);

        if (response.status) {
          this.setState({
            // isLoading: false,
            BathroomArray: response.data,
          });
        }
      })
      .catch((error) => {
        this.setState({isLoading: false});
      });
    // GetData('support_list')
    //   .then((response) => {
    //     console.log('support_list', response);

    //     if (response.status) {
    //       this.setState({
    //         isLoading: false,
    //         supportArray: response.data,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     this.setState({isLoading: false});
    //   });
  }





  render() {
    const {
     BathroomArray
 
    } = this.state;
    return (
      <div className="container advancesearch">
      <form onSubmit={this.handleSubmit}>
          <Row className="p-3">
      
            <Col lg={3} xs={12}>
             <select value={this.state.Location} onChange={this.handleChange}>
             <option selected value="Select">Location</option>
            <option value="Awadhpuir">Awadhpuir</option>
            <option value="Ashoka Garden">Ashoka garden</option>
            <option value="Arera Hills">Arera Hills</option>
            <option value="Indrapuri">Indrapuri</option>
          </select>
          </Col>
            <Col lg={3} xs={12}>
            <select value={this.state.Propertystatus} onChange={this.handleChange1}>
          <option selected value="Select">Property Status</option>

            <option value="UnderConstruction">UnderConstruction</option>
            <option value="Ready To Complete">Read To Complete</option>
            <option value="Complete">Complete</option>
          </select>
          </Col>
           <Col lg={3} xs={12}>
            <select value={this.state.Propertytype} onChange={this.handleChange2}>
          <option selected value="Select">Property Type</option>

            <option value="Plot">Plot</option>
            <option value="Flat">Flat</option>
            <option value="Independent House">Independent House</option>
          </select>

          </Col>
            <Col lg={3} xs={12}>
            <input type="text"  placeholder="Your Requirement"
             value={this.state.Yourrequirement}onChange={this.handlerequirement}/>
            <br></br>
            </Col>
                   
      
          </Row>
          <Row className="p-4">
            
            <Col lg={2} xs={12}>
           <select value={this.state.Bedrooms} onChange={this.handleChange4}>
          <option selected value="Select">Bedrooms</option>

            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
          </select>
          </Col>
           <Col lg={2} xs={12}>
           <select value={this.state.Bathrooms} onChange={this.handleChange5} className="bathroom">
          <option selected value="Select">Bathrooms</option>
          {BathroomArray.map((item) => {
              return <option value="{item.name}">{item.name} </option>;
            })}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </Col>
          <Col lg={3} xs={12}>
           {/* <div class="slidecontainer1 price"> */}
           <div className="slidecontainer1 price">
           {/* <Slider/> */}
           <p>Price Range :</p>
           
             <input type="range" min="0" max="10000000000" class="slider" id="myRange"
             value={this.state.value6} onChange={this.handleChange6}/>
             
            </div>
            </Col> 


            <Col lg={3} xs={12}>
           <div class="slidecontainer1 squarefeet">
           <p>Square Feet :</p>
             <input type="range" min="0" max="100" value="50" class="slider" id="myRange"/>
            </div>
            </Col> 
            <Col lg={2} xs={12}>
             <button type="submit" className="searchform">Search</button>
             </Col> 
             </Row>
      </form>
      </div>
    );
  }
}

export default Advancesearch;