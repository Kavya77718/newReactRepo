import React, { Component } from 'react';
import ViewCustomer from './viewCustomer';
import ListCustomer from './listCustomer';
import AddFeedback from './addFeedback';
import UserFeedback from '../component/userFeedback';
import AddUserFeedback from '../component/AddUserFeedback';
class CustomerProfile extends Component {
    render() { 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </link>
        return (
            <div> 
    
<body data-spy="scroll" data-target=".navbar" data-offset="50" style={{"position":"relative"}}>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#section3">My Feedback</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Feedback
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#section41">Add Feedback</a>
        <a class="dropdown-item" href="#section42">View Feedback</a>
      </div>
    </li>
  </ul>
</nav>
<br></br>
<br></br>
<div id="section1" class="container-fluid "  style={{"padding-top":"70px;padding-bottom:70px", "border-style":"solid black"}}>
  <h1>Section 1</h1>
</div>

<div id="section41" class="container-fluid "  style={{"padding-top":"70px;padding-bottom:70px"}}>
  <h1>Add Feedback</h1>
  <AddUserFeedback/>
</div>
<div id="section42" class="container-fluid "  style={{"padding-top":"70px;padding-bottom:70px"}}>
  <h1>view Feedback</h1>
 <UserFeedback/>
</div>

</body>
</div>


)
}
}
export default CustomerProfile;



