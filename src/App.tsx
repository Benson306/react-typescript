import React from 'react';
import './App.css';

function App() {

  let name: string = 'Benji';

  let fruits: string[];

  fruits = ['Lemon'];

  //turple
  let students: [string, number];
  students = ['Benji',8];

  //object
  type Person = {
    name: string,
    age?: number //optional
  }

  let person : Person = {
    name:'Benson',
    age:22
  }

  //array of objects
  let lostsOfPeople : Person[] ;

  lostsOfPeople = [{name:'Benson'},{name: 'Oliver'}]

  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
