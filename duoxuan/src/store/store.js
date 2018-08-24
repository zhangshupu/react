import {createStore,applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';
export default createStore(reducer,applyMiddleware(Logger,thunk));
