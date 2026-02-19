
import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = ({ user, setUser }) => {
  const [username, setUsername] = useState(user?.username || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUsername(user?.username || "");
    setPhone(user?.phone || "");
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setMessage("Username cannot be empty");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUser = { ...user, username, phone };
    // Update user in users array
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
      users[idx] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setUser(updatedUser); // This will update App state and NavBar instantly
      setMessage("Profile updated successfully!");
    }
  };

  if (!user) return <div style={{padding:'2rem',textAlign:'center'}}>You must be logged in to view this page.</div>;

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">User Dashboard</h2>
      <form className="dashboard-form" onSubmit={handleSave}>
        <label>Email
          <input type="email" value={user.email} disabled />
        </label>
        <label>Username (Your Name)
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>Phone Number
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" />
        </label>
        <button type="submit">Save Changes</button>
        {message && <div className="dashboard-message">{message}</div>}
      </form>
    </div>
  );
};

export default Dashboard;
