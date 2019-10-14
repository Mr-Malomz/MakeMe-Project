import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './pages/login/Home';
//import NewPassword from './pages/login/NewPassword';
//import ForgotPassword from './pages/login/ForgotPassword';
//import Success from './pages/login/Success';
import Login_SignUp from './pages/login/Login_SignUp';
import Workers from './pages/workers/Workers';
import Reception from './pages/receptionist/Reception';
import Supervisor from './pages/supervisor/Supervisor';
import SuperAdmin from './pages/super-admin/SuperAdmin';
import Accountant from './pages/accountant/Accountant';
import PrivateRoute from './components/PrivateRoute';

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

const Main = ({isAuthenticated, user}, props) => {
    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register/' component={Login_SignUp}/>
                <PrivateRoute 
                    path='/workers/' component={Workers} role="Workers" isAuthenticated={isAuthenticated} user={user}
                />
                <PrivateRoute 
                    path='/reception/' component={Reception} role="Receptionist" isAuthenticated={isAuthenticated} user={user}
                />
                <PrivateRoute 
                    path='/supervisor/' component={Supervisor} role="Supervisor" isAuthenticated={isAuthenticated} user={user}
                />
                <PrivateRoute 
                    path='/superadmin/' component={SuperAdmin} role="Super Admin" isAuthenticated={isAuthenticated} user={user}
                />
                <PrivateRoute 
                    path='/accountant/' component={Accountant} role="Accountant" isAuthenticated={isAuthenticated} user={user}
                />
            </Switch>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Main)
