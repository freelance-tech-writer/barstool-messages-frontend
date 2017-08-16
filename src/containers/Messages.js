import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/messageStoreActions';

class Messages extends React.Component {
	componentWillMount() {
		let { actions } = this.props;
		actions.getMessages();
	}

	render() {
		let { messageStore } = this.props;
		console.log(this.props);
		return (
			<div className={ messageStore.loaded ? 'loaded' : 'loading' }>
				Message: { messageStore.messages }
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
