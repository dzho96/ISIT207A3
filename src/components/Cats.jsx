import React from 'react';
import './Cats.css';

function Cats() {
  const cats = [
    { name: 'Whiskers', image: "images/cat1.jpg" },
    { name: 'Mittens', image: "images/cat2.jpg" },
    { name: 'Shadow', image: "images/cat3.jpg" },
  ];

  return (
    <div className="cats-container">
      <h2 className="cats-title">Available Cats for Adoption</h2>

      <div className="cats-grid">
        {cats.map((cat, index) => (
          <div key={index} className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="cat-image"
            />

            <div className="cat-info">
              <h3 className="cat-name">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;
