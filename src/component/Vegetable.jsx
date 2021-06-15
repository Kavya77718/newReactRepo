import React, { Component } from "react";
import VegetableService from "../services/vegetableService";
//import { Link } from "react-router-dom";

class Vegetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetables: [], 
      search: "",
    };

    this.Createvegetable = this.Createvegetable.bind(this);
    this.update = this.update.bind(this);
  }
  viewvegetableById(vegId) {
    this.props.history.push(`/view-vegetable/${vegId}`);
  }

  deleteByvegId(vegId) {
    VegetableService.deleteByvegId(vegId).then((res) => {
      this.setState({
        vegetables: this.state.vegetables.filter(
          (vegetable) => vegetable.vegId !== vegId
        ),
      });
    });
  }

  Createvegetable = () => {
    this.props.history.push("/Create-vegetable");
  };
  viewVegetableByName = () => {
    let vegetables = [];
    VegetableService.viewVegetableByName(this.state.search).then((res) => {
      vegetables = res.data;
      this.setState({ vegetables });
      console.log(this.state.vegetables);
    });
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  update(vegId) {
    this.props.history.push(`/update/${vegId}`);
  }

  componentDidMount() {
    VegetableService.getAllVegetables().then((res) => {
      console.log("data: ", res.data);
      this.setState({ vegetables: res.data });
    });
    console.log("vegetables: ", this.state.vegetables);
  }

  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control ml-auto"
            type="search"
            name="name"
            placeholder="Search by name"
            aria-label="Search"
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={this.viewVegetableByName}
          >
            {" "}
            Search
          </button>
        </form>

        <h2 className="text-center">Vegetables List</h2>
        <div className="row">
          <td type="button" onClick={this.Createvegetable}>
            <i className="fa fa-plus"></i>ADD
          </td>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vegetable Name</th>
                <th>Vegetable Price</th>
                <th>Vegetable Type</th>
                <th>Vegetable Quantity</th>
                <th>Description</th>
                <th colSpan="3"> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.vegetables.map((vegetable) => (
                <tr key={vegetable.vegId}>
                  <td>{vegetable.name}</td>
                  <td>{vegetable.price}</td>
                  <td>{vegetable.type}</td>
                  <td>{vegetable.quantity}</td>
                  <td>{vegetable.description}</td>
                  <td
                    style={{ color: "red" }}
                    onClick={() => this.deleteByvegId(vegetable.vegId)}
                  >
                    <i className="fa fa-trash"></i>
                  </td>
                  <td
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.update(vegetable.vegId)}
                  >
                    <i className="fa fa-edit"></i>
                  </td>
                  <td
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.viewvegetableById(vegetable.vegId)}
                  >
                    <i className="fa fa-eye"></i>
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
export default Vegetable;
