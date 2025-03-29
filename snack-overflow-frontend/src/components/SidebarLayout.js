import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../index.css';

function SidebarLayout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">🍪 Snack Overflow</div>
        <nav>
          <ul>
            <li onClick={() => navigate("/admin-dashboard")} className="active">
              📊 Dashboard
            </li>
            <li onClick={() => navigate("/admin-profile")}>
              👤 Profile
            </li>

            {user?.userType === "admin" && (
              <>
                <li onClick={() => navigate("/inventory")}>
                  📦 Inventory
                </li>
                <li onClick={() => navigate("/stats")}>
                  📈 Stats
                </li>
              </>
            )}

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
        <div className="card">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
