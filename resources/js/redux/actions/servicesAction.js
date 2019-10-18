import { FETCH_NOTIFICATIONS_FAILURE } from "./notificationsAction";

//Services actions
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

//Services action creators
const fetchServicesRequest = () => {
    return {
        type: FETCH_SERVICES_REQUEST
    }
};

const fetchServicesSuccess = services => {
    return {
        type: FETCH_SERVICES_SUCCESS,
        services
    }
};

const fetchServicesFailure = () => {
    return {
        type: FETCH_NOTIFICATIONS_FAILURE
    }
}

export const fetchServices = dispatch => {
    return dispatch => {
        dispatch(fetchServicesRequest());

        return fetch('http://localhost:8000/api/services')
            .then(response => response.json())
            .then(services => dispatch(fetchServicesSuccess(services)))
            .catch(err => dispatch(fetchServicesFailure()))
    }
};
