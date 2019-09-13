import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom'
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
        <Router>
            <Example />
        </Router>, document.getElementById('example'));
}
