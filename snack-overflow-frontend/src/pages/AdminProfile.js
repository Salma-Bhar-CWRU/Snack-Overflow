// =============================
// AdminProfile.js
// =============================
/**
 * @file AdminProfile.js
 * @description Displays admin profile details and navigation to reports and inventory.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';

function AdminProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate(); 

  return (
    <SidebarLayout>
      <h1>{user.username}'s Profile</h1>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Admin ID:</strong> #{user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={() => navigate("/stats")}>Check monthly Statistics</button>
      <button onClick={() => navigate("/inventory")}>Request snack Orders</button>
    </SidebarLayout>
  );
}

export default AdminProfile;
