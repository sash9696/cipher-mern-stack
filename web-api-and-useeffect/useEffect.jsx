import React, { useEffect, useState } from 'react'
import './App.css'

//useeffect

//hook that allows us to perform side effects in react app
//side effects-> they are operations that affect something outside the scope of function component
//data fetching -> fetch web api
//interacting with all web apis
//events , websockets
//directly dom manipulation
//local storage



function App() {

  // useEffect(() => {}, array);
  //array is optional

  //when the component mounts , when the component is inserted
  const [isMount, setIsMount] = useState(false);
  const [count, setCount] = useState(0);


  // useEffect(() => {


  //   //it will run only once when the component mounts 
  //   console.log(`useeffect runs`)

  // }, []);
  //when the component updates ,then it will run


  // useEffect(() => {


  //   //it will run on every render
  //   console.log(`useeffect runs`)

  // },);


    //when the component dependecy changes then it will run

  // useEffect(() => {


  //   //it will run on every render
  //   console.log(`useeffect runs`)

  // }, [isMount]);

  //it will run when the compone t is about to unmount
  // useEffect(() => {


  //     return () => {
  //           //cleanup code here runs when component unmounts
  //     }

  // }, []);


  console.log(`App component rendered`)

  return (
    <div>
      <h1>App</h1>
      <h2>Mount:{isMount}</h2>
      <h2>Count:{count}</h2>

      <button onClick={() => setIsMount(!isMount)}  >Mount</button>
      <button onClick={() => setCount(count + 1)}  >Increment</button>

    </div>
  )
}

export default App