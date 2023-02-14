import React from 'react';
import InputField from './Components/InputField';

const App : React.FC = () => {

 
  return (
    <div className="App min-h-screen bg-slate-900">
      <h1 className='font-mono text-4xl p-8 text-white flex justify-center'>Taskify</h1>

      <InputField />
    </div>
  );
};

export default App;
