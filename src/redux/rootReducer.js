import { combineReducers } from "redux";
import shopReducer from "../reducer/shopping_reducer";
//import vegetable_reducer from "../reducer/vegetable_reducer";
import {vegetableReducer,selectedvegetableReducer} from "../reducer/vegetable_reducer"
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  vegetable: vegetableReducer,
  veg: selectedvegetableReducer,
  user: userReducer,

});
export default rootReducer;
