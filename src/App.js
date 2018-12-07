import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import FirstApp from './components/FirstApp';
import SecondApp from './components/SecondApp';
import ThirdApp from './components/ThirdApp';
import FourthApp from './components/FourthApp';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Menu />
					<Route path="/firstApp" component={FirstApp} />
					<Route path="/secondApp" component={SecondApp} />
					<Route path="/thirdApp" component={ThirdApp} />
					<Route path="/fourthApp" component={FourthApp} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
