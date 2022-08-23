import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./view/components/Home";
import Login from "./view/components/Login";
import RegisterForm from "./view/components/Register";


export function Redirect() {
    
    return (
      <Router>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="Register" element={<RegisterForm />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </Router>
    );
}

export default Redirect;