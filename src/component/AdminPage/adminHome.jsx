import { Link} from "react-router-dom";
import React from "react";
import './adminHome.css';
import "bootstrap/dist/css/bootstrap.min.css";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <div class="sidebar-container sid">
          <div class="sidebar-logo">
            <h4>OnlineVegetableApp</h4>
          </div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                quibusdam dolores aperiam eaque porro odit maxime mollitia illum
                voluptate. Accusamus placeat alias vitae esse fugit ipsam quas,
                sit nobis quaerat!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                quas dicta voluptas molestiae repudiandae dolorem. Dolor facere
                optio esse dolores consectetur dolore, velit eaque, repudiandae
                voluptatibus odio animi vel consequuntur!
              </p>
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