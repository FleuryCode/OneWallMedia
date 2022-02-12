const INITIAL_STATE = {
    selectedDay: '',
    didSelectDay: false,
    selectedService: '',
    selectedTime: '',
    name: '',
    email: '',
    phone: ''
}

const bookingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_SELECTED_DATE':
            return {
                ...state,
                selectedDay: action.payload
            }
        case 'SET_DID_SELECT_DAY':
            return {
                ...state,
                didSelectDay: action.payload
            }    
        default:
            return state;
    }
}

export default bookingReducer;