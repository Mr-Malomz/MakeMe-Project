//Login actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Login action creators
const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        isLoading: true,
        isAuthenticated: false,
        creds
    };
};

const receiveLogin = (user) => {
    return {
        type: LOGIN_SUCCCESS,
        isLoading: false,
        isAuthenticated: true,
        id_token: user.id_token,
        role: user.role,
        user
    };
};

const loginError = (message) => {
    return {
        type: LOGIN_FAILURE,
        isLoading: false,
        isAuthenticated: false,
        message
    };
};


export const loginUser = creds => {
    
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `email=${creds.email}&pass=${creds.password}`
    }

    return dispatch => {
        //starting the login process with redux action creator
        dispatch(requestLogin(creds))

        return fetch('http://localhost:8000/api/login', config)
            .then(response => response.json())
            .then(user => ({ user, response }))
            .then(({ user, response }) => {
                //if reponse is not okay
                if (!response.ok) {
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    // if response is okay
                    localStorage.setItem('id_token', user.id_token)
                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log(err))
    }
};

//logout actions
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

//logout action creators
const requestLogout = () => {
    return {
        type: LOGIN_REQUEST,
        isLoading: true,
        isAuthenticated: true
    };
};

const recieveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
        isLoading: false,
        isAuthenticated: false
    };
};


//log out
export const logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout())
        localStorage.removeItem('id_token')
        dispatch(recieveLogout())
    }
}