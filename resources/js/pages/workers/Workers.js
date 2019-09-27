import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainWorkers from './MainWorkers';
import EditWorker from './EditWorker';


const Workers = () => {
    return (
        <Switch>
            <Route exact path='/workers/' component={MainWorkers}/>
            <Route path='/workers/edit/' component={EditWorker}/>
        </Switch>
    )
}

export default Workers;
