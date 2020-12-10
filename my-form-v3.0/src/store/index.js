import { createStore } from 'redux';
import changeReducer from '../reducers';

const store = createStore(changeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;