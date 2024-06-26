import React, { useRef, useState } from 'react'
import './App.css'

//use ref
//reference a value that is not needed for rendering

//useRef(initialValue)

function App() {
  const inputRef = useRef(null);

//Manipulate the DOM
  function handleClick(){
      inputRef.current.focus();

      console.log('value: ' , inputRef.current.value)
  }
  console.log(inputRef)
  return (
    <div>
      <h1>Dom</h1>
     <input ref={inputRef}  />
     <button onClick={handleClick} >
      Focus 
     </button>
    </div>
  )
}

export default App