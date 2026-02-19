import React, { useState } from "react";

const Login = ({ onLogin, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      {error && <div className="auth-error">{error}</div>}
      <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
      <button type="submit">Log In</button>
      <div className="auth-switch">Don't have an account? <span onClick={onSwitch} style={{color:'#1a3557',cursor:'pointer'}}>Sign Up</span></div>
    </form>
  );
};

export default Login;
