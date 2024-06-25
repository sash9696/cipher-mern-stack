import React, { useEffect, useState } from 'react';
import './App.css';
import ChatRoom from './Chat';

//useeffect => synchronize component with an external system

// useEffect(function,dependencyArray)

//connecting to a chat server




function App() {

  //top level management and inside function component

  //connect to an external system


  // const [isMount, setIsMount] = useState(false);

  //fetch the data from the server
  const [users, setUsers] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data) )
    .catch((error) => console.error("Error: ", error))
  }, [])


  return (
    <div>
      {/* {isMount && (
           <ChatRoom/>
      )}
      <button onClick={() => setIsMount(!isMount)} >
        {isMount ? "Unmount" : "Mount"}
      </button>
    */}
    <ul>
    {
      users?.map((user) => (
        <li>{user.name}</li>
      ))
    }
    </ul>
   
    </div>
  )
}

export default App