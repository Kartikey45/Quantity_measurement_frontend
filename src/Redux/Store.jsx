import {createStore, applyMiddleware} from 'redux';
import {UnitReducer} from './Unit/UnitReducer';
import logger from 'redux-logger';

const Store = createStore(UnitReducer, applyMiddleware(logger))

export default Store