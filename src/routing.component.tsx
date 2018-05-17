import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from './app/main/content/index/index.component';

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

export class Routing extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route path="/about" component={About} />
				</Switch>
			</Router>
		);
	}
}
