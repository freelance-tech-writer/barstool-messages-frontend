import { combineReducers } from 'redux';
import messageStore from './messageStoreReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	messageStore,
	routing: routerReducer
});

export default rootReducer;
