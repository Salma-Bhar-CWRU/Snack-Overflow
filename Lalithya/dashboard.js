import React from "react";
import "../styles.css"; // Import styles

// Import images
import HomeIcon from "../assets/icons/home.png";
import OrderHistoryIcon from "../assets/icons/list.png";
import StatsIcon from "../assets/icons/chart.png";
import InventoryIcon from "../assets/icons/do.png";
import ProfileIcon from "../assets/icons/user.png";
import CheckIcon from "../assets/icons/check.png";
import CloseIcon from "../assets/icons/close.png";
import SnackLogo from "../assets/icons/snack-logo.png"; // Bigger logo

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="main-container">
        {/* Header - Overlapping Effect */}
        <div className="header">
          Welcome Back, <span className="italic">admin name!</span>
        </div>

        {/* New Section Title */}
        <div className="section-title">Pending Approvals</div>

        {/* Pending Approvals */}
        <div className="approvals-container">
          <h2 className="text-lg font-bold border-b pb-3">Pending Approvals</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Snack Name</th>
                <th>Time of Order</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td>
                    Employee Name <br />
                    <span className="text-gray-500 italic">Employee ID</span>
                  </td>
                  <td>Snack Name</td>
                  <td>Time of Order</td>
                  <td className="actions">
                    <button>
                      <img src={CheckIcon} alt="Approve" />
                    </button>
                    <button>
                      <img src={CloseIcon} alt="Reject" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sidebar - Moved to Right */}
      <aside className="sidebar">
        <img src={SnackLogo} alt="Snack Overflow" className="snack-logo" />
        <button><img src={HomeIcon} alt="Home" /></button>
        <button><img src={OrderHistoryIcon} alt="Order History" /></button>
        <button><img src={StatsIcon} alt="Stats" /></button>
        <button><img src={InventoryIcon} alt="Inventory" /></button>
        <div className="mt-auto pb-4">
          <button><img src={ProfileIcon} alt="Profile" /></button>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;

