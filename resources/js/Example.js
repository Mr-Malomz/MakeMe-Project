import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './Main';



function Example() {
    return (
        <>
            <Main />
        </>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Example />
            </Router>
        </Provider>, document.getElementById('example'));
}
