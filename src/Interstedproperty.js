import React, { Component } from 'react'
import propertyicon from './images/propertyicon.png';
import {Row,Col}from 'react-bootstrap';

export class Interstedproperty extends Component {
    constructor(props){
        super(props)
        this.state={
            Name:"",
            Email:"",
            Mobile:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange=(event)=>{
        this.setState({Name:event.target.value});
    }

    handleChange1=(event)=>{

        this.setState({Email:event.target.value});
    }
    handleChange2=(event)=>{

        this.setState({Mobile:event.target.value});
    }


    handleSubmit(event) {
        alert(`Name:   ${this.state.Name} 
        Email:${this.state.Email}
        Mobile:${this.state.Mobile}`
        );
        event.preventDefault();
    }

    render() {
        return (
  
                
                <form onSubmit={this.handleSubmit}>

                <div className="interestedform">
                {/* <img src={propertyicon} height="80px" width="30px"></img> */}
                <div className="text img-thumbnail thumbnailnext" id="ca9c4a">

                <h5>Interested In Property</h5>
                <h6>Fill This Form</h6>


                    <input type="text" placeholder="Name" value={this.state.Name} onChange={this.handleChange}></input>
                    <input type="text" placeholder="Email" value={this.state.Email} onChange={this.handleChange1}></input>
                    <input type="text" placeholder="Mobile" value={this.state.Mobile} onChange={this.handleChange2}></input>
                    <br/>
                    <br/>
                    <button type="submit" className="propertydetailsbutton">I am Interested</button>
                    <h6>I authorise PropertyAsk and its Business,</h6>
                </div>
                </div>

                </form>
        )
    }
}

export default Interstedproperty
