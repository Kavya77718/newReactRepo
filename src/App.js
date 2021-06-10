import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomer from './component/listCustomer';
import AddCustomer from './component/addCustomer';
import ViewCustomer from './component/viewCustomer';
import UpdateCustomer from './component/updateCustomer';
import Feedback from './component/feedback';
import AddFeedback from './component/addFeedback';
import CustomerHomepage from './component/HomePage/customerHomepage';
import Address from './component/address';
import AddAddress from './component/addAddress';
import ViewAddress from './component/viewAddress';
import UpdateAddress from './component/updateAddress';
import AdminHome from './component/AdminPage/adminHome';


function App() {
  return (
    <Router>
              
                <Switch> 
                      <Route path = "/" exact component = {CustomerHomepage}></Route>
                     <div style={{"margin":"20px"}}>                     
                     <Route path = "/admin-component" component = {AdminHome}></Route>
                      <Route path = "/customer" component = {ListCustomer}></Route>
                      <Route path = "/add-customer" component = {AddCustomer}></Route>
                      <Route path ="/view-customers/:customerId" component ={ViewCustomer}></Route>
                      <Route path="/update-customers/:customerId" component = {UpdateCustomer}></Route>
                      <Route path = "/address" component = {Address}></Route>
                      <Route path = "/add-address" component = {AddAddress}></Route>
                      <Route path ="/view-address/:id" component ={ViewAddress}></Route>
                      <Route path="/update-address/:id" component = {UpdateAddress}></Route>
                      <Route path = "/feedback" component = {Feedback}></Route>
                      <Route path = "/add-feedback" component = {AddFeedback}></Route>
                      </div>
                </Switch>
    
    </Router>
  );
}

export default App;
