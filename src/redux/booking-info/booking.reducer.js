const INITIAL_STATE = {
    selectedDay: 'testDayOne',
    selectedService: 'testServiceOne',
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
        default:
            return state;
    }
}

export default bookingReducer;