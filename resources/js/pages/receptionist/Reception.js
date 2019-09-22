import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainRecep from './MainRecep';
import ResultRecep from './ResultRecep';
import CreateJobR from './CreateJobR';
import PaymentRecep from './PaymentRecep';
import CreateCustomer from './CreateCustomerRecep';
import ViewCustomerRecep from './ViewCustomerRecep';
import EditCustomerRecep from './EditCustomerRecep';
import EditReception from './EditReception';

const Reception = () => {
    return (
        <Switch>
            <Route exact path='/reception/' component={MainRecep}/>
            <Route exact path='/reception/results/' component={ResultRecep}/>
            <Route exact path='/reception/createjob/' component={CreateJobR}/>
            <Route exact path='/reception/payment/' component={PaymentRecep}/>
            <Route exact path='/reception/createcustomer/' component={CreateCustomer}/>
            <Route exact path='/reception/viewcustomer/' component={ViewCustomerRecep}/>
            <Route exact path='/reception/editcustomer/' component={EditCustomerRecep}/>
            <Route exact path='/reception/edit/' component={EditReception}/>

        </Switch>
    )
}

export default Reception
