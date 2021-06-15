import React from "react";
import { NavLink, Route } from 'react-router-dom';
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
  House,
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
                  <a href="/" className="brand-wrap headANDlogo" data-abc="true">
                    <div classNameName="slogan" style={{"marginRight":"50px"}}>
                      <span className="logo medtitle" style={{ "fontFamily": "-moz-initial" }}>Veggies</span>{" "}
                    </div>

                  </a>{" "}
                </Link>
              </div>
              <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
            
              <Link to="/" style={{ textDecoration: "none" }}>
                  <a href="" className="brand-wrap headANDlogo" data-abc="true">
                    <div classNameName="slogan" style={{"marginRight":"555px"}}>
                    <span className="login">
                        &nbsp;
                        <House />&nbsp;
                        <h4 style={{ 'color': 'white' }}>Home</h4>
                      </span>
                      {/* <span className="logo medtitle" style={{"fontSize":"14" }} >
                     
  Home</span>{" "}*/}
                    </div> 

                  </a>{" "}
                </Link>
              </div>

              <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                <div className="d-flex justify-content-end">
                  <button className="btt">
                    {" "}
                    <div className="blink_me" style={{ 'color': 'white' }}><h4>PRODUCTS</h4></div>
                  </button>
                  
                  <div style={{ display: "flex" }}>
                  <Link
                      style={{ display: userIsLoggedIn ? "block" : "none"}}
                      className="nav-link cartLog"
                      to="/profile"
                    >
                      <span className="login">
                        &nbsp;
                       
                        <h4 style={{ 'color': 'white' }}>Profile</h4>
                      </span>
                    </Link>
                    <Link
                      style={{ display: userIsLoggedIn ? "none" : "block" }}
                      className="nav-link cartLog"
                      to="/Login"
                    >
                      <span className="login">
                        &nbsp;
                        <Person />&nbsp;
                        <h4 style={{ 'color': 'white' }}>Login</h4>
                      </span>
                    </Link>
                    <Link
                      style={{ display: userIsLoggedIn ? "none" : "block" }}
                      className="nav-link cartLog"
                      to="/Register"
                    >
                      <span className="login">
                        &nbsp;
                        <PencilSquare />&nbsp;
                        <h4 style={{ 'color': 'white' }}>Register</h4>
                      </span>
                    </Link>
                    <Link
                      style={{ display: userIsLoggedIn ? "none" : "block" }}
                      className="text"
                    >
                      <h4>{user && user.FirstName}</h4>
                    </Link>
                    <Link
                      onClick={handleSubmit}
                      style={{ display: userIsLoggedIn ? "block" : "none" }}
                      className="nav-link cartlog"
                      to="/"
                    ><span className="logout">
                        <h4 style={{ 'color': 'white' }}>Logout</h4>
                      </span>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <a
                      className="nav-link nav-user-img cartLog"
                      href="#"
                      data-toggle="modal"
                      data-target="#login-modal"
                      data-abc="true"
                    >
                      <span className="login">
                        &nbsp;
                        <Cart /> &nbsp;
                        <h4 style={{ 'color': 'white' }}>Cart</h4>
                      </span>
                    </a>
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
}
export default connect(mapStateToProps, { logoutUser })(Navbar);
