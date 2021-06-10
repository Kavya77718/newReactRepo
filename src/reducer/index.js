import counterReducer from "../reducer/counter_reducer";
import { combineReducers } from "redux";

// combine all reducers using combinerReducer
const allReducers = combineReducers({
  counter: counterReducer,
});
export default allReducers;