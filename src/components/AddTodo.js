import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		content: ''
	};

	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		});
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<label className="label">Add New Todo</label>
					<input
						className="input"
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
					<button type="submit">Create New Todo</button>
				</form>
			</React.Fragment>
		);
	}
}

export default AddTodo;
