/* eslint-disable import/no-anonymous-default-export */
import {
  MAKE_CONSULTATION,
  MAKE_CONSULTATION_FAIL,
  MAKE_CONSULTATION_REQUEST,
} from "../constants";

// verification consultation reducer
export default (data = {}, action) => {
  switch (action.type) {
    case MAKE_CONSULTATION_REQUEST:
      return { loading: true };
    case MAKE_CONSULTATION:
      return { loading: false, data: action.payload?.data?.message };

    case MAKE_CONSULTATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return data;
  }
};
