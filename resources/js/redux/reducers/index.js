import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { employeesReducer } from './employeesReducers';
import { notificationsReducer } from './notificationsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    employees: employeesReducer,
    notifications: notificationsReducer,
});


export default rootReducer;