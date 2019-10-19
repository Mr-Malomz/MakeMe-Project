//employees action
export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';

//employess action creator
const fetchEmployeesRequest = () => {
    return {
        type: FETCH_EMPLOYEES_REQUEST
    }
};

const fetchEmployeesSuccess = (employees) => {
    return {
        type: FETCH_EMPLOYEES_SUCCESS,
        employees
    }
};

const fetchEmployeesFailure = () => {
    return {
        type: FETCH_EMPLOYEES_FAILURE
    }
};

export const fetchEmployees = dispatch => {
   return dispatch => {
        dispatch(fetchEmployeesRequest());

        return fetch('http://localhost:8000/api/emps')
            .then(response => response.json())
            .then(employees => dispatch(fetchEmployeesSuccess(employees)))
            .catch(err => dispatch(fetchEmployeesFailure()))
   }

};

