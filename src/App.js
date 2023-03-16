import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { SearchParks } from './pages/SearchParks';


function App() {
  return (
    
    <div className="app">
      <Routes>
          <Route path='/searchparks'  element={<SearchParks />}/>
          <Route path='/registration' element={<Registration />} />
      </Routes>
      {/* <>
      <Navbar/>
        
      </> */}
   
    </div>
  );
}

export default App;

/*
We are creating a component person
const Person = () => {
  return  ( <>
        <h1> Name: Sid </h1>
        <h2> Occupation: S/E </h2>
        <h2> Company: Lowes </h2>
        </>
  );
}

to add this component to App ,
<div className="App">
      <h1> Hello {isName ? name : 'Someone'}</h1>
      <Person/> -> this will display the person component inside the app
</div>

props -> arguments that are passed to the react component.

const Person = (props) => {
  return  ( <>
        <h1> Name: {props.personName}</h1>
        <h2> Occupation: {props.personOccupation} </h2>
        <h2> Company: {props.personCompany} </h2>
        </>
  );
}

to add this component to App ,
<div className="App">
      <h1> Hello {isName ? name : 'Someone'}</h1>
      <Person personName = {'Siddu'} personOccupation = {'Java Dev'} personCompany = {'Lowes'}/> -> this will display the person component inside the app
</div>

React state: example as a counter

use state alawys return two parameters example:  const [counter, setCounter]  = useState(0); - > 1st parameter is the current state (counter) and the 2nd parameter is to set the current state (setCounter)
 import {useState} from 'react';
 function App() {
  const [counter, setCounter]  = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}> Minus </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}> Plus </button>
    </div>
  );

creating a navbar:
install react router and react icons using the below commands
npm install react-icons --save
npm install react-router-dom 

}
*/
