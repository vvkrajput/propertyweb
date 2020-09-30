import React from 'react';
import Footer from './Footer';
import Contact from './contact';
import image100 from './images/image100.jpg';
import image99 from './images/image99.jpg';
import image98 from './images/image98.jpg';
import image97 from './images/image97.jpg';
import { MDBDataTableV5 } from 'mdbreact';
import image from './images/listingleftportionimage.jpg'
import image2 from './images/imagelistint2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image10 from './images/image10.jpg';
import image9 from './images/image9.jpg'
import image11 from './images/image11.jpg';
import image6 from './images/image6.jpg';
import image14 from './images/image14.jpg';
import {Route,Switch,Link, Router, NavLink}from "react-router-dom";


export default function SelectSearchTopReverse() {
  const [datatable, setDatatable] = React.useState({
  })
   
  
  
  return (
      
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
    />
  
  );
}


