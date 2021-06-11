import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../action/userActions";

function Navbar({ logoutUser }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  let user = useSelector((state) => state.user.user);

  // let emailId =  useSelector((state)=>state.user.user.emailId)

  const handleSubmit = () => {
    let emailId = user.emailId;
    logoutUser(emailId);
  };

  return (
    <nav
      style={{ alignItems: "center" }}
      className="navbar navbar-navbar-expand-xxl navbar-light bg-light"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="navbar-brand">
          <h2>Veggies App</h2>
        </Link>
        <Link className="nav-link" to="/">
          <h3>Home</h3>
        </Link>
        <form className="form-inline my-2 my-lg-0 ">
          <div className="container-md d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/login"
        >
          <h4>Login</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/register"
        >
          <h4>Register</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="text"
        >
          <h4>{user && user.customerName}</h4>
        </Link>
        <Link
          onClick={handleSubmit}
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link"
          to="/"
        >
          logout
        </Link>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);