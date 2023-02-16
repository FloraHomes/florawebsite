import { combineReducers } from "redux";

import data from "./verificationConsultationReducer";
import loginData from "./loginReducer";
import regMessage from "./registrationReducer";
import bookings from "./bookReducer";

export default combineReducers({
  verificationConsultation: data,
  loginData,
  bookingData: bookings,
  regFeedback: regMessage,
});
