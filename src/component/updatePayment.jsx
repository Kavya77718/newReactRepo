import React, { Component } from "react";
import PaymentService from "../services/paymentService";

class UpdatePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentId: this.props.match.params.paymentId,
      transactionMode: "",
      itemTotal: "",
      shippingFee: "",
      totalPrice: "",
      transactionStatus: "",
      transactionDate: "",
    };
    this.changePaymentIdHandler = this.changePaymentIdHandler.bind(this);
    this.changeTransactionModeHandler =
      this.changeTransactionModeHandler.bind(this);
    this.changeItemTotalHandler = this.changeItemTotalHandler.bind(this);
    this.changeShippingFeeHandler = this.changeShippingFeeHandler.bind(this);
    this.changeTotalPriceHandler = this.changeTotalPriceHandler.bind(this);
    this.changeTransactionStatusHandler =
      this.changeTransactionStatusHandler.bind(this);
    this.changeTransactionDateHandler =
      this.changeTransactionDateHandler.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }

  componentDidMount() {
    PaymentService.getPaymentById(this.state.paymentId).then((res) => {
      let payment = res.data;
      this.setState({
        paymentId: payment.paymentId,
        transactionMode: payment.transactionMode,
        itemTotal: payment.itemTotal,
        shippingFee: payment.shippingFee,
        transactionStatus: payment.transactionStatus,
        transactionDate: payment.transactionDate,
      });
    });
  }

  updatePayment = (e) => {
    e.preventDefault();
    let payment = {
      paymentId: this.state.paymentId,
      transactionMode: this.state.transactionMode,
      itemTotal: this.state.itemTotal,
      shippingFee: this.state.shippingFee,
      totalPrice: this.state.totalPrice,
      transactionStatus: this.state.transactionStatus,
      transactionDate: this.state.transactionDate,
    };
    console.log("payment => " + JSON.stringify(payment));

    PaymentService.updatePayment(this.state.paymentId, payment).then((res) => {
      this.props.history.push(`/payments`);
    });
    // OrderService.updateOrder(orderdet, this.state.orderNo).then((res) => {
    //   this.props.history.push(`/orderdets`);
    // });
  };

  changePaymentIdHandler = (event) => {
    this.setState({ paymentId: event.target.value });
  };

  changeTransactionModeHandler = (event) => {
    this.setState({ transactionMode: event.target.value });
  };

  changeItemTotalHandler = (event) => {
    this.setState({ itemTotal: event.target.value });
  };

  changeShippingFeeHandler = (event) => {
    this.setState({ shippingFee: event.target.value });
  };

  changeTotalPriceHandler = (event) => {
    this.setState({ totalPrice: event.target.value });
  };

  changeTransactionStatusHandler = (event) => {
    this.setState({ transactionStatus: event.target.value });
  };

  changeTransactionDateHandler = (event) => {
    this.setState({ transactionDate: event.target.value });
  };

  cancel() {
    this.props.history.push("/payments");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Payment</h3>
              <div className="card-body">
                <form>
                  <h1>{this.props.match.params.paymentId}</h1>
                  <div className="form-group">
                    <label>Payment Id:</label>
                    <input
                      placeholder="paymentId"
                      name="paymentId"
                      className="form-control"
                      value={this.state.paymentId}
                      onChange={this.changePaymentIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Payment Type:</label>
                    <input
                      placeholder="transactionMode"
                      name="transactionMode"
                      className="form-control"
                      value={this.state.transactionMode}
                      onChange={this.changeTransactionModeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Item Total</label>
                    <input
                      placeholder="itemTotal"
                      name="itemTotal"
                      className="form-control"
                      value={this.state.itemTotal}
                      onChange={this.changeItemTotalHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Shipping Fee</label>
                    <input
                      placeholder="shippingFee"
                      name="shippingFee"
                      className="form-control"
                      value={this.state.shippingFee}
                      onChange={this.changeShippingFeeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Price</label>
                    <input
                      placeholder="totalPrice"
                      name="totalPrice"
                      className="form-control"
                      value={this.state.totalPrice}
                      onChange={this.changeTotalPriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Transaction Status</label>
                    <input
                      placeholder="transactionStatus"
                      name="transactionStatus"
                      className="form-control"
                      value={this.state.transactionStatus}
                      onChange={this.changeTransactionStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Payment Date</label>
                    <input
                      placeholder="transactionDate"
                      name="transactionDate"
                      className="form-control"
                      value={this.state.transactionDate}
                      onChange={this.changeTransactionDateHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updatePayment}
                  >
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

export default UpdatePayment;
