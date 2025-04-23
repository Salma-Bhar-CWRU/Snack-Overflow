// =============================
// StatsPage.js
// =============================
/**
 * @file StatsPage.js
 * @description Displays a pie chart and table of monthly snack order statistics for admins.
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import SidebarLayout from '../components/SidebarLayout';

function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats/monthly")
      .then((res) => setData(res.data))
      .catch(() => alert("Error loading stats"));
  }, []);

  return (
    <SidebarLayout>
      <h1>📈 Snack Stats</h1>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="number_of_orders" nameKey="snack_name" cx="50%" cy="50%" outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={index} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <table className="order-table">
          <thead>
            <tr><th>Snack</th><th>Orders</th></tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}><td>{item.snack_name}</td><td>{item.number_of_orders}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </SidebarLayout>
  );
}

export default StatsPage;
