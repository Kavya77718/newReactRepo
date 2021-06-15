import React from "react";

import { connect, useSelector } from "react-redux";
import { logoutUser } from "../../action/userActions";

import {
  Key,
  PencilSquare,
  Person,
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

function Navbar({ logoutUser }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  let user = useSelector((state) => state.user.user);

  const handleSubmit = () => {
    let emailId = user.emailId;
    logoutUser(emailId);
  };

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
                    <div className="input-group w-50">
                      {" "}
                      <input
                        type="text"
                        className="form-control search-form"
                        style={{ width: "40%;" }}
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        {" "}
                        <button
                          className="btn btn-primary search-button"
                          type="submit"
                        >
                          {" "}
                          <Search />
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
                        className="btn btn-dark dropdown-toggle dropp" type="button" data-toggle="dropdown" style={{marginTop:"5px"}}><List/></button>
                      <div
                        className="dropdown-menu">
                        <button className="btn dropdown-item indrop" type="button">
                        <a  href="\">
                          Home

                      </a>
                      </button>
                      <button className="btn dropdown-item indrop" type="button">
                        <a  href="\">
                          Categories
                      </a>
                      </button>
                      <button className="btn dropdown-item indrop" type="button">
                        <a  href="/profile">
                          Profile
                      </a>
                      </button>

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
                    </div>&nbsp;&nbsp;&nbsp;
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <a
                        className="nav-link nav-user-img cartLog"
                        href="#"
                        data-toggle="modal"
                        data-target="#login-modal"
                        data-abc="true"
                      >
                        <span className="login">
                          &nbsp;
                          <Key /> &nbsp;
                          <h4 style={{'color':'white'}}>Orders</h4>
                        </span>
                      </a>
                    </Link>

                    <div style={{ display: "flex"}}>
        <Link 
        style={{ display: userIsLoggedIn ? "none" : "block" }}
         className="nav-link cartLog"
          to="/Login"
        >
          <span className="login">
                          &nbsp;
                          <Person/>&nbsp;
                          <h4 style={{'color':'white'}}>Login</h4>

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
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link cartLog"
          to="/Register"
        >
           <span className="login">
                          &nbsp;
                          <PencilSquare/>&nbsp;
                          <h4 style={{'color':'white'}}>Register</h4>
                        </span>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="text">
          <h4>{user && user.firstName}</h4>
        </Link>
        <Link
          onClick={handleSubmit}
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link cartlog"
          to="/"
        ><span className="logout">
        <h4 style={{'color':'white'}}>Logout</h4>
       </span>
        </Link>
      </div>
      </div>
                    
                  </div>
                </div>
              </div>
           
          </section>
        </header>
        </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user.user,
      loggedIn: state.user.loggedIn,
    };
  };


export default connect(mapStateToProps, { logoutUser })(Navbar);