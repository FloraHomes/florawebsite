import { BOOKING_FAIL, BOOKING_REQUEST, BOOKING_SUCCESS } from "../constants";
import * as api from "../api";

const booksAction = (bookingData) => async (dispatch) => {
  console.log({ bookingData });
  try {
    dispatch({
      type: BOOKING_REQUEST,
    });
    const { data } = await api.networkCall({
      method: "POST",
      requestBody: bookingData,
      path: "order-investment-book",
    });

    dispatch({
      type: BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_FAIL,
      payload: error?.response?.data?.responseMessage || error.message,
    });
  }
};

export default booksAction;
