import React, { Component } from "react";
import PaymentService from "../services/paymentService";
import { Link } from "react-router-dom";
import _ from "lodash";
import { render } from "react-dom";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      sortColumn: { path: "title", order: "asc" },
      search: "",
      payment: {
        paymentId: "",
        paymentType: "",
        itemTotal: "",
        shippingFee: "",
        totalPrice: "",
        transactionStatus: "",
      },
    };
    this.updatePayment = this.updatePayment.bind(this);
    this.addPayment = this.addPayment.bind(this);
    this.deletePayment = this.deletePayment.bind(this);
    this.viewPayment = this.viewPayment.bind(this);
  }

  addPayment() {
    this.props.history.push("/add-payment");
  }

  updatePayment(paymentId) {
    this.props.history.push(`/update-payment/${paymentId}`);
  }

  viewPayment(paymentId) {
    this.props.history.push(`/view-payment/${paymentId}`);
  }

  deletePayment(paymentId) {
    PaymentService.deletePayment(paymentId).then((res) => {
      this.setState({
        payments: this.state.payments.filter(
          (payment) => payment.paymentId !== paymentId
        ),
      });
    });
  }

  componentDidMount() {
    PaymentService.getAllPayments().then((res) => {
      this.setState({ payments: res.data });
    });
  }

  paymentById = () => {
    let payments = [];
    PaymentService.getPaymentById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      payments = res.data;
    });
    this.setState({ payments });
    console.log("** paymentById" + this.state.payment);
  };

  handleSort = (path) => {
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, payments } = this.state;
    var sorted = [];
    if (search) {
      sorted = payments.filter((payment) => payment.paymentId == search);
    } else {
      sorted = _.orderBy(
        this.state.payments,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.payments);
    console.log("Sorted..", sorted);
    return (
      <div>
        <div className="w-80 mt-5 mx-auto">
          <div className="d-flex justify-content-between">
            <div className="row">
              <button className="btn btn-info" onClick={this.addPayment}>
                Add Payment
              </button>
            </div>
            <form class="form-inline my-2 my-lg-0">
              <input
                className="form-control ml-auto"
                type="search"
                placeholder="Search by Id"
                aria-label="Search"
                onChange={this.onChange}
              />
            </form>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>paymentId</th>
                <th>paymentType</th>
                <th>itemTotal</th>
                <th>shippingFee</th>
                <th>totalPrice</th>
                <th>transactionStatus</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.payments.map((payment) => (
                <tr key={payment.paymentId}>
                  <td>{payment.paymentId}</td>
                  <td>{payment.paymentType}</td>
                  <td>{payment.itemTotal}</td>
                  <td>{payment.shippingFee}</td>
                  <td>{payment.totalPrice}</td>
                  <td>{payment.transactionStatus}</td>
                  <td>
                    <button
                      onClick={() => this.deletePayment(payment.paymentId)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.viewPayment(payment.paymentId)}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.updatePayment(payment.paymentId)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Payments;