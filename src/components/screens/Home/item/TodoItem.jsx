import React from "react";
import Check from "./Check";
import cn from 'classnames';
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className="flex item-center justify-between mb-4 rounded-xl bg-zinc-800 p-5 w-full"
			
		>
			<button className="flex item-center"onClick={() => changeTodo(todo._id)}>
				
				<Check isCompleted={todo.isCompleted} />
				<span 
					className={cn({
						'line-through': todo.isCompleted
						})}>
						{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-500' />
			</button>
		</div>
	)
}
export default TodoItem;