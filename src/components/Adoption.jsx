import React from "react";
import { useNavigate } from "react-router-dom";
import "./Adoption.css";

const Adoption = () => {
  const navigate = useNavigate();
  return (
    <div className="adoption-page">
      <h1 className="adoption-title">Adoption Form</h1>
      <button className="adoption-back-btn" onClick={() => navigate('/adoption')} style={{marginBottom: '1rem'}}>Back to Gallery</button>
      <form className="adoption-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Type of Pet:
          <select name="petType" required>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
        <label>
          Why do you want to adopt?
          <textarea name="reason" rows="4" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adoption;
