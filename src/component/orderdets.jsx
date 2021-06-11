import React, { Component } from "react";
import OrderService from "../services/orderService";
import { Link } from "react-router-dom";
import _ from "lodash";
import { render } from "react-dom";

class Orderdets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderdets: [],
      sortColumn: { path: "title", order: "asc" },
      search: "",
      orderdet: {
        orderNo: "",
        totalAmount: "",
        orderDate: "",
        status: "",
      },
    };
    this.updateOrder = this.updateOrder.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.viewOrder = this.viewOrder.bind(this);
  }

  addOrder() {
    this.props.history.push("/add-order");
  }

  updateOrder(orderNo) {
    this.props.history.push(`/update-order/${orderNo}`);
  }

  viewOrder(orderNo) {
    this.props.history.push(`/view-order/${orderNo}`);
  }

  deleteOrder(orderNo) {
    OrderService.deleteOrder(orderNo).then((res) => {
      this.setState({
        orderdets: this.state.orderdets.filter(
          (orderdet) => orderdet.orderNo !== orderNo
        ),
      });
    });
  }

  componentDidMount() {
    OrderService.getAllOrders().then((res) => {
      this.setState({ orderdets: res.data });
    });
  }

  orderById = () => {
    let orderdets = [];
    OrderService.getOrderById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      orderdets = res.data;
    });
    this.setState({ orderdets });
    console.log("** orderByOrder" + this.state.orderdet);
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
    const { search, sortColumn, orderdets } = this.state;
    var sorted = [];
    if (search) {
      sorted = orderdets.filter((orderdet) => orderdet.orderNo == search);
    } else {
      sorted = _.orderBy(
        this.state.orderdets,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.orderdets);
    console.log("Sorted..", sorted);
    return (
      <div>
        <div className="w-75 mt-5 mx-auto">
          <div className="d-flex justify-content-between">
            <div className="row">
              <button className="btn btn-info" onClick={this.addOrder}>
                Add Order
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
                <th>orderNo</th>
                <th>totalAmount</th>
                <th>orderDate</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orderdets.map((orderdet) => (
                <tr key={orderdet.orderNo}>
                  <td>{orderdet.orderNo}</td>
                  <td>{orderdet.totalAmount}</td>
                  <td>{orderdet.orderDate}</td>
                  <td>{orderdet.status}</td>
                  <td>
                    <button
                      onClick={() => this.deleteOrder(orderdet.orderNo)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewOrder(orderdet.orderNo)}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.updateOrder(orderdet.orderNo)}
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

export default Orderdets;
