import React, { useState, useEffect } from "react";
import "./AdoptionForm.css";

const AdoptionForm = ({ pet, onClose }) => {
  // Autofill user info if logged in
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Try to get user from localStorage
    const u = localStorage.getItem("currentUser");
    if (u) {
      const user = JSON.parse(u);
      setName(user.username || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="adoption-form-modal-bg">
      <div className="adoption-form-modal">
        <button className="adoption-form-close" onClick={onClose}>&times;</button>
        <h2>Book Viewing Session</h2>
        <form className="adoption-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" required value={phone} onChange={e => setPhone(e.target.value)} autoComplete="tel" />
          </label>
          <label>
            Pet:
            <input type="text" name="pet" value={pet ? pet.name : ""} readOnly />
          </label>
          <label>
            Preferred Date:
            <input type="date" name="date" required />
          </label>
          <button type="submit" style={{
            marginTop: '1rem',
            padding: '0.7rem 2rem',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: '#ff9800',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}>Book Viewing Session</button>
        </form>
        {showSuccess && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 4000
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
              padding: '2.5rem 2rem 2rem 2rem',
              minWidth: 320,
              maxWidth: '95vw',
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#1a3557',
              fontWeight: 600
            }}>
              Booking Successful.<br />Information will be sent to your email.<br /><br />
              <button style={{
                marginTop: '1.5rem',
                padding: '0.7rem 2rem',
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: '0.5rem',
                background: '#2e7d32',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }} onClick={() => setShowSuccess(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdoptionForm;
