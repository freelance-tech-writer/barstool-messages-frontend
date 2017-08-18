import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/messageStoreActions';
import SingleMessage from '../components/SingleMessage';

class Messages extends React.Component {
	componentWillMount() {
		const { actions } = this.props;
		actions.getMessages();
	}

	buildMessages() {
		const { messageStore } = this.props;
		const messageContainer = [];
		messageStore.messages.map((message, idx) => {
			messageContainer.push(
				<SingleMessage key={ message.id || idx } messageObj={ message } />
			);
		});
		return messageContainer;
	}

	render() {
		const { messageStore } = this.props;
		return (
			<div className={ messageStore.loaded ? 'loaded' : 'loading' }>
				<h2>Welcome to React</h2>
				{ messageStore.loaded && this.buildMessages() }
			</div>
		);
	}
}

Messages.propTypes = {
	actions: PropTypes.object.isRequired,
	messageStore: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		messageStore: state.messageStore,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
