import { combineReducers } from 'redux';
import authReducer from './authReducer';
import memoriesReducer from './memoriesReducer';


const rootReducer = combineReducers({
    memories: memoriesReducer,
    auth: authReducer,
});

export default rootReducer;
