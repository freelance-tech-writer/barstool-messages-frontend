import * as types from '../constants/actionTypes';
import 'whatwg-fetch';

export function getMessages() {
	console.log('action fired');
	return function(dispatch) {
		return fetch('https://api.union.io/messages')
			.then(function(response) {
				dispatch({
					type: types.GET_MESSAGES,
					messages: "hello, world"
				});
			})
			.then(function() {
				dispatch({
					type: types.SET_LOADED,
					loaded: true
				});
			});
	};
}
