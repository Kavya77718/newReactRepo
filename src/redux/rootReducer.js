import { combineReducers } from "redux";
import shopReducer from "../reducer/shopping_reducer";
import productReducer from '../reducer/product_Reducer'
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  product: productReducer,
  user: userReducer,

});
export default rootReducer;
