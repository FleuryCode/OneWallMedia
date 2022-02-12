import { combineReducers } from "redux";
import bookingReducer from "./booking-info/booking.reducer";

export default combineReducers({
    booking: bookingReducer
});