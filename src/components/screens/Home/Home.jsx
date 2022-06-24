import React, { useState } from "react";
import CreateTodoField from "./CreateTodoField/CreateTodoField";
import TodoItem from "./item/TodoItem";

const data = [
	{
		title: 'finish',
		isCompleted: false,
		_id: 'rewqr',
	},
	{
		title: 'end book',
		isCompleted: false,
		_id: 'rewqr24',
	},
]


const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo  = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	};

	const removeTodo = id => {
		setTodos([...todos].filter(t => t._id !== id))
	}


	return(
		<div className='text-white w-4/5 mx-auto'>
			<h1 className="text-2xl font-bold text-center mb-8" >Todo list</h1>
			{todos.map(todo => (
			<TodoItem 
				key={todo._id} 
				todo={todo} 
				changeTodo={changeTodo}
				removeTodo={removeTodo}
			/>
		))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}
export default Home;