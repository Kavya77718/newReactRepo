import { combineReducers } from "redux";
//import shopReducer from "./shopreducer/shopping_reducer";
//import vegetable_reducer from "../reducers/vegetable_reducer";
import vegetable_reducer from "../reducer/vegetable_reducer";
//import userReducer from "../reducers/userReducer";
const rootReducer = combineReducers({
  //shop: shopReducer,
  vegetable: vegetable_reducer,
  //user: userReducer,
});
export default rootReducer;
