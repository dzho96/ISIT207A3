import React, { useState } from "react";

const SignUp = ({ onSignUp, onSwitch }) => {
  const [email, setEmail] = useState("");
  // Username removed, only email and password required
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === email)) {
      setError("Email already registered");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const newUser = { email, password, username: 'user' };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    onSignUp(newUser);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <div className="auth-error">{error}</div>}
      <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
      <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
      <label>Confirm Password<input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required /></label>
      <button type="submit">Sign Up</button>
      <div className="auth-switch">Already have an account? <span onClick={onSwitch} style={{color:'#1a3557',cursor:'pointer'}}>Log In</span></div>
    </form>
  );
};

export default SignUp;
