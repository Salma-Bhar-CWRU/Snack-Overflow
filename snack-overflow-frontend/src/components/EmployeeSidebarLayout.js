import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../index.css';

function EmployeeSidebarLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🍪 Snack Overflow</div>
        <nav>
          <ul>
            <li onClick={() => navigate("/dashboard")} className={location.pathname === "/dashboard" ? "active" : ""}>
              🏠 Dashboard
            </li>
            <li onClick={() => navigate("/employee-profile")} className={location.pathname === "/profile" ? "active" : ""}>
              👤 Profile
            </li>
            <li onClick={() => navigate("/order-history")} className={location.pathname === "/order-history" ? "active" : ""}>
              📜 Order History
            </li>
            <li onClick={() => {
              localStorage.clear();
              navigate("/");
            }}>
              🚪 Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <div className="card">{children}</div>
      </div>
    </div>
  );
}

export default EmployeeSidebarLayout;
