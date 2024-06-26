import React, { useRef, useState, forwardRef } from 'react'
import './App.css'
//use ref
//reference a value that is not needed for rendering

//useRef(initialValue)

const MyInput = forwardRef(({value, onChange}, ref) => {

  return (
    <input
    
      value={value}
      onChange={onChange}
      ref={ref}
    />
  )
})

function App() {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  function onChange(e){
    setValue(e.target.value);
  }
  return (
    <div>
      <h1>Dom</h1>
      <MyInput
          value={value}
          onChange={onChange}
          ref={inputRef}
      
      />
    </div>
  )
}

export default App