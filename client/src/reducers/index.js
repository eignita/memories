import { combineReducers } from 'redux';
import memoriesReducer from './memories';

const rootReducer = combineReducers({
    memories: memoriesReducer,
});

export default rootReducer;
