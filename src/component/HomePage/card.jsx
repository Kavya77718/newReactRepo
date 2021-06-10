import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../photos/image.jpg";

class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="card h-100" style={{ width: "16rem" }}>
          <img
            src={image}
            height="180px"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <small className="card-title ">Cucumber</small>
            <p className="card-text float-right">
              <i class="fas fa-dollar-sign mr-1" />
              Rs.100
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;