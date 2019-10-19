import { FETCH_SALARY_REQUEST, FETCH_SALARY_SUCCESS, FETCH_SALARY_FAILURE } from '../actions/salaryAction';

const initialState = {
    isLoading: false,
    salError: false,
    salary: []
}

export const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SALARY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SALARY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                salary: action.salary,
                salError: false
            }

        case FETCH_SALARY_FAILURE:
            return {
                ...state,
                isLoading: false,
                salError: true
            }
    
        default:
            return state;
    }
}