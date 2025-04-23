/**
 * @file App.js
 * @description Main application component defining all routes for public, employee, and admin access.
 */
import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.js";
import AdminProfile from './pages/AdminProfile.js';
import EmployeeProfile from './pages/EmployeeProfile.js';
import InventoryPage from './pages/InventoryPage.js';
import Login from "./pages/Login.js";
import OrderHistory from "./pages/OrderHistory.js";
import Register from "./pages/Register.js";
import StatsPage from './pages/StatsPage.js';
import UserDashboard from "./pages/UserDashboard.js";
import Welcome from "./pages/Welcome.js";

/**
 * Renders the main application routes using React Router.
 * Handles public and protected pages based on user role.
 * @returns {JSX.Element} The routed application component
 */
function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Employee Routes */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
        <Route path="/order-history" element={<OrderHistory />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/stats" element={<StatsPage />} />

        {/* Shared */}
        <Route path="/welcome" element={<Welcome />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
