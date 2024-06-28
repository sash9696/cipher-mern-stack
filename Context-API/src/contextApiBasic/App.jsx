import React, { createContext, useContext } from "react";
import "./App.css";
import { UserContext } from "./main";

//create a context


//use provide to give data access

//use consumer or useContext to consume the data in any component

function App() {
  return (
    <div>
      <h1>APP</h1>
        <User />
      <Product />
      <Categories />
    </div>
  );
}

function User() {
  return (
    <>
      <h1>User</h1>
      <User1 />
    </>
  );
}

function User1() {

  const userData = useContext(UserContext);
    console.log(userData);

  return (
    <>

      <h1>User1</h1>
      <h2>{userData}</h2>
      {/* <UserContext.Consumer>
      {(value) => <h2>{value}</h2>}
    </UserContext.Consumer> */}
      <User2 />
    </>
  );
}
function User2() {
  const userData = useContext(UserContext);
  return (
    <>
      <h1>User2</h1>
      <h2>{userData}</h2>
      {/* <UserContext.Consumer>
      {(value) => <h2>{value}</h2>}
    </UserContext.Consumer> */}
    </>
  );
}
function Product() {
  const userData = useContext(UserContext);
  console.log(userData);
  return (
    <>
      <h1>Product</h1>
 
      <Product1 />
    </>
  );
}
function Product1() {
  return (
    <>
      <h1>Product1</h1>
      <Product2 />
    </>
  );
}
function Product2() {
  return (
    <>
      <h1>Product2</h1>
    </>
  );
}
function Categories() {
  return (
    <>
      <h1>Categories</h1>
      
    </>
  );
}

export default App;
