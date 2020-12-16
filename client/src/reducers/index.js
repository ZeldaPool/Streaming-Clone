import { combineReducers } from 'redux';
import authred from './authred';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
	authred: authred,
	form: formReducer,
	streams: streamReducer
});
