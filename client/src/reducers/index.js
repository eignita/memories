import { combineReducers } from 'redux';
import memoriesReducer from './memoriesReducer';

const rootReducer = combineReducers({
    memories: memoriesReducer,
});

export default rootReducer;
