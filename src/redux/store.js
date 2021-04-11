import { createStore, applyMiddleware } from 'redux';
//middleware
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

/**
* @description  This is the redux store
*/
const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;