import React, { createContext, useContext, useState } from "react";
import "./App.css";

//react context api

//create a context

const ThemeContext = createContext(null);

//using provider to provide the access 

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme} >
      <Form />
      <label>
        <input
        checked={theme === 'dark'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        type="checkbox" 
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <>
      <Panel title='Welcome' >
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    </>
  );
}

function Panel({title, children}){
  const theme = useContext(ThemeContext);
  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )

}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = `button-${theme}`;
  return <button className={className}>{children}</button>;
}
