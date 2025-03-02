import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;

