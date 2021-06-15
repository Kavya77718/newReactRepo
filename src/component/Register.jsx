import axios from "axios";
import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from '../action/userActions'
const { useState } = React;
function Register({registerUser}) {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    mobileNumber: "",
    emailId: "",
    customerPassword: ""
  });
  const  submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    registerUser(user)
    history.push("/")
  };
  // const postCustomer = async(user)=>{
  //   const res= await axios.post("http://localhost:8080/customer",user)
  //   console.log(res);
  //   if(res.status===200){
  //   history.push('/');
  //   }
  // }

  return (
    <div class="jumbotron">
    <div className="mt-5 ">
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        <div>
          <label className="mt-2 mb-2" for="name" class="form-label">
            {" "}
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
        
          <label className="mt-2 mb-2" for="mobilenumber" class="form-label">
            {" "}
            Mobile number
          </label>
          <input
            type="text"
            class="form-control"
            id="mobilenumber"
            placeholder="Mobile"
            onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
            value={user.mobileNumber}
          />
          <label for="emailId" className="form-label">
          {" "}
            EmailId
          </label>
          <input
            type="emailId"
            class="form-control"
            id="emailId"
            placeholder="emailId"
            onChange={(e) => setUser({ ...user, emailId: e.target.value })}
            value={user.emailId}
          />        
        </div>
        <div class="mb-3 mt-2">
          <label for="password" class="form-label">
            {" "}
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, customerPassword: e.target.value })}
            value={user.customerPassword}
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary button-large btn-block">Register</button>
        </div>
      </form>
    </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}


export default connect(mapStateToProps,{registerUser}) (Register);