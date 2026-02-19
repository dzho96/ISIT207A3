import React, { useState, useEffect } from "react";
import "./ReleaseForm.css";

const ReleaseForm = ({ onClose, user }) => {
  // Autofill state for personal info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.username || "");
      setPhone(user.phone || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="release-form-page">
      {onClose}
      <h2 className="release-form-title">Rehoming Request Form</h2>
      <form className="release-form" onSubmit={handleSubmit}>
        <fieldset className="release-form-section">
          <legend>You Information</legend>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Name *
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </label>
            </div>
            <div className="release-form-col">
              <label>Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </label>
            </div>
          </div>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Email *
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="release-form-section">
          <legend>Animal's Information</legend>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Type<select name="type" required defaultValue=""><option value="" disabled>Select type</option><option value="cat">Cat</option><option value="dog">Dog</option></select></label>
            </div>
            <div className="release-form-col">
              <label>Breed *<input type="text" name="breed" required placeholder="Animal's breed" /></label>
            </div>
          </div>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Name *<input type="text" name="petName" required placeholder="Animal's name" /></label>
            </div>
            <div className="release-form-col">
              <label>Age *<input type="text" name="age" required placeholder="Animal's age" /></label>
            </div>
          </div>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Colour *<input type="text" name="colour" required placeholder="Colour of animal" /></label>
            </div>
            <div className="release-form-col">
              <label>Gender *<input type="text" name="gender" required placeholder="Animal's gender" /></label>
            </div>
          </div>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Has the animal been trained?</label>
              <div className="release-form-radio-group">
                <label><input type="radio" name="trained" value="yes" /> Yes</label>
                <label><input type="radio" name="trained" value="no" defaultChecked /> No</label>
              </div>
            </div>
            <div className="release-form-col">
              <label>Has the animal been microchipped? *</label>
              <div className="release-form-radio-group">
                <label><input type="radio" name="microchipped" value="yes" /> Yes</label>
                <label><input type="radio" name="microchipped" value="no" defaultChecked /> No</label>
              </div>
            </div>
          </div>
          <div className="release-form-row">
            <div className="release-form-col">
              <label>Has the animal been sterilised? * </label>
              <div className="release-form-radio-group">
                <label><input type="radio" name="sterilised" value="yes" /> Yes</label>
                <label><input type="radio" name="sterilised" value="no" defaultChecked /> No</label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="release-form-row">
          <div className="release-form-col">
            <label>Reason for Rehoming *<textarea name="reason" rows="3" required placeholder="Please provide details" /></label>
          </div>
        </div>

        <button type="submit">Submit</button>
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
  );
};

export default ReleaseForm;
