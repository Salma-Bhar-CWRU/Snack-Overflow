import React from "react";
import "../index.css"; // Ensures global styles are used

const EmployeeSO = () => {
  const snacks = ["Twix", "Nerds", "Lays (Classic)", "Lays (BBQ)", "Oreo Mini", "Chips Ahoy"];

  return (
    <div className="employee-home">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Snack Overflow</h2>
        <nav>
          <ul>
            <li className="active">🏠 Home</li>
            <li>📜 Orders</li>
            <li>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="welcome-banner">
          <h1>Welcome Back, <em>employee name</em></h1>
          <span className="cart-icon">🛒</span>
        </header>

        {/* Snack List */}
        <section className="snack-list">
          {snacks.map((snack, index) => (
            <div key={index} className="snack-card">
              <p className="snack-name">{snack}</p>
              <button className="add-to-cart">+ Add to cart</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default EmployeeSO;
