import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
  return (
    <form className='flex items-center bg-orange-400 p-5 m-1 gap-2'>
        <div className='w-4/6 font-serif text-lg'>{todo.todo}</div>
        <div className='w-1/6'><AiFillEdit /></div>
        <div className='w-1/6'><AiFillDelete /></div>
        <div className='w-1/6'><MdDone /></div>

    </form>
  )
}

export default SingleTodo
