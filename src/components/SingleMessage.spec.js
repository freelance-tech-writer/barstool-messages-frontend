import React from 'react';
import { shallow } from 'enzyme';
import SingleMessage from './SingleMessage';

const messageObj = {
	attributes: {
		date: '2015-10-11T08:40:51.620Z',
		useragent: 'Mozilla/5.0',
		message: 'hi!',
		username: 'bob.jones',
		pic: 'http://semantic-ui.com/images/avatar/small/elliot.jpg'
	},
	type: 'messages',
	id: '1'
};

describe('<SingleMessage />', () => {
	it('Should render an <img />', () => {

		const wrapper = shallow(<SingleMessage messageObj={ messageObj } />);

		expect(wrapper.find('img').length).toEqual(1);
	});
	it('Should contain the right number of data cells', () => {

		const wrapper = shallow(<SingleMessage messageObj={ messageObj } />);

		expect(wrapper.find('li').length).toEqual(4);
	});
	it('Should mutate a username', () => {
		const wrapper = shallow(<SingleMessage messageObj={ messageObj } />);

		expect(wrapper.find('li.detailsContainer-username').text()).toEqual('bob jones');
	});
	it('Should mutate a date', () => {
		const wrapper = shallow(<SingleMessage messageObj={ messageObj } />);

		expect(wrapper.find('li.detailsContainer-date').text()).toEqual('Sun Oct 11 2015 04:40:51 GMT-0400 (EDT)');
	});
});
