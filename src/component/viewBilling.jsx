import React, { Component } from "react";
import BillingService from "../services/billingService";

class ViewBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingId: this.props.match.params.billingId,
      bill: {},
    };
  }

  componentDidMount() {
    BillingService.getBillById(this.state.billingId).then((res) => {
      this.setState({ bill: res.data });
    });
  }
  render() {
    return (
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Billing Details</h3>
        <div className="card bg-info text-dark">
          <div className="card-body">
            <h1>{this.props.match.params.billingId}</h1>
            <div className="row">
              <label>
                <b>Billing Id: </b>
              </label>
              <div>{this.state.bill.billingId}</div>
            </div>
            <div className="row">
              <label>
                <b>Transaction Mode:</b>{" "}
              </label>
              <div>{this.state.bill.transactionMode}</div>
            </div>
            <div className="row">
              <label>
                <b>Transaction Date: </b>
              </label>
              <div>{this.state.bill.transactionDate}</div>
            </div>
            <div className="row">
              <label>
                <b>Transaction Status: </b>
              </label>
              <div>{this.state.bill.transactionStatus}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBilling;
/*import React, { Component } from "react";
import BillingService from '../Service/billingService';12a


class ViewBilling extends Component {
  state = {
    bill: {
      billingId: "",
      orderId: "",
      transactionMode:"",
      transactionDate: "",
      transactionStatus: "",
     customerId:""
    },
  };
  componentDidMount() {
    BillingService.getBillById(this.props.match.params.id).then((res) =>
      this.setState({ bill: res.data })
    );
  }

    handleChange = (event) => {
    event.preventDefault();
    const bill = this.state.bill;
    bill[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ bill });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.bill);
     BillingService.updateBill(
      this.state.bill,
      this.props.match.params.id
    ).then((res) => {
      this.props.history.push("/bills");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              BillingId
            </label>
            <input
              type="text"
              className="form-control"
              id="billingid"
              name="billid"
              value={this.state.bill.billingId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
             OrderId
            </label>
            <input
              type="text"
              className="form-control"
              id="orderid"
              name="OrderId"
              value={this.state.bill.orderId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
            TransactionMode
            </label>
            <input
              type="text"
              className="form-control"
              id="transactionmode"
              name="TransactionMode"
              value={this.state.bill.transactionMode}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
            TransactionDate
            </label>
            <input
              type="text"
              className="form-control"
              id="transactiondate"
              name="TransactionDate"
              value={this.state.bill.transactionDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
            TransactionStatus
            </label>
            <input
              type="text"
              className="form-control"
              id="transactionstatus"
              name="TransactionStatus"
              value={this.state.bill.transactionStatus}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
             CustomerId
            </label>
            <input
              type="text"
              className="form-control"
              id="customerid"
              name="CustomerId"
              value={this.state.bill.customerId}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/bills");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ViewBilling;*/
