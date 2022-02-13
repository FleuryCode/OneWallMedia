import { BookingTypes } from "./booking.types";

const INITIAL_STATE = {
    selectedDay: '2020-03-16',
    didSelectDay: false,
    selectedService: 'Service',
    serviceDuration: '',
    didSelectService: false,
    selectedTime: '',
    didSelectTime: false,

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
        case BookingTypes.SET_SERVICE_DURATION:
        return {
            ...state,
            serviceDuration: action.payload
        }
        case BookingTypes.SET_DID_SELECT_SERVICE:
            return {
                ...state,
                didSelectService: action.payload
            }
        case BookingTypes.SET_SELECTED_TIME:
            return {
                ...state,
                selectedTime: action.payload
            }
        case BookingTypes.SET_DID_SELECT_TIME:
            return {
                ...state,
                didSelectTime: action.payload
            }
        case BookingTypes.SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case BookingTypes.SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case BookingTypes.SET_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state;
    }
}

export default bookingReducer;