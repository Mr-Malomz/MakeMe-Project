import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainSuperAdmin from './MainSuperAdmin';
import EmployeeSuperAdmin from './EmployeeSuperAdmin';
import CreateEmpSuperAdmin from './CreateEmpSuperAdmin';
import EditEmpSuperAdmin from './EditEmpSuperAdmin';
import SalaryEmpSuperAdmin from './SalaryEmpSuperAdmin';
import MessageEmpSuperAdmin from './MessageEmpSuperAdmin';
import EditSuperAdmin from './EditSuperAdmin';

const SuperAdmin = () => {
    return (
        <Switch>
            <Route exact path='/superadmin/' component={MainSuperAdmin}/>
            <Route exact path='/superadmin/employees' component={EmployeeSuperAdmin}/>
            <Route exact path='/superadmin/employees/create' component={CreateEmpSuperAdmin}/>
            <Route exact path='/superadmin/employees/edit' component={EditEmpSuperAdmin}/>
            <Route exact path='/superadmin/employees/salary' component={SalaryEmpSuperAdmin}/>
            <Route exact path='/superadmin/employees/message' component={MessageEmpSuperAdmin}/>
            <Route exact path='/superadmin/edit' component={EditSuperAdmin}/>
        </Switch>
    )
}

export default SuperAdmin
