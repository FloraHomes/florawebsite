/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

export default (loginData = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      localStorage.setItem(
        "FloraLogin",
        JSON.stringify(action.payload?.data)
      );
      return { loading: false, loginData: action.payload?.data };
    case LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return loginData;
  }
};
