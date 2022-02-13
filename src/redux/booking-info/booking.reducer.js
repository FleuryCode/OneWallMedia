import { BookingTypes } from "./booking.types";

const INITIAL_STATE = {
    selectedDay: '',
    didSelectDay: false,
    selectedService: 'Service',
    didSelectService: false,


    selectedTime: '',
    name: '',
    email: '',
    phone: ''
}

const bookingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case BookingTypes.SET_SELECTED_DATE:
            return {
                ...state,
                selectedDay: action.payload
            }
        case BookingTypes.SET_DID_SELECT_DAY:
            return {
                ...state,
                didSelectDay: action.payload
            }   
        case BookingTypes.SET_SELECTED_SERVICE:
            return {
                ...state,
                selectedService: action.payload
            }
        case BookingTypes.SET_DID_SELECT_SERVICE:
            return {
                ...state,
                didSelectService: action.payload
            }
        default:
            return state;
    }
}

export default bookingReducer;