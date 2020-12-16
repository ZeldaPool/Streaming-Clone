import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Navibar from './Navbar';
import history from '../history';

const App = (params) => {
	return (
		<div>
			<Router history={history}>
				<div>
					<Navibar />
					<div className="container">
						<Switch>
							<Route path="/" exact component={StreamList} />
							<Route path="/streams/new" exact component={StreamCreate} />
							<Route path="/streams/edit/:id" exact component={StreamEdit} />
							<Route path="/streams/:id" exact component={StreamShow} />
							<Route path="/streams/delete/:id" exact component={StreamDelete} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
