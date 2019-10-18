import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { employeesReducer } from './employeesReducers';
import { notificationsReducer } from './notificationsReducer';
import { servicesReducer } from './servicesReducer';
import { salaryReducer } from './salaryReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    employees: employeesReducer,
    notifications: notificationsReducer,
    services: servicesReducer,
    salary: salaryReducer
});


export default rootReducer;