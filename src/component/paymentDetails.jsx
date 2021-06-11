import React, { Component } from "react";
import PaymentService from "../services/paymentService";

class PaymentDetails extends Component {
  state = {
    payment: {
      paymentId: "",
      paymentType: "",
      itemTotal: "",
      shippingFee: "",
      totalPrice: "",
    },
  };
  PaymentById() {
    OrderService.getPaymentById(this.props.match.params.id).then((res) =>
      this.setState({ orderdet: res.data })
    );
  }
  updatePayment(paymentId) {
    this.props.history.push(`/update-payment/${paymentId}`);
  }

  handleChange = (event) => {
    event.preventDefault();
    const payment = this.state.payment;
    payment[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ payment });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.payment);
    PaymentService.updatepayment(
      this.state.payment,
      this.props.match.params.id
    ).then((res) => {
      this.props.history.push("/payments");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="paymentId" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              name="paymentId"
              value={this.state.payment.paymentId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalAmount" className="form-label">
              Payment Type
            </label>
            <input
              type="text"
              className="form-control"
              id="Type"
              name="paymentType"
              value={this.state.payment.paymentType}
              aria-describedby="totalAmountHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="orderDate" className="form-label">
              Item Total
            </label>
            <input
              type="text"
              className="form-control"
              id="total"
              name="itemTotal"
              value={this.state.payment.itemTotal}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Shipping fee
            </label>
            <input
              type="text"
              className="form-control"
              id="fee"
              name="shippingFee"
              value={this.state.payment.shippingFee}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Total Price
            </label>
            <input
              type="text"
              className="form-control"
              id="Total"
              name="totalPrice"
              value={this.state.payment.totalPrice}
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

export default PaymentDetails;
