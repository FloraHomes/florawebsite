/* eslint-disable import/no-anonymous-default-export */
import { BOOKING_SUCCESS, BOOKING_REQUEST, BOOKING_FAIL } from "../constants";

export default (bookings = {}, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { loading: true };
    case BOOKING_SUCCESS:
      return { loading: false, bookings: action.payload?.data?.message };
      // (window.location.href = "https://www.florahomesgc.com/thank-you")

    case BOOKING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return bookings;
  }
};
