import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo, index) => {
			return (
				<div className="todoItem" key={index}>
					<span onClick={() => deleteTodo(index)}>
						<span id="id">{index + 1}</span>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">"You have no todos left!"</p>
	);
	return <div className="todos">{todoList}</div>;
};

export default Todos;
