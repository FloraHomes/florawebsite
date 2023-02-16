import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";
import * as api from "../api";

const loginAction = (loginDetails) => async (dispatch) => {

  
  
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const {data}  = await api.networkCall({method:'POST',requestBody:loginDetails,path:'login'});
     
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.response?.data?.responseMessage || error.message,
    });
  }
};

export default loginAction;
