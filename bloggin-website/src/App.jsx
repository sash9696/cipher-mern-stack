import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthRoute, GuestRoute, Navbar } from "./components";
import { Auth, Editor, Home, Settings } from "./pages";
import axios from "axios";

function App() {
  useEffect(() => {

    const jwt = window.localStorage.getItem('jwtToken');

    if(!jwt) return {};

    const parsedJwt = JSON.parse(atob(jwt));
    console.log('parsedJwt',{parsedJwt})
    axios.defaults.headers.Authorization = `Token ${parsedJwt.token}`;

  }, []);
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<GuestRoute />}>
              <Route path="/register" element={<Auth key="register" />} />
            </Route>

            {/* <GuestRoute path='/register' element={<h1>Register </h1>} /> */}
            <Route path="/login" element={<GuestRoute />}>
              <Route path="/login" element={<Auth key="login" />} />
            </Route>
            {/* <Route path='/login' element={<h1>Login </h1>} /> */}
            <Route path="/settings" element={<AuthRoute />}>
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/editor" element={<AuthRoute />}>
              <Route path="/editor" element={<Editor/>} />
            </Route>
            <Route path="/editor/:slug" element={<h1>Editor </h1>} />
            <Route path="/article/:slug" element={<h1>Article </h1>} />
            <Route path="/profile/:username" element={<h1>Profile </h1>} />
            <Route path="/@:username" element={<AuthRoute />}>
              <Route path="/@:username" element={<h1>Profile </h1>} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
