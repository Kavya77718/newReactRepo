import './App.css';
import Billing from './components/billing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ViewBilling from './components/viewBilling';
import CreateBilling from './components/createBill';
import UpdateBilling from './components/updateBill';
import Counter from './components/counter';
function App() {
  return (
    <Router>
      <div className="container">
       <div className="App">
         <Switch>
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