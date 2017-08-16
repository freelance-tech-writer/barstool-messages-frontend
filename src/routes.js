import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import Messages from './containers/Messages';

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ NotFoundPage }/>
		<Route path="messages" component={ Messages }/>
		<Route path="*" component={ NotFoundPage }/>
	</Route>
);
