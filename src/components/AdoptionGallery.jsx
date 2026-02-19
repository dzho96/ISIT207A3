import React from "react";
import { Link } from "react-router-dom";
import { petPals } from "./petPalsData";
import "./AdoptionGallery.css";

const AdoptionGallery = () => {
  return (
    <div className="adoption-gallery-page">
      <div className="adoption-gallery-container">
        <h1 className="adoption-gallery-title">Meet Our Pet Pals</h1>
        <div className="adoption-gallery-grid">
          {petPals.map((pet) => (
            <Link to={`/adoption/${pet.id}`} className="adoption-gallery-card" key={pet.id}>
              <img src={pet.image} alt={pet.name} className="adoption-gallery-img" loading="lazy" />
              <div className="adoption-gallery-name">{pet.name}</div>
              <div className="adoption-gallery-species">{pet.species}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdoptionGallery;
