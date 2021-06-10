import React, { Component } from 'react';
import { TypeBold } from 'react-bootstrap-icons';
import carousel1 from "../../photos/carousel1.jpg";
import carousel4 from "../../photos/carousel4.jpg";
import bas3 from "../../photos/bas3.jpg";

class Carousel extends Component {
    
    render() { 
        return (  
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col" style={{"backgroundColor": "white"}}>
                <img src={carousel1} className="d-block" alt="" style={{"width":"100%"}}/>
                </div>
                <div className="col">
                  <h3 style={{"margin-top":"200px"}}>VEGIES</h3>
                 <p>Fresh Vegetables<br/>
                 
                 0% Harmful! Fresh Vegetables .
                                    
                 </p>
                </div>
              </div>
             </div>
             </div>
            <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col">
                <img src={bas3} className="d-block" alt="" style={{"width":"100%"}}/>
                </div>
                <div className="col">
                  <h3 style={{"margin-top":"200px"}}>Vegetables</h3>
                 <p>Quality organic @Great prices!<br/>
                 
                 Organic vegetables at lowest price.
                                    
                 </p>
                </div>
              </div>
             </div>
            </div>
            <div className="carousel-item">
              <img src={carousel4} className="d-block" alt="" style={{"width":"400px"}}/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        );
    }
}
 
export default Carousel;