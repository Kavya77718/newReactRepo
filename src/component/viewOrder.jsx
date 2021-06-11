import React, { Component } from "react";
import OrderService from "../services/orderService";

class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNo: this.props.match.params.orderNo,
      orderdet: {},
    };
  }

  componentDidMount() {
    OrderService.getOrderById(this.state.orderNo).then((res) => {
      this.setState({ orderdet: res.data });
    });
  }
  render() {
    return (
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Order Details</h3>
        <div className="card bg-info text-dark">
          <div className="card-body">
            <h1>{this.props.match.params.orderNo}</h1>
            <div className="row">
              <label>
                <b>Order No: </b>
              </label>
              <div>{this.state.orderdet.orderNo}</div>
            </div>
            <div className="row">
              <label>
                <b>total Amount:</b>{" "}
              </label>
              <div>{this.state.orderdet.totalAmount}</div>
            </div>
            <div className="row">
              <label>
                <b>Order Date: </b>
              </label>
              <div>{this.state.orderdet.orderDate}</div>
            </div>
            <div className="row">
              <label>
                <b>Order Status: </b>
              </label>
              <div>{this.state.orderdet.status}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewOrder;
