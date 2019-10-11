import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, role, ...otherProps}) => (
    <Route {...otherProps} render={ props => {
        const authentication = false;
        if(!authentication) {
            //either redirect the user to login or Redirect to the page they tried accessing after login in
            return <Redirect to={{pathname: '/', state: { from: props.location }}} />
        }

        if(authentication && roles !== authentication.roles) {
            return <Redirect to={{pathname: '/'}} />
        }

        return <Component {...props} />
    }

    }/>
)

export default PrivateRoute
