import {LOGIN_REQUEST, LOGIN_SUCCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS} from '../actions/authAction';

const initialState = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    role: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
                creds: action.creds
            }
    
        default:
            return state;
    }
}