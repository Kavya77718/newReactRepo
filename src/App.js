import logo from "./logo.svg";
import "./App.css";
import Vegetable from "./component/Vegetable";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Createvegetable from "./component/Createvegetable";
import UpdateVegetable from "./component/UpdateVegetable";
import ViewVegetable from "./component/ViewVegetable";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCustomer from "./component/listCustomer";
import AddCustomer from "./component/addCustomer";
import ViewCustomer from "./component/viewCustomer";
import UpdateCustomer from "./component/updateCustomer";
import Feedback from "./component/feedback";
import AddFeedback from "./component/addFeedback";
import CustomerHomepage from "./component/HomePage/customerHomepage";
import Address from "./component/address";
import AddAddress from "./component/addAddress";
import ViewAddress from "./component/viewAddress";
import UpdateAddress from "./component/updateAddress";
import AdminHome from "./component/AdminPage/adminHome";

import Billing from "./component/billing";
import ViewBilling from "./component/viewBilling";
import CreateBilling from "./component/createBill";
import UpdateBilling from "./component/updateBill";
import Counter from "./component/counter";
import Login from "./component/Login";
import Register from "./component/Register";
//import BillingForm from './component/billingForm';
import Order from "./component/order";
import OrderDetail from "./component/OrderDetail";

import Orderdets from "./component/orderdets";
import ViewOrder from "./component/viewOrder";
import CreateOrder from "./component/createOrder";
import UpdateOrder from "./component/updateOrder";
import ViewPayment from "./component/viewPayment";
import CreatePayment from "./component/createPayment";
import Payments from "./component/payments";
import UpdatePayment from "./component/updatePayment";
import Navbar from "./component/HomePage/navbar";
import {loadUser} from './action/userActions'
import {useEffect} from 'react'
import store from "./redux/store";
import CustomerProfile from "./component/customerProfile";
import AddUserFeedback from "./component/AddUserFeedback";
import UserFeedback from "./component/userFeedback";
import VegetableDetail from './component/vegetableDetail';
import VegetableListing from './component/vegetableListing';
import PaymentPage from './component/PaymentPage';
let emailId;
if (localStorage.getItem("emailId")) {
  emailId = localStorage.getItem("emailId");
  console.log(emailId);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser(emailId))
    
  }, [])
  return (
    <Router>

      <Navbar/>
        <Switch>
          <Route path="/" exact component={CustomerHomepage}></Route>
          <div style={{ margin: "20px" }}>
            <Route path="/admin-component" component={AdminHome}></Route>
            <Route path="/customer" component={ListCustomer}></Route>
            <Route path="/add-customer" component={AddCustomer}></Route>
            <Route
              path="/view-customers/:customerId"
              component={ViewCustomer}
            ></Route>
            <Route
              path="/update-customers/:customerId"
              component={UpdateCustomer}
            ></Route>
            <Route path="/address" component={Address}></Route>
            <Route path="/add-address" component={AddAddress}></Route>
            <Route path="/view-address/:id" component={ViewAddress}></Route>
            <Route path="/update-address/:id" component={UpdateAddress}></Route>
            <Route path="/feedback1" component={Feedback}></Route>
            <Route path="/add-feedback" component={AddFeedback}></Route>
            <Route path="/" exact component={Vegetable}></Route>
            <Route path="/vegetable" exact component={Vegetable}></Route>
            <Route path="/profile" exact component={CustomerProfile}></Route>
            <Route path="/userFeedback" exact component={UserFeedback}></Route>
            <Route path="/feedback" exact component={AddUserFeedback}></Route>
            <Route
              path="/Create-vegetable"
              exact
              component={Createvegetable}
            ></Route>
            <Route
              path="/update/:vegId"
              exact
              component={UpdateVegetable}
            ></Route>
            <Route
              path="/View-Vegetable/:vegId"
              exact
              component={ViewVegetable}
            ></Route>
            <Route path="/cart/" exact component={Cart}></Route>
            <Route exact path="/login" exact component={Login} />
            <Route exact path="/register" exact component={Register} />
            <Route path="/counter" exact component={Counter}></Route>
            <Route path="/bill" exact component={Billing}></Route>
            <Route
              path="/view-bills/:billingId"
              exact
              component={ViewBilling}
            ></Route>
            <Route path="/add-bills" exact component={CreateBilling}></Route>
            <Route
              path="/update-bills/:billingId"
              exact
              component={UpdateBilling}
            ></Route>

            <Route path="/orderdets" exact component={Orderdets}></Route>
            <Route path="/" exact component={Orderdets}></Route>
            <Route
              path="/view-order/:orderNo"
              exact
              component={ViewOrder}
            ></Route>
            <Route path="/add-order" exact component={CreateOrder}></Route>
            <Route
              path="/update-order/:orderNo"
              exact
              component={UpdateOrder}
            ></Route>

            <Route path="/payments" exact component={Payments}></Route>
            <Route path="/" exact component={Payments}></Route>
            <Route
              path="/view-payment/:paymentId"
              exact
              component={ViewPayment}
            ></Route>
            <Route path="/add-payment" exact component={CreatePayment}></Route>
            <Route
              path="/update-payment/:paymentId"
              exact
              component={UpdatePayment}
            ></Route>
            <Route path="/checkout" exact component={Order}></Route>
            <Route path="/veglisting" exact component={VegetableListing}></Route>
            <Route path="/vegetable/:vegId" exact component={VegetableDetail}></Route>
            <Route path="/checkout" exact component={Order}></Route>
          <Route path="/myorders" exact component={OrderDetail}></Route>
          <Route path="/paymentPage" exact component={PaymentPage}></Route>
          </div>
        </Switch>
      
    
    </Router>
  );
}

export default App;