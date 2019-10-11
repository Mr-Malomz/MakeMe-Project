//Login actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Login action creators
const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    };
};

const receiveLogin = (user) => {
    return {
        type: LOGIN_SUCCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token,
        user
    };
};

const loginError = (message) => {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
};


export const loginUser = creds => {
    
}


