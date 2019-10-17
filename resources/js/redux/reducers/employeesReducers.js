import { FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from '../actions/employeesAction';

const initialState = {
    isLoading: false,
    fetchError: false,
    employees: []
}

export const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_REQUEST:
           return {
               ...state,
               isLoading: true
           }
    
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchError: false,
                employees: action.employees
            }

        case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                isLoading: false,
                fetchError: true
            }

        default:
            return state
    }
}