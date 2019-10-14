import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

//use of redux-persist to store state when app is reloaded;
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(ReduxThunk) ));
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
export const persistor = persistStore(store);

// export default store;
// export default persistor;