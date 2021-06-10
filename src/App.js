import './App.css';
import Billing from './components/billing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
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
      <Navbar/>
      <div className="container">
       <div className="App">
         <Switch>
            
            <Route exact path='/login' exact component={Login}/>
            <Route exact path='/register' exact component={Register}/>
            <Route path="/counter" exact component={Counter}></Route>
            <Route path="/" exact component={Billing}></Route>
            <Route path ="/view-bills/:billingId" exact component ={ViewBilling}></Route>
            <Route path="/add-bills" exact component = {CreateBilling}></Route>
            <Route path="/update-bills/:billingId" exact component = {UpdateBilling}></Route>
          
         </Switch>
        </div>
        </div>
      </Router>
    
  );
}

export default App;