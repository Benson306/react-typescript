import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo = ({todo, todos, setTodos}:Props) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map( todo =>{
                if(todo.id === id ){
                    return {...todo, isDone : !todo.isDone }
                }else{
                    return todo
                } 
            }) 
        )
    }

  return (
    <form className='flex items-center bg-orange-400 p-5 m-1 gap-2'>
        {
            todo.isDone ? (
                <s className='w-4/6 font-serif text-lg'>{todo.todo}</s>
            ) : (
                <div className='w-4/6 font-serif text-lg'>{todo.todo}</div>
            )
        }
        <div className='w-1/6'><AiFillEdit /></div>
        <div className='w-1/6'><AiFillDelete /></div>
        <div className='w-1/6' onClick={()=>handleDone(todo.id)}><MdDone /></div>

    </form>
  )
}

export default SingleTodo
