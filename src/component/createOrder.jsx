import React, { Component } from "react";

import OrderService from "../services/orderService";
class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderdet: {
        orderNo: "",
        totalAmount: "",
        orderDate: "",
        status: "",
      },
    };
    this.changeOrderNoHandler = this.changeOrderNoHandler.bind(this);
    this.changeTotalAmountHandler = this.changeTotalAmountHandler.bind(this);
    this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
  }

  saveOrder = (e) => {
    e.preventDefault();
    let orderdet = {
      orderNo: this.state.orderNo,
      totalAmount: this.state.totalAmount,
      orderDate: this.state.orderDate,
      status: this.state.status,
    };
    console.log("orderdet => " + JSON.stringify(orderdet));

    OrderService.createOrder(orderdet, this.state.orderNo).then((res) => {
      this.props.history.push(`/orderdets`);
    });
  };

  changeOrderNoHandler = (event) => {
    this.setState({ orderNo: event.target.value });
  };

  changeTotalAmountHandler = (event) => {
    this.setState({ totalAmount: event.target.value });
  };

  changeOrderDateHandler = (event) => {
    this.setState({ orderDate: event.target.value });
  };

  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  cancel() {
    this.props.history.push("/orderdets");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Order</h3>
              <div className="card-body">
                <form>
                  <h1>{this.props.match.params.orderNo}</h1>
                  <div className="form-group">
                    <label>Order No.:</label>
                    <input
                      placeholder="orderNo"
                      name="orderNo"
                      className="form-control"
                      value={this.state.orderNo}
                      onChange={this.changeOrderNoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Amount:</label>
                    <input
                      placeholder="totalAmount"
                      name="totalAmount"
                      className="form-control"
                      value={this.state.totalAmount}
                      onChange={this.changeTotalAmountHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Order Date</label>
                    <input
                      placeholder="orderDate"
                      name="orderDate"
                      className="form-control"
                      value={this.state.orderDate}
                      onChange={this.changeOrderDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status:</label>
                    <input
                      placeholder="Status"
                      name="Status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatusHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveOrder}>
                    {" "}
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateOrder;
