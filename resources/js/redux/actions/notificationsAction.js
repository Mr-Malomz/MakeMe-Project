//notifications action
export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST'
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';

//employess action creator
const fetchNotificationsRequest = () => {
    return {
        type: FETCH_NOTIFICATIONS_REQUEST
    }
};

const fetchNotificationsSuccess = (notifications) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications
    }
};

const fetchNotificationsFailure = () => {
    return {
        type: FETCH_NOTIFICATIONS_FAILURE
    }
};

export const fetchNotifications = dispatch => {
   return dispatch => {
        dispatch(fetchNotificationsRequest());

        return fetch('http://localhost:8000/api/notifs')
            .then(response => response.json())
            .then(notifications => dispatch(fetchNotificationsSuccess(notifications)))
            .catch(err => dispatch(fetchNotificationsFailure()))
   }

};

