import {
  REGISTRATION_FAIL,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../constants";
import * as api from "../api";

const Registration = (registrationDetails) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    const { data } = await api.networkCall({method:api.RequestMethod.POST,path:'registration',requestBody:registrationDetails});
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRATION_FAIL,
      payload: error?.response?.data?.responseMessage || error.message,
    });
  }
};

export default Registration;
