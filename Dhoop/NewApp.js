import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Welcome from "./pages/Welcome";
import OrderHistory from "./pages/OrderHistory"; // Import the Order History Component

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Login) }),
      React.createElement(Route, { path: "/register", element: React.createElement(Register) }),
      React.createElement(Route, { path: "/forgot-password", element: React.createElement(ForgotPassword) }),
      React.createElement(Route, { path: "/reset-password", element: React.createElement(ResetPassword) }),
      React.createElement(Route, { path: "/welcome", element: React.createElement(Welcome) }),
      React.createElement(Route, { path: "/order-history", element: React.createElement(OrderHistory) }) // New Route for Orders
    )
  );
}

export default App;

