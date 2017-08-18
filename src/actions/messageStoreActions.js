import * as types from '../constants/actionTypes';
import 'whatwg-fetch';
import handleErrors from '../utils/helpers';

export function getMessages() {
	console.log('action fired');
	return function(dispatch) {
		return fetch('http://localhost:5000/messages')
			.then(handleErrors)
			.then(function(response) { return response.json() })
			.then(function(data) {
				dispatch({
					type: types.GET_MESSAGES,
					messages: data.data
				});
			})
			.then(function() {
				dispatch({
					type: types.SET_LOADED,
					loaded: true
				});
			})
			.catch(function(error) { console.log(error) });
	};
}
