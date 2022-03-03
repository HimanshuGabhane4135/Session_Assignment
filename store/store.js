import { combineReducers, createStore } from "redux";
import counterIncrementDecrement from './Reducer/index';

const rootReducer = combineReducers({incDec: counterIncrementDecrement})

const store = createStore(rootReducer);

export default store;