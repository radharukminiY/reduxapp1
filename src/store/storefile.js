import {logger} from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer/main_reducers';

let store =createStore(reducer,applyMiddleware(logger));

export default store;
