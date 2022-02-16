import { BookingTypes } from "./booking.types";

export const setSelectedDate = (selectedDate) => ({
    type: BookingTypes.SET_SELECTED_DATE,
    payload: selectedDate
});

export const setDidSelectDay = (didSelectDay) => ({
    type: BookingTypes.SET_DID_SELECT_DAY,
    payload: didSelectDay
});

export const setSelectedService = (selectedService) => ({
    type: BookingTypes.SET_SELECTED_SERVICE,
    payload: selectedService
});

export const setServiceDuration = (serviceDuration) => ({
    type: BookingTypes.SET_SERVICE_DURATION,
    payload: serviceDuration
})

export const setDidSelectService = (didSelectService) => ({
    type: BookingTypes.SET_DID_SELECT_SERVICE,
    payload: didSelectService
});

export const setSelectedTime = (selectedTime) => ({
    type: BookingTypes.SET_SELECTED_TIME,
    payload: selectedTime
});

export const setDidSelectTime = (didSelectTime) => ({
    type: BookingTypes.SET_DID_SELECT_TIME,
    payload: didSelectTime
});

export const setName = (name) => ({
    type: BookingTypes.SET_NAME,
    payload: name
});

export const setEmail = (email) => ({
    type: BookingTypes.SET_EMAIL,
    payload: email
});

export const setPhone = (phone) => ({
    type: BookingTypes.SET_PHONE,
    payload: phone
});

export const setTimeSlots = (timeSlots) => ({
    type: BookingTypes.SET_TIME_SLOTS,
    payload: timeSlots
});



