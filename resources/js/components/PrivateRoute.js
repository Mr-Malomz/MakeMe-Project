import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, role, isAuthenticated, user, ...otherProps}) => (
    <Route {...otherProps} render={ props => {
        if(!isAuthenticated) {
            //either redirect the user to login or Redirect to the page they tried accessing after login in
            return <Redirect to={{pathname: '/', state: { from: props.location }}} />
        }

        if (role !== user.Job_Role) {
            return <Redirect to={{pathname: '/'}} />
        }

        return <Component {...props} />
    }

    }/>
)

export default PrivateRoute
