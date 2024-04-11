import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";

const Routing = () => {
  return (
    <BrowserRouter>
      <button>
        <Link to="/SignUp">SignUp</Link>
      </button>
      <button>
        <Link to="/Login">Login</Link>
      </button>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
