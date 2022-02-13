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

