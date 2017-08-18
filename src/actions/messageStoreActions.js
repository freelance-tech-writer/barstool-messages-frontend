import * as types from '../constants/actionTypes';
import 'whatwg-fetch';
import handleErrors from '../utils/helpers';

const LOCAL_SERVER_URL = 'http://localhost:5000/messages';

export function getMessages() {
	/* Return a function, not the dispatch. This is called a "thunk", and allows
	 * for sane chaining of actions. Google react-thunk for details.
	 */
	return function(dispatch) {
		return fetch(LOCAL_SERVER_URL)
			.then(handleErrors)
			.then(function(response) { return response.json() })
			.then(function(data) {
				dispatch({
					type: types.GET_MESSAGES,
					messages: data[0].data
				});
			})
			.then(function() {
				dispatch({
					type: types.SET_LOADED,
					loaded: true
				});
			})
			.catch(function(error) {
				console.log(error)
				// TODO: Eventually, create a SET_ERROR action, and log it
			});
	};
}
