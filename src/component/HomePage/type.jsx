import React, { Component } from 'react';
//import carousel1 from "../../photos/carousel1.jpg";
import image1 from "../../photos/image1.jpg";
import image from "../../photos/image.jpg";
import leaf1 from "../../../src/photos/leaf1.jpg";
import rootall from "../../../src/photos/rootall.jpg";
class Type extends Component {
    
    render() { 
        return (  
            <div className ="container">
                <div className ="row" style={{"marginLeft":"180px"}}>
                    <div className="col" style={{"paddingRight":"0px"}}>
                    <img src={leaf1} style={{"width": "100%", "height": "100%", "border-style":"solid", "border-color":"#76ead7"}}/>
                    </div>
                    <div className ="col">
                        <div className="row">
                        <img src={rootall} style={{"width": "200px", "height": "200px",  "border-style":"solid", "borderColor":"#76ead7"}}/>
                        </div>
                        <div className="row">
                        <img src={image1} style={{"width": "200px", "height": "200px",   "border-style":"solid", "border-color":"#76ead7"}}/>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
 
export default Type;