import {combineReducers} from 'redux';
import counterReducer from './CounterReducer';
import authReduce from './AuthReducer';
const rootReducers = combineReducers({
    counter : counterReducer,
    auth : authReduce
})
export default rootReducers;