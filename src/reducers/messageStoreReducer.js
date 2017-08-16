import {
	GET_MESSAGES,
	SET_LOADED
} from '../constants/actionTypes';

import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: use Object.assign to create a copy of current state
// and update values on the copy.
export default function messageStoreReducer(state = initialState.messageStore, action) {
	let newState;

	switch (action.type) {
		case GET_MESSAGES:
			console.log('reducer fired');
			return objectAssign({}, state, {
				messages: action.messages
			});

		case SET_LOADED:
			return objectAssign({}, state, {
				loaded: true
			});

		default:
			return state;
	}
}
