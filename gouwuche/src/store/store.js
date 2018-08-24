import {createStore,applyMiddleware} from 'redux';
import reducer from '../redux/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export default createStore(reducer,applyMiddleware(logger,thunk))