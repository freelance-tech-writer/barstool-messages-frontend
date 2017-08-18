import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';

const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const reducers = require('../reducers/messageStoreReducer').default;

let store = createStore(reducers);

describe('<Messages />', () => {
	it('Should render the Messages component', () => {

		const wrapper = shallow(
			<Provider store={store}>
				<Messages store={store} />
			</Provider>
		);

		expect(wrapper.find(Messages).length).toEqual(1);
	});
});
