import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainRecep from './MainRecep';
import ResultRecep from './ResultRecep';
import CreateJobR from './CreateJobR';

const Reception = () => {
    return (
        <Switch>
            <Route exact path='/reception/' component={MainRecep}/>
            <Route exact path='/reception/results/' component={ResultRecep}/>
            <Route exact path='/reception/createjob/' component={CreateJobR}/>

        </Switch>
    )
}

export default Reception
