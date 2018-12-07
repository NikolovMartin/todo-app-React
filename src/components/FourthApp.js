import React from 'react';

class FourthApp extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			isLoggedIn: !this.state.isLoggedIn
		});
	}

	render() {
		return (
			<div>
				<h1>The Log App</h1>
				<div className="center">
					{this.state.isLoggedIn ? (
						<h2>User is logged In</h2>
					) : (
						<h2>User is not logged in</h2>
					)}

					<button className="inCenter" onClick={this.handleClick}>
						{this.state.isLoggedIn ? 'Log out' : 'Log in'}
					</button>
				</div>
			</div>
		);
	}
}

export default FourthApp;
