import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const reduxDevTools = 
  window.__REDUX_DEVTOOLS_EXTENSION__   ? 
  window.__REDUX_DEVTOOLS_EXTENSION__() : 
  f => f;
const store = createStore(rootReducer, compose(applyMiddleware(thunk), reduxDevTools));
export default store;