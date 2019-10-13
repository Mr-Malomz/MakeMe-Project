import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//create a funtion to return store and also authenticate user on app load and on refresh pages 
// by dispatching the login action

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(ReduxThunk) ));

export default store;