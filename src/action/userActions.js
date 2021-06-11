import { actionTypes } from "../Service/userTypes";
import axios from "axios";

export const loginUser = (loginDetails) => async (dispatch) => {
  try {
   
    const res = await axios.post(
      "http://localhost:8080/customer/login",
      loginDetails
    );
    console.log("response of dispatch", res);
    dispatch({
      type: actionTypes.USER_LOGIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: actionTypes.LOGIN_FAIL, payload: err });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {

    const res = await axios.post("http://localhost:8080/customer", user);
    console.log("response of dispatch", res);
    dispatch({
      type: actionTypes.USER_REGISTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: actionTypes.USER_REGISTER_FAIL, payload: err });
  }
};


export const logoutUser = (emailId) => async (dispatch) => {
  try {
    const body = JSON.stringify(emailId)
    console.log(body)
     const url = `http://localhost:8080/customer/logout/${encodeURI(emailId)}`
    
    console.log(url);

   const res= getPost(url).then((res)=>{
      console.log("response of dispatch", res);
    }).catch((err)=>{
      console.error(err);
    })
    dispatch({
      type: actionTypes.USER_LOGOUT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: actionTypes.USER_REGISTER_FAIL, payload: err });
  }
};
export const loadUser = (emailId) => async (dispatch) => {
  try{
    const url = `http://localhost:8080/customer/logout/${encodeURI(emailId)}`
    const res= getCust(url).then(response=>{
      console.log("response of dispatch", response);
    }).catch(err=>{
      console.error(err);
    })
    dispatch({
      type: actionTypes.LOAD_USER,
      payload: res.data,
    });
  }catch(err){
    dispatch({ type: actionTypes.USER_REGISTER_FAIL, payload: err });
  }
 
}
export const getPost = async(funcParamURL) => {
  console.log(funcParamURL)
  const res= await axios.post(`${funcParamURL}`);
   return res;
 }
 export const getCust = async(funcParamURL) => {
  console.log(funcParamURL)
  const res= await axios.get(`${funcParamURL}`);
   return res;
 }