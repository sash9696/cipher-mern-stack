import React, { useEffect, useState } from 'react'
import { useFetchApi } from './customHooks/useFetchApi';

function App() {

  // const [users, setUsers] = useState([]);
  // const [posts, setPosts] = useState([]);

  const {data:users, error:userData} = useFetchApi("https://jsonplaceholder.typicode.com/users");

  const {data:posts, error:postsError} = useFetchApi("https://jsonplaceholder.typicode.com/posts");


  console.log("Data:", {users, posts})
  return (
    <div>App</div>
  )
}

export default App