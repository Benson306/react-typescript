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
  //alias
    type Person = {
      name: string,
      age?: number //optional
    }

    //How to extend a type
    type Character = Person & {
      hobby: string
    }

    
    interface Teacher  {
      name: string,
      qualification: any
    }
    interface School extends Teacher {
      category: string
    }

  let person : Person = {
    name:'Benson',
    age:22
  }

  //array of objects
  let lostsOfPeople : Person[] ;

  lostsOfPeople = [{name:'Benson'},{name: 'Oliver'}]

  //unions

  let animals: number | string;

  animals = 78;

  animals =  'Ben';

  //functions
  function printAnimal(animals: string){
    console.log(animals)
  }

  let printName: (name: string) => void; //returns undefined
  let printPerson: (name: string) => never; //never returns anything
  //Declaring unknown types
  let personName: unknown; // use instead of 'any'

  

  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
