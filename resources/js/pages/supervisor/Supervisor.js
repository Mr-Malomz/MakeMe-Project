import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainSupervis from './MainSupervis';
import AssignJob from './AssignJob';
import CreateJobSV from './CreateJobSV';
import EditJobSV from './EditJobSV';
import CreateCusSV from './CreateCusSV';
import EditCusSV from './EditCusSV';
import EditSupervisor from './EditSupervisor';

const Supervisor = () => {
    return (
        <Switch>
            <Route exact path='/Supervisor/' component={MainSupervis}/>
            <Route exact path='/supervisor/assignjob/' component={AssignJob}/>
            <Route exact path='/supervisor/createjob/' component={CreateJobSV}/>
            <Route exact path='/supervisor/editjob/' component={EditJobSV}/>
            <Route exact path='/supervisor/createcustomer/' component={CreateCusSV}/>
            <Route exact path='/supervisor/editcustomer/' component={EditCusSV}/>
            <Route exact path='/supervisor/editprofile/' component={EditSupervisor}/>
        </Switch>
    )
}

export default Supervisor;