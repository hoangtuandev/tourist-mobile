import axios from 'axios';

const URL = 'http://192.168.1.12:5000';

export const signInTourist = (data) =>
    axios.post(`${URL}/TouristAccount/signInTourist`, data);

export const getWorkingBookingTour = (data) =>
    axios.post(`${URL}/BookingTour/getWorkingBookingTour`, data);

export const getFutureBookingTour = (data) =>
    axios.post(`${URL}/BookingTour/getFutureBookingTour`, data);

export const getCalendarGuideByDeparture = (data) =>
    axios.post(`${URL}/CalendarGuide/getCalendarGuideByDeparture`, data);

// export const handleLoginGuide = (data) =>
//     axios.post(`${URL}/GuideAccount/login`, data);

// export const handleLoginGuide = (data) =>
//     axios.post(`${URL}/GuideAccount/login`, data);

// export const getCalendarGuide = () => axios.get(`${URL}/CalendarGuide`);

// export const registerCalendarGuideTour = (data) =>
//     axios.post(`${URL}/CalendarGuide/registerCalendarGuideTour`, data);

// export const cancelCalendarGuideTour = (data) =>
//     axios.post(`${URL}/CalendarGuide/cancelCalendarGuideTour`, data);

// export const getCalendarGuideByAccount = (data) =>
//     axios.post(`${URL}/CalendarGuide/getCalendarGuideByAccount`, data);

// export const getAvairiableCalendarGuide = () =>
//     axios.get(`${URL}/CalendarGuide/getAvairiableCalendarGuide`);

// export const getGuideTimesByAccount = (data) =>
//     axios.post(`${URL}/CalendarGuide/getGuideTimesByAccount`, data);

// export const getRatingGuideByGuideAccount = (data) =>
//     axios.post(`${URL}/RatingGuide/getRatingGuideByGuideAccount`, data);
