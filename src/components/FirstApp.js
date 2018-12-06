import React, { Component } from 'react';
import '../App.css';
import Todos from './Todo';
import AddTodo from './AddTodo';
//import Menu from './Menu';

class FirstApp extends Component {
	state = {
		todos: [
			{ id: 1, content: 'clean my room' },
			{ id: 2, content: 'wash the windows' }
		]
	};

	deleteTodo = index => {
		const filteredTodos = [...this.state.todos];
		filteredTodos.splice(index, 1);

		this.setState({
			todos: filteredTodos
		});
	};

	addTodo = todo => {
		let todos = [...this.state.todos, todo];
		this.setState({
			todos: todos
		});
	};
	render() {
		return (
			<div className="App container">
				{/* <Menu /> */}
				<h1 className="center">Todo`s</h1>
				<header className="App-header">
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
					/>

					<AddTodo addTodo={this.addTodo} />
				</header>
			</div>
		);
	}
}

export default FirstApp;
