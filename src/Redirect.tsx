import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export function Redirect() {
    
    return (
      <Router>
        <div>
          <Routes>
            <Route path="Login" element={<Login/>} />
            <Route path="/" element={<Login />} />
            <Route path="Register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
    );
}

export default Redirect;