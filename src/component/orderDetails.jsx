import React, { Component } from "react";
import OrderService from "../services/orderService";
//import Orderdets from "../components/orderdets";

class OrderDetails extends Component {
  state = {
    orderdet: {
      orderNo: "",
      totalAmount: "",
      orderDate: "",
      status: "",
    },
  };
  orderById() {
    OrderService.getOrderById(this.props.match.params.id).then((res) =>
      this.setState({ orderdet: res.data })
    );
  }
  updateOrder(orderNo) {
    this.props.history.push(`/update-order/${orderNo}`);
  }

  handleChange = (event) => {
    event.preventDefault();
    const orderdet = this.state.orderdet;
    orderdet[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ orderdet });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.orderdet);
    OrderService.updateOrder(
      this.state.orderdet,
      this.props.match.params.id
    ).then((res) => {
      this.props.history.push("/orderdets");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="orderNo" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              name="orderNo"
              value={this.state.orderdet.orderNo}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalAmount" className="form-label">
              Total Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="Amount"
              name="totalAmount"
              value={this.state.orderdet.totalAmount}
              aria-describedby="totalAmountHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orderDate" className="form-label">
              Order Date
            </label>
            <input
              type="text"
              className="form-control"
              id="Type"
              name="orderDate"
              value={this.state.orderdet.orderDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Order Status
            </label>
            <input
              type="text"
              className="form-control"
              id="Status"
              name="status"
              value={this.state.orderdet.status}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/orderdets");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default OrderDetails;
