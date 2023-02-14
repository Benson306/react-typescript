import React, { useState } from 'react';
import InputField from './Components/InputField';
import { Todo } from './model';

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now() , todo: todo, isDone: false}])
      setTodo("");
    }
    
  }

  console.log(todos)

  return (
    <div className="App min-h-screen bg-slate-900">
      <h1 className='font-mono text-4xl p-8 text-white flex justify-center'>Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    {
      todos.map( t => (
        <div className='text-white p-4'>{t.todo}</div>
      ))
    }
    </div>
  );
};

export default App;
