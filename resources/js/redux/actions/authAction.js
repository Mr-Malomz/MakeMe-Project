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
    
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `username=${creds.username}&password=${creds.password}`
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
                    
                }
            })
    }
}


