import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainAccountant from './MainAccountant';
import CreateServiceAcct from './CreateServiceAcct';
import EditServiceAcct from './EditServiceAcct';
import PaymentAccountant from './PaymentAccountant';
import EditAccountant from './EditAccountant';

const Accountant = () => {
    return (
        <Switch>
            <Route exact path='/accountant/' component={MainAccountant}/>
            <Route exact path='/accountant/service/create' component={CreateServiceAcct}/>
            <Route exact path='/accountant/service/edit' component={EditServiceAcct}/>
            <Route exact path='/accountant/payment' component={PaymentAccountant}/>
            <Route exact path='/accountant/edit' component={EditAccountant}/>
        </Switch>
    )
}

export default Accountant
