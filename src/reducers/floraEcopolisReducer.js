/* eslint-disable import/no-anonymous-default-export */
import { useHistory } from "react-router-dom";
import {
  FLORAECOPOLIS_SUCCESS,
  FLORAECOPOLIS_REQUEST,
  FLORAECOPOLIS_FAIL,
} from "../constants";

export default (floraEcopolis = {}, action) => {
  const history = useHistory();
  switch (action.type) {
    case FLORAECOPOLIS_REQUEST:
      return { loading: true };
    case FLORAECOPOLIS_SUCCESS:
      return { loading: false, floraEcopolis: action.payload?.data?.message };
      // (window.location.href =
      //   "https://www.florahomesgc.com/thank-you-for-submission")

    case FLORAECOPOLIS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return floraEcopolis;
  }
};
