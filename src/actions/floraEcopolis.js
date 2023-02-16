import {
  FLORAECOPOLIS_SUCCESS,
  FLORAECOPOLIS_REQUEST,
  FLORAECOPOLIS_FAIL,
} from "../constants";
import * as api from "../api";

const floraEcopolisAction = (floraEcopolisData) => async (dispatch) => {
  console.log({ floraEcopolisData });
  try {
    dispatch({
      type: FLORAECOPOLIS_REQUEST,
    });
    const { data } = await api.networkCall({
      method: "POST",
      requestBody: floraEcopolisData,
      path: "floracity-ecopolis",
    });

    dispatch({
      type: FLORAECOPOLIS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FLORAECOPOLIS_FAIL,
      payload: error?.response?.data?.responseMessage || error.message,
    });
  }
};

export default floraEcopolisAction;
