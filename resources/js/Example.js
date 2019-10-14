import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import {persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './Main';
import Loader from './components/Loader';



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
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Example />
                </Router>
            </PersistGate>
        </Provider>, document.getElementById('example'));
}
