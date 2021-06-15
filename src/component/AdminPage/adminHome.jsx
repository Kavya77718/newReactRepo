import { Link} from "react-router-dom";
import React from "react";
import './adminHome.css';
import "bootstrap/dist/css/bootstrap.min.css";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <div class="sidebar-container sid">
          <ul class="sidebar-navigation">
            <li class="header" style={{ paddingLeft: "0px" }}>
              <h5>OPERATIONS</h5>
            </li>
            <li>
              <Link to="/Customer">
                   Customer
              </Link>
            </li>
            <li>
              <Link to="/Address">
                  Address
              </Link>
            </li>
            <li>
              <Link to="/Feedback">
                   Feedback
              </Link>
            </li>
            <li>
              <Link to="/Orderdets">
                   Orders
              </Link>
            </li>
            <li>
              <Link to="/Vegetable">
                   Vegetables
              </Link>
            </li>
            <li>
              <Link to="/bill">
                   Bills
              </Link>
            </li>
          </ul>
        </div>

        <div class="content-container">
          <div class="container-fluid">
            <div class="jumbotron jj">
              <h1>ADMIN PANNEL</h1>
              <p>
                <Link
                  to="/"
                  class="btn btn-lg btn-primary"
                  // href="../../components/#navbar"
                  role="button"
                >
                  VIEW CLIENT-PAGE &raquo;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;