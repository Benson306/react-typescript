import React, { useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo = ({todo, todos, setTodos}:Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


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

    const handleDelete = (id: number) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id:number) =>{
        e.preventDefault();

        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    return {...todo, todo:editTodo};
                }else{
                    return todo;
                }
            }) 
        )
        setEdit(false);
    }

  return (
    <form className='flex items-center bg-orange-400 p-5 m-1 gap-2' onSubmit={e => handleEdit(e,todo.id)}>
        {
            edit ? (
               <input 
                className='p-2' 
                value={editTodo} 
                onChange={(e)=> setEditTodo(e.target.value)}
                name="" id="" 
                />
            ): (
                
                    todo.isDone ? (
                        <s className='w-4/6 font-serif text-lg'>{todo.todo}</s>
                    ) : (
                        <div className='w-4/6 font-serif text-lg'>{todo.todo}</div>
                    )
                
            )
        }
        
        <div className='w-1/6' onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit);
            }
        }
        }><AiFillEdit /></div>
        <div className='w-1/6' onClick={()=>handleDelete(todo.id)}><AiFillDelete /></div>
        <div className='w-1/6' onClick={()=>handleDone(todo.id)}><MdDone /></div>

    </form>
  )
}

export default SingleTodo
