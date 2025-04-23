// =============================
// InventoryPage.js
// =============================
/**
 * @file InventoryPage.js
 * @description Admin panel to view and add inventory items.
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarLayout from "../components/SidebarLayout";

function InventoryPage() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    snack_id: "",
    quantity: "",
    expiry_date: "",
    reorder_quantity: ""
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = () => {
    axios.get("http://localhost:5000/api/inventory")
      .then((res) => setInventory(res.data))
      .catch(() => alert("Error fetching inventory"));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/inventory", formData)
      .then(() => {
        fetchInventory();
        setFormData({ snack_id: "", quantity: "", expiry_date: "", reorder_quantity: "" });
        alert("Inventory added.");
      })
      .catch(() => alert("Error adding inventory"));
  };

  return (
    <SidebarLayout>
      <h1>📦 Snack Inventory</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: "30px" }}>
        <input type="number" name="snack_id" placeholder="Snack ID" value={formData.snack_id} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} required />
        <input type="number" name="reorder_quantity" placeholder="Reorder Qty" value={formData.reorder_quantity} onChange={handleChange} required />
        <button type="submit">Add Inventory</button>
      </form>

      <table className="order-table">
        <thead>
          <tr>
            <th>Snack ID</th>
            <th>Snack Item</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Reorder Qty</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, i) => (
            <tr key={i}>
              <td>{item.inventory_id}</td>
              <td>{item.snack_name}</td>
              <td>{item.quantity}</td>
              <td>{new Date(item.expiry_date).toLocaleDateString()}</td>
              <td>{item.reorder_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SidebarLayout>
  );
}

export default InventoryPage;
