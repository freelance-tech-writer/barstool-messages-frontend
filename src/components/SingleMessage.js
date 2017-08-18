import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mutateDate, mutateName } from '../utils/helpers';

const DEFAULT_PIC_URL = "https://api.adorable.io/avatars/50/abott@adorable.png";

export default class SingleMessage extends Component {

	render() {
		const { messageObj } = this.props;
		const attributes = messageObj;

		return (
			<div className="messageContainer">
				<div className="messageContainer-avatarContainer">
					<img src={ attributes.pic || DEFAULT_PIC_URL } className="messageContainer-avatar"/>
				</div>
				<div className="messageContainer-detailsContainer">
					<ul className="detailsContainer-list">
						<li className="detailsContainer-message">{ attributes.message }</li>
						<li className="detailsContainer-username">
							{ mutateName(attributes.username) }
						</li>
						<li className="detailsContainer-useragent">{ attributes.useragent }</li>
						<li className="detailsContainer-date">
							{ mutateDate(attributes.date) }
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

SingleMessage.propTypes = {
	messageObj: PropTypes.object.isRequired
};
