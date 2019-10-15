import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { employeesReducer } from './employeesReducers'

const rootReducer = combineReducers({
    auth: authReducer,
    employees: employeesReducer
});


export default rootReducer;