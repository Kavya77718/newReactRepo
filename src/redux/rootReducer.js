import {combineReducers} from 'redux'
import userReducer from '../reducer/userReducer';
const rootReducer = combineReducers({
    //shop: shopReducer,
    //product: productReducer,
    user: userReducer
});
export default rootReducer;