//Login actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Login action creators
const requestLogin = (creds) => {
    return {
        type: LOGIN_REQUEST,
        creds
    };
};

const receiveLogin = (user) => {
    return {
        type: LOGIN_SUCCCESS,
        id_token: user.Trans_Id,
        role: user.Job_Role,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE,
    };
};


export const loginUser = creds => {
    
    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json',},
        body: JSON.stringify({email: creds.email, password: creds.password})
        // `email=${creds.email}&password=${creds.password}`
    }

    return dispatch => {
        //starting the login process with redux action creator
        dispatch(requestLogin(creds))

        return fetch('http://localhost:8000/api/login', config)
            .then(response => response.json())
            .then(user => {
                localStorage.setItem('id_token', user[0].Trans_Id)
                dispatch(receiveLogin(user[0]))
            })
            .catch(err => dispatch(loginError()))
            
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
    };
};

const recieveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};


//log out
export const logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        localStorage.clear();
        dispatch(recieveLogout());
    }
}