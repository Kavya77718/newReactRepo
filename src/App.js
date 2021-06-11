import logo from './logo.svg';
import './App.css';
import Vegetable from './components/Vegetable';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Createvegetable from './components/Createvegetable';
import UpdateVegetable from './components/UpdateVegetable';
import ViewVegetable from './components/ViewVegetable';
import Cart from './components/Cart';
import VegetablePage from './components/VegetablePage';
import VegetableHome from './components/VegetableHome';
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

import Billing from './components/billing';
import ViewBilling from './components/viewBilling';
import CreateBilling from './components/createBill';
import UpdateBilling from './components/updateBill';
import Counter from './components/counter';
import Login from './components/Login';
import Register from './components/Register';
//import BillingForm from './components/billingForm';
import Navbar from './components/Navbar';
let emailId
if(localStorage.getItem('emailId')){
  emailId=localStorage.getItem('emailId')
  console.log(emailId)
}



function App() {
  return (
  
    <Router>
    <HeaderComponent/>
              <div className="container">
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
                      <Route path= "/" exact component = {Vegetable}></Route>
                    <Route path= "/vegetable" exact component = {Vegetable}></Route>
                    <Route path= "/Create-vegetable" exact component = {Createvegetable}></Route>
                    <Route path="/update/:vegId" exact component = {UpdateVegetable}></Route>
                    <Route path="/View-Vegetable/:vegId" exact component = {ViewVegetable}></Route>
                    <Route path= "/cart/" exact component = {Cart}></Route>
                    <Route path= "/vegetablepage/" exact component = {VegetablePage}></Route>
                    <Route path= "/vegetablehome/" exact component = {VegetableHome}></Route>
                    
            <Route exact path='/login' exact component={Login}/>
            <Route exact path='/register' exact component={Register}/>
            <Route path="/counter" exact component={Counter}></Route>
            <Route path="/" exact component={Billing}></Route>
            <Route path ="/view-bills/:billingId" exact component ={ViewBilling}></Route>
            <Route path="/add-bills" exact component = {CreateBilling}></Route>
            <Route path="/update-bills/:billingId" exact component = {UpdateBilling}></Route>
                    <Vegetable/>
                      </div>
                </Switch>
              </div>
              <FooterComponent/>
          
    </Router>
  );
}

export default App;
