import React, { useEffect,useState } from 'react'
import './App.css'

//if there is no external system

//update a component's state when some props or state changes





function App() {

const [firstname, setFirstname] = useState('John');
const [lastname, setLastname] = useState('Doe');

// const [fullname, setFullname] = useState('');


// useEffect(() => {
//   setFullname(firstname + " " + lastname);
// }, [firstname, lastname])

//Case 1: when something has to be calculated from existing props or state , dont put in a new state
//instead calculate during rendering

const fullname = firstname + " " + lastname;

  return (
    <div>
      <h1>FullName: {fullname} </h1>
    </div>
  )
}

export default App