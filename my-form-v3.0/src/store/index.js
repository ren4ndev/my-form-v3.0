import { createStore } from 'redux';
import changeReducer from '../reducers';

const store = createStore(changeReducer);

export default store;