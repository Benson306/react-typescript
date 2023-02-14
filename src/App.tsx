import React, { useState } from 'react';
import InputField from './Components/InputField';

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  return (
    <div className="App min-h-screen bg-slate-900">
      <h1 className='font-mono text-4xl p-8 text-white flex justify-center'>Taskify</h1>

      <InputField todo={todo} setTodo={setTodo}/>

    </div>
  );
};

export default App;
