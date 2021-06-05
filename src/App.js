import logo from './logo.svg';
import './App.css';
import Vegetable from './components/Vegetable';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Createvegetable from './components/Createvegetable';
import UpdateVegetable from './components/UpdateVegetable';
import ViewVegetable from './components/ViewVegetable';

function App() {
  return (
    <div>
      <Router>
           <HeaderComponent/>
              <div className="container">
                <Switch>
                    <Route path= "/" exact component = {Vegetable}></Route>
                    <Route path= "/vegetable" exact component = {Vegetable}></Route>
                    <Route path= "/Create-vegetable" exact component = {Createvegetable}></Route>
                    <Route path="/update/:vegId" exact component = {UpdateVegetable}></Route>
                    <Route path="/ViewVegetable/:vegId" exact component = {ViewVegetable}></Route>
                    <Vegetable/>
                </Switch>
              </div>
           <FooterComponent/> 
      </Router>
    </div>
  );
}

export default App;
