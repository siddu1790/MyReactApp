import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import NationalParks from './NationalParks';

const API_URL = "https://developer.nps.gov/api/v1/parks?limit=20&api_key=ocBfsNlrlLsdslccwvHAIefdMBOBqGN7sj3Yl76I"

function App() {

  const [search, setSearch] = useState("");
  const [parks, setParks] = useState([]);

  const searchNationalParks = async (parkCode) => {
    const response = await fetch(`${API_URL}&statecode=${parkCode}`);
    const parksResp = await response.json();
    console.log(parksResp.data);
    setParks(parksResp.data);
    
  }

  useEffect(() => {
    searchNationalParks("UT");

  }, []);

  return (
    <div className="app">
      <h1>US National Parks      </h1>

      <div className="search">

        <input placeholder="Enter State code for National Parks" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>

        <img src={SearchIcon}
              alt = "search"
              onClick={() => searchNationalParks(search)}/>
      </div>
        
        { parks?.length > 0 ? (
            <div className="container">
              {parks.map((park) => (
                <NationalParks park = {park}/>
                ))}
           </div>
          ) : (
            <div className="empty">
              <h2> No Parks Found</h2>
            </div>
          )
        }
   
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
}
*/
