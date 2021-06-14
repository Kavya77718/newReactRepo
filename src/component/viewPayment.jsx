import React, { Component } from "react";
import PaymentService from "../services/paymentService";

class ViewPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentId: this.props.match.params.paymentId,
      payment: {},
    };
  }

  componentDidMount() {
    PaymentService.getPaymentById(this.state.paymentId).then((res) => {
      this.setState({ payment: res.data });
    });
  }
  render() {
    return (
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Payment Details</h3>
        <div className="card bg-info text-dark">
          <div className="card-body">
            <h1>{this.props.match.params.paymentId}</h1>
            <div className="row">
              <label>
                <b>Payment Id: </b>
              </label>
              <div>{this.state.payment.paymentId}</div>
            </div>
            <div className="row">
              <label>
                <b>Payment Type</b>{" "}
              </label>
              <div>{this.state.payment.transactionMode}</div>
            </div>
            <div className="row">
              <label>
                <b>Item Total </b>
              </label>
              <div>{this.state.payment.itemTotal}</div>
            </div>
            <div className="row">
              <label>
                <b>Shipping Fee </b>
              </label>
              <div>{this.state.payment.shippingFee}</div>
            </div>
            <div className="row">
              <label>
                <b>Total Price </b>
              </label>
              <div>{this.state.payment.totalPrice}</div>
            </div>
            <div className="row">
              <label>
                <b>Transaction status </b>
              </label>
              <div>{this.state.payment.transactionStatus}</div>
            </div>
            <div className="row">
              <label>
                <b>Payment Date </b>
              </label>
              <div>{this.state.payment.transactionDate}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewPayment;
