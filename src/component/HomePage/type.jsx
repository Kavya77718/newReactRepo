import React, { Component } from 'react';
//import carousel1 from "../../photos/carousel1.jpg";
import image1 from "../../photos/image1.jpg";
import image from "../../photos/image.jpg";
class Type extends Component {
    
    render() { 
        return (  
            <div className ="container">
                <div className ="row" style={{"marginLeft":"180px"}}>
                    <div className="col" style={{"paddingRight":"0px"}}>
                    <img src={image} style={{"width": "100%", "height": "100%", "border":"solid black 2px"}}/>
                    </div>
                    <div className ="col">
                        <div className="row">
                        <img src={image} style={{"width": "200px", "height": "200px", "border":"solid black 2px"}}/>
                        </div>
                        <div className="row">
                        <img src={image1} style={{"width": "200px", "height": "200px",  "border":"solid black 2px"}}/>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
 
export default Type;
