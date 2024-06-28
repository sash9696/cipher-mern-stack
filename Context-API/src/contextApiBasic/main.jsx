import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const UserContext = createContext();

console.log(UserContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserContext.Provider value="John" >
   <App />
  </UserContext.Provider>

 
  // </React.StrictMode>,
)

