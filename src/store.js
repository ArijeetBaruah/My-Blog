import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = applyMiddleware(createLogger(), thunk);

export default createStore(reducer, middleware);
