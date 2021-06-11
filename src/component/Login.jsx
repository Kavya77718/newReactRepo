import React from "react";
import axios from 'axios'
import { connect } from "react-redux";
import {  useHistory } from "react-router";
import { loginUser } from "../action/userActions";
const { useState } = React;

function Login({user,loginUser}) {
const history= useHistory();
  const [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: "",
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    // loginUser(loginDetails);
 loginUser(loginDetails)
 history.push("/add-bills");

  };
  return (
    <div class="body">
    <div className="mt-5 ">
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
      <h2>Email Id</h2>
        <div>
          <label for="emailId" className="sr-only">
          emailId
          </label>
          <input
            type="username"
            class="form-control"
            id="emailId"
            placeholder="emailId"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, emailId: e.target.value })
            }
            value={loginDetails.emailId}
          />
        </div>
        <div class="mb-3 mt-2">
          <label for="password" class="form-label">
            {" "}
            <h2>Password</h2>
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={loginDetails.password}
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary button-large btn-block">Sign In</button>

        </div>
      </form>
    </div>
    </div>  );
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}

//const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: () => dispatch(loginUser())
//   }
// }

export default connect(
  mapStateToProps,
  {loginUser},
) (Login)