import { FETCH_NOTIFICATIONS_REQUEST, FETCH_NOTIFICATIONS_SUCCESS, FETCH_NOTIFICATIONS_FAILURE } from '../actions/notificationsAction';

const initialState = {
    isLoading: false,
    notifError: false,
    notifications: []
};

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                notifications: action.notifications
            }

        case FETCH_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                notifError: true,
                isLoading: false
            }
    
        default:
            return state
    }
};