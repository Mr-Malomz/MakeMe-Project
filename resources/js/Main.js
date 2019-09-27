import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/login/Home';
import Login_SignUp from './pages/login/Login_SignUp';
import Workers from './pages/workers/Workers';
import Reception from './pages/receptionist/Reception';
import Supervisor from './pages/supervisor/Supervisor';
import SuperAdmin from './pages/super-admin/SuperAdmin';
import Accountant from './pages/accountant/Accountant';

const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        > body {
            background: #ffffff;
            font-family: 'Montserrat', sans-serif;
        }
    }
`

const Main = () => {
    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register/' component={Login_SignUp}/>
                <Route path='/workers/' component={Workers}/>
                <Route path='/reception/' component={Reception}/>
                <Route path='/supervisor/' component={Supervisor}/>
                <Route path='/superadmin/' component={SuperAdmin}/>
                <Route path='/accountant/' component={Accountant}/>
            </Switch>
        </>
    )
}

export default Main
