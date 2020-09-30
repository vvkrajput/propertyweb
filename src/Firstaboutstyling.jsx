import React from 'react'

function Firstaboutstyling() {
    return (
        
        <div className="slidingbars">
            {/* <h1>asdfghjks</h1> */}
            <div className="slidecontainer">
				<p><b>Authorised Property</b></p>
			  <input type="range" min="1" max="100" value="88" class="slider" id="myRange"/>
			</div>
			
			<div className="slidecontainer">
				<p><b>Customers Covered</b> </p>
			  <input type="range" min="1" max="100" value="68" class="slider" id="myRange"/>
			</div>

			
			<div className="slidecontainer">
				<p><b>Satisfaction</b> </p>
			  <input type="range" min="1" max="100" value="73" class="slider" id="myRange"/>
			</div>

			
			<div className="slidecontainer">
				<p><b>Areras</b></p>
			  <input type="range" min="1" max="100" value="92" class="slider" id="myRange"/>
			</div>            
        </div>
    )
}
export default Firstaboutstyling;
