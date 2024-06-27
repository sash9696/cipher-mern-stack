import React, { useReducer } from 'react'
import './App.css'


const intialState = 0;

function reducer (state, action) {

  console.log('reducer',{state, action});

  if(action.type == 'increment'){
    state = state + 1;
    return state;
  }

}

function App() {

  const [counter, dispatch] = useReducer(reducer,intialState );

  console.log('counter',counter)


  function handleClick(){
    //dispatch an action
    //actions are just objects or they functions returning that describes what u want to do

    dispatch({type: 'increment'});
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick} >Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
}

export default App