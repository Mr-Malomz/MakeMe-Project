import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainSuperAdmin from './MainSuperAdmin';
import EmployeeSuperAdmin from './EmployeeSuperAdmin';
import CreateEmpSuperAdmin from './CreateEmpSuperAdmin';

const SuperAdmin = () => {
    return (
        <Switch>
            <Route exact path='/superadmin/' component={MainSuperAdmin}/>
            <Route exact path='/superadmin/employees' component={EmployeeSuperAdmin}/>
            <Route exact path='/superadmin/employees/create' component={CreateEmpSuperAdmin}/>

        </Switch>
    )
}

export default SuperAdmin
