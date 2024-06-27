import React, { useReducer } from "react";
import "./App.css";

//useReducer
//allows us to use reducer in the component , similar to state hook
//complex state management
//  const [state, dispatch] = useReducer(reducer, intialArgs,  init?)

//state => current state. during the first render it will be init(intialArgs) or intialArgs if there is not init
//dispatch =>fucntion that ipdates the state to a diff value and trigger a re-render

//reducer is a pure function that take state and actions and then update the state
//intialArgs => from which initial state is calculated
//init =? initiator func that returns initial state
//init(intialArgs)

const intialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    case ACTIONS.RESET:
      return {
        count: 0,
      };
  }
}

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};
function action(actionType) {
  return {
    type: actionType,
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  console.log("state", state);


  return (
    <div>
      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch(action(ACTIONS.INCREMENT))}>Increment</button>
      <button onClick={() => dispatch(action(ACTIONS.DECREMENT))}>Decrement</button>
      <button onClick={() => dispatch(action(ACTIONS.RESET))}>Reset</button>
    </div>
  );
}

export default App;
