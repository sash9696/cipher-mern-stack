import React, { useRef, useState, forwardRef, useId } from 'react'
import './App.css'
//useId
//for generating unique Ids 

function PasswordField(){
  const passwordHintId = useId();
  return(
    <>
      <label>
        Password:
        <input type='password' aria-describedby={passwordHintId} />
      </label>

      <p id={passwordHintId}>
        The password should contain at least 8 chars
      </p>
    </>
  )
}

function App() {

  // const id1 = useId();
  // const id2 = useId();


  // console.log('id',{id1, id2})
  
  return (
    <div>
      <h1>Choose password</h1>
      <PasswordField/>
      <br/>
      <h1>Confirm password</h1>
      <PasswordField/>
    
    </div>
  )
}

export default App