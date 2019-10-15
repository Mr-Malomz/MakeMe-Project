import {LOGIN_REQUEST, LOGIN_SUCCCESS, LOGIN_FAILURE,LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE} 
    from '../actions/authAction';

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    role: null,
    user: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                creds: action.creds
            }
            
        case LOGIN_SUCCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                role: action.role,
                user: action.user,
            }
        
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true
            }

        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false,
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggingIn: false,
                isAuthenticated: false,
                user: {}
            }

        case LOGOUT_FAILURE: 
            return {
                ...state,
                logoutError: true
            }
    
        default:
            return state;
    }
}