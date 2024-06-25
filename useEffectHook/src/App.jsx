import React, { useEffect, useState } from "react";
import "./App.css";

//if there is no external system

//update a component's state when some props or state changes

//Case 2 if u want to reset the state
function Profile({ userId }) {
  const [comment, setComment] = useState("");

  // useEffect(() => {
  //   setComment("");
  // }, [userId])

  return (
    <>
      <h1>Profile userId: {userId}</h1>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
    </>
  );
}

function ProfilePage({ userId }) {
  return (
    <>
      <Profile 
      userId={userId} 
      key={userId}
      />
    </>
  );
}
function App() {
  //Case 2

  //
  const [userId, setUserId] = useState('1')


  const switchUser = () => {
    //toggle between two user ids
    setUserId((prevUserId) => (prevUserId === '1' ? '2' : '') );
  }
  return (
    <div>
      <ProfilePage userId={userId} />
      <button onClick={switchUser} >Switch User</button>

    </div>
  );
}

export default App;
