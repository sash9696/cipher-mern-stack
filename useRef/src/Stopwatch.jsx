import React, { useRef, useState } from 'react'
import './App.css'

//use ref
//reference a value that is not needed for rendering

//useRef(initialValue)

function App() {
  //stopwatch
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  function handleStart(){

    const currentTime = Date.now();
    setStartTime(currentTime);
    setNow(currentTime);

    //clearing the older set interval 
    clearInterval(intervalRef.current);

    intervalRef.current =  setInterval(function (){
      setNow(Date.now());
    }, 10)


  }

  function handleStop(){
    clearInterval(intervalRef.current);
  }
  

  let timeLapsedInSeconds = 0;

  if( startTime != null && now != null){
    timeLapsedInSeconds = (now - startTime)/1000  //converting into seconds

  }

  // console.log('timeLapsedInSeconds',timeLapsedInSeconds)

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2 style={{margin:"10px 0"}}>Time passed: {timeLapsedInSeconds.toFixed(3)}</h2>
      <button onClick={handleStart} >Start</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  )
}

export default App