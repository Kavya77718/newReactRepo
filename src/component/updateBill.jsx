
import React, { Component } from "react";
import BillingService from "../services/billingService";

import React, { Component } from 'react';
import BillingService from '../services/billingService';


class UpdateBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingId: this.props.match.params.billingId,
      bill: {
        transactionMode: "",
        transactionDate: "",
        transactionStatus: "",
      },
    };

    /* this.changeTransactionModeHandler=this.changeTransactionModeHandler.bind(this);
        this.changeTransactionDateHandler=this.changeTransactionDateHandler.bind(this);
        this.changeTransactionStatusHandler=this.changeTransactionStatusHandler.bind(this);*/
    this.updateBill = this.updateBill.bind(this);
    //this.changeIdHandler=this.changeIdHandler.bind(this);
  }

  componentDidMount() {
    BillingService.getBillById(this.state.billingId).then((res) => {
      let bill = res.data;
      this.setState({
        bill,
      });
    });
  }

  updateBill = (e) => {
    e.preventDefault();
    const { bill } = this.state;
    //let bill={transactionMode: this.state.transactionMode, transactionDate: this.state.transactionDate, transactionStatus: this.state.transactionStatus};
    console.log("bill => " + bill);

    BillingService.updateBill(this.state.billingId, bill).then((res) => {
      this.props.history.push(`/bill`);
    });
  };
  handleChange = (event) => {
    event.preventDefault();
    const bill = this.state.bill;
    bill[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ bill });
  };
  /*changeTransactionModeHandler=(event) =>{
        this.setState({transactionMode: event.target.value})
    }

    changeTransactionDateHandler=(event) =>{
        this.setState({ transactionDate: event.target.value})
    }

    changeTransactionStatusHandler=(event) =>{
        this.setState({ transactionStatus: event.target.value})
    }*/
  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Bill Page</h3>
              <div className="card-body">
                <form onSubmit={this.updateBill}>
                  <h1>{this.props.match.params.billingId}</h1>
                  <div className="form-group">
                    <label>TransactionMode:</label>
                    <input
                      id="transactionMode"
                      placeholder="TransactionMode"
                      name="transactionMode"
                      className="form-control"
                      value={this.state.bill.transactionMode}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>TransactionDate</label>
                    <input
                      id="transactionDate"
                      placeholder="TransactionDate"
                      name="transactionDate"
                      className="form-control"
                      value={this.state.bill.transactionDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>TransactionStatus:</label>
                    <input
                      id="transactionStatus"
                      placeholder="TransactionStatus"
                      name="transactionStatus"
                      className="form-control"
                      value={this.state.bill.transactionStatus}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button className="btn btn-success" type="submit">
                    {" "}
                    Save{" "}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
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

export default UpdateBilling;
