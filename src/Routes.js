import React from "react"
import { BrowserRouter as Router,Route, Switch,Link } from 'react-router-dom';
import Listing from "./Listing";
import Home from "./App";
import { render } from "@testing-library/react";
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";
import WHATNEW from "./Whatnew";
import Flat from "./flat";
import Propertydetails from './Propertydetails';


import villa from "./villa";
import house from "./house";
import plot from "./plot";
import duplex from "./duplex";
import pent from "./pent";
import Shop from "./Shop";
import Services from "./Services";
import Careers from "./Careers";
import Companynews from "./Companynews";
import Project from "./Project";










function Routes(){
    
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}>
                    </Route>

                    <Route path="/Listing" exact component={Listing}>
                    </Route>

                    <Route path="/Propertydetails" exact component={Propertydetails}>
                    </Route>

                    <Route path="/AboutUS" exact component={AboutUS}>
                    </Route>

                    <Route path="/ContactUS" exact component={ContactUS}>
                    </Route>

                    <Route path="/Whatnew" exact component={WHATNEW}>
                    </Route>

                    <Route path="/flat" exact component={Flat}>
                    </Route>

                    <Route path="/house" exact component={house}>
                    </Route>

                    <Route path="/villa" exact component={villa}>
                    </Route>
                    <Route path="/duplex" exact component={duplex}>
                    </Route>


                    <Route path="/plot" exact component={plot}>
                        
                    </Route>
                    <Route path="/pent" exact component={pent}></Route>


                    <Route path="/Shop" exact component={Shop}>
                    </Route>

                    <Route path="/Services" exact component={Services}>
                    </Route>

                    <Route path="/Companynews" exact component={Companynews}>
                    </Route>

                    <Route path="/Careers" exact component={Careers}>
                    </Route>
                    <Route path="/Project" exact component={Project}>

                    </Route>
                    

                </Switch>
                
            </Router>

        )
    
}export default Routes;