// =============================
// EmployeeProfile.js
// =============================
/**
 * @file EmployeeProfile.js
 * @description Displays user-specific info like favorite snacks and daily order limit.
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmployeeSidebarLayout from '../components/EmployeeSidebarLayout';

function EmployeeProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [ordersToday, setOrdersToday] = useState(0);
  const [favoriteSnacks, setFavoriteSnacks] = useState([]);
  const orderLimit = 3;

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    axios
      .get(`http://localhost:5000/api/orders/${user.id}`)
      .then((res) => {
        const allOrders = res.data;

        // ✅ Count today's orders
        const countToday = allOrders.filter(order =>
          new Date(order.date_ordered).toISOString().split("T")[0] === today
        ).length;
        setOrdersToday(countToday);

        // ✅ Count snack frequency
        const snackMap = {};
        allOrders.forEach(order => {
          const snack = order.snack_name;
          snackMap[snack] = (snackMap[snack] || 0) + 1;
        });

        // ✅ Sort by frequency and get top 3
        const top3 = Object.entries(snackMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([snack]) => snack);

        setFavoriteSnacks(top3);
      })
      .catch(() => alert("Could not load order data."));
  }, [user.id]);

  return (
    <EmployeeSidebarLayout>
      <h1>{user.username}'s Profile</h1>
      <p><strong>Employee ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <p><em>Top 3 Favourite Snacks:</em></p>
      <ul>
        {favoriteSnacks.length > 0 ? (
          favoriteSnacks.map((snack, index) => <li key={index}>⭐ {snack}</li>)
        ) : (
          <li>No orders yet.</li>
        )}
      </ul>

      <p style={{ fontWeight: "bold", marginTop: "20px", color: "darkred" }}>
        Number of snacks left for the day: {orderLimit - ordersToday}
      </p>
    </EmployeeSidebarLayout>
  );
}

export default EmployeeProfile;
