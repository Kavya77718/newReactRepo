import React, { Component } from 'react';
import BillingService from '../services/billingService';

class CreateBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingId: "",
      transactionMode: "",
      transactionDate: "",
      transactionStatus: "",
    };
    this.changeBillingIdHandler = this.changeBillingIdHandler.bind(this);
    this.changeTransactionModeHandler =
      this.changeTransactionModeHandler.bind(this);
    this.changeTransactionDateHandler =
      this.changeTransactionDateHandler.bind(this);
    this.changeTransactionStatusHandler =
      this.changeTransactionStatusHandler.bind(this);
    this.saveBill = this.saveBill.bind(this);
  }

  saveBill = (e) => {
    e.preventDefault();
    let bill = {
      billingId: this.state.billingId,
      transactionMode: this.state.transactionMode,
      transactionDate: this.state.transactionDate,
      transactionStatus: this.state.transactionStatus,
    };
    console.log("bill => " + JSON.stringify(bill));

    BillingService.createBill(bill).then((res) => {
      this.props.history.push(`/bills`);
    });
  };

  changeBillingIdHandler = (event) => {
    this.setState({ billingId: event.target.value });
  };

  changeTransactionModeHandler = (event) => {
    this.setState({ transactionMode: event.target.value });
  };

  changeTransactionDateHandler = (event) => {
    this.setState({ transactionDate: event.target.value });
  };

  changeTransactionStatusHandler = (event) => {
    this.setState({ transactionStatus: event.target.value });
  };

  cancel() {
    this.props.history.push("/bills");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Bill</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>BillingId:</label>
                    <input
                      placeholder="Id"
                      name="BillingId"
                      className="form-control"
                      value={this.state.billingId}
                      onChange={this.changeBillingIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Transaction Mode:</label>
                    <input
                      placeholder="Transaction Mode"
                      name="transactionmode"
                      className="form-control"
                      value={this.state.transactionMode}
                      onChange={this.changeTransactionModeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Transaction Date</label>
                    <input
                      placeholder="Transaction Date"
                      name=" transactiondate"
                      className="form-control"
                      value={this.state.transactionDate}
                      onChange={this.changeTransactionDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Transaction Status:</label>
                    <input
                      placeholder=" Transaction Status"
                      name=" transactionstatus"
                      className="form-control"
                      value={this.state.transactionStatus}
                      onChange={this.changeTransactionStatusHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveBill}>
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

export default CreateBilling;
