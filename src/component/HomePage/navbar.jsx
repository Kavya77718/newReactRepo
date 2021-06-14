import React from "react";

import {
  List,
  Bell,
  Cart,
  HeartFill,
  PersonCircle,
  BasketFill,
  Search,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom"; 

// import "./script";
// import  from "react-bootstrap";
// import { Navbar } from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header className="section-header hh">
          <section className="header-main border-bottom sec">
            <div className="container-fluid">
              <div className="row align-items-center box">
                <div className="col-lg-3 col-sm-4 col-md-4 col-5">
                  {" "}
                                 
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" className="brand-wrap headANDlogo" data-abc="true">
                     
                      <div classNameName="slogan">
                        <span className="logo medtitle" style={{"fontFamily":"cursive"}}>Veggies</span>{" "}<br/>
                        <span id="slo">
                          Organic Vegetables{" "}
                          <HeartFill style={{ color: "#393e46" }} />
                        </span>
                      </div>
                     
                    </a>{" "}
                  </Link>
                </div>
                <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <form action="#" className="search-wrap">
                    <div className="input-group w-100">
                      {" "}
                      <input
                        type="text"
                        className="form-control search-form"
                        style={{ width: "55%;" }}
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        {" "}
                        <button
                          className="btn btn-primary search-button"
                          type="submit"
                        >
                          {" "}
                          {/* <i className="fa fa-search"> */}
                          <Search />
                          {/* </i>{" "} */}
                        </button>{" "}
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                  <div className="d-flex justify-content-end">
                    <button className="btt">
                      {" "}
                      <div className="blink_me">Veggies</div>
                    </button>
                    <div className="dropdown drop">
                      <button
                        className="btn dropdown-toggle "
                        type="button"
                        // id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                       <List/>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <button className="dropdown-item indrop" type="button">
                          Home
                        </button>
                        <button className="dropdown-item indrop" type="button">
                          Category
                        </button>
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                        <button className="dropdown-item indrop" type="button">
                          Profile
                        </button>
                        </Link>
                      </div>
                    </div>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login">
                          <Cart />
                          &nbsp; Cart
                        </span>
                      </a>
                    </Link>
                    {/* <span className="vl"></span>{" "} */}
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login">
                          <PersonCircle />
                          &nbsp; LOGIN
                        </span>
                      </a>
                    </Link>                                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default Navbar;
