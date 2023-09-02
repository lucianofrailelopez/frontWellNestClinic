import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    userReducer,
    composeEnhancer(applyMiddleware(thunk)) 
);
export default store;