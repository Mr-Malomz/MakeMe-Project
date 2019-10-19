
//Salary actions
export const FETCH_SALARY_REQUEST = 'FETCH_SALARY_REQUEST';
export const FETCH_SALARY_SUCCESS = 'FETCH_SALARY_SUCCESS';
export const FETCH_SALARY_FAILURE = 'FETCH_SALARY_FAILURE';

//Services action creators
const fetchSalaryRequest = () => {
    return {
        type: FETCH_SALARY_REQUEST
    }
};

const fetchSalarySuccess = salary => {
    return {
        type: FETCH_SALARY_SUCCESS,
        salary
    }
};

const fetchSalaryFailure = () => {
    return {
        type: FETCH_SALARY_FAILURE
    }
}

export const fetchSalary = dispatch => {
    return dispatch => {
        dispatch(fetchSalaryRequest());

        return fetch('http://localhost:8000/api/salary')
            .then(response => response.json())
            .then(salary => dispatch(fetchSalarySuccess(salary)))
            .catch(err => dispatch(fetchSalaryFailure()))
    }
};
