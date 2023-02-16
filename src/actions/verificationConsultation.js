import * as api from "../api";

// import { RequestMethod } from "../api";
import { RequestMethod } from "../api";
import {
  MAKE_CONSULTATION,
  MAKE_CONSULTATION_FAIL,
  MAKE_CONSULTATION_REQUEST,
} from "../constants";

// verification consultation action
const makeConsultation = (consultationDetails) => async (dispatch) => {
  try {
    dispatch({
      type: MAKE_CONSULTATION_REQUEST,
    });
    const { data } = await api.networkCall({
      method: RequestMethod.POST,
      requestBody: consultationDetails,
      path: "verification",
    });
    dispatch({
      type: MAKE_CONSULTATION,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MAKE_CONSULTATION_FAIL,
      payload: error?.response?.data?.responseMessage || error.message,
    });
  }
};
export default makeConsultation;
