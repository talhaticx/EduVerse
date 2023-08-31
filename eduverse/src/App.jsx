import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NavbarWrapper from "./components/navbarwrapper";
import Sidebar from "./pages/global/sidebar";

import Error from "./pages/error";
import Assignment from "./pages/assingment";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/analytics" element={<h1>Analytics </h1>} />
          <Route path="/comment" element={<h1>Comment </h1>} />
          <Route path="/product" element={<h1>Product</h1>} />
          <Route path="/list" element={<h1>List</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/assignment" element={<Assignment/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        </Sidebar>
    </BrowserRouter>
  );
}

export default App;
