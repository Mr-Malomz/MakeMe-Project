import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/login/Home';
import Login_SignUp from './pages/login/Login_SignUp';

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
            </Switch>
        </>
    )
}

export default Main
