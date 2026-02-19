import React from "react";

function AdoptForm() {
  return (
    <div className="adopt-form">
      <h2>Adopt a Pet</h2>
      <form>
        <label>Name:
          <input type="text" name="name" required />
        </label>
        <label>Pet Type:
          <select name="petType" required>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
        <label>Pet Name:
          <input type="text" name="petName" required />
        </label>
        <label>Contact:
          <input type="text" name="contact" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdoptForm;
