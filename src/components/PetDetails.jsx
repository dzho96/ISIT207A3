import React, { useState } from "react";
import { Router, useParams } from "react-router-dom";
import { petPals } from "./petPalsData";
import AdoptionForm from "./AdoptionForm";
import "./PetDetails.css";

import { Link } from "react-router-dom";

const PetDetails = () => {
    const { id } = useParams();
    const pet = petPals.find((p) => p.id === id);
    const [showForm, setShowForm] = useState(false);

    if (!pet) {
        return <div className="pet-details-page"><h2>Pet not found</h2></div>;
    }

    return (
        <div className="pet-details-page">
            <nav className="breadcrumb-nav">
                <Link to="/adoption" className="breadcrumb-link">Adoption</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{pet.name}</span>
            </nav>
            <div className="pet-details-container">
                <div className="pet-details-card">
                    <img src={pet.image} alt={pet.name} className="pet-details-img" />
                    <div className="pet-details-info">
                        <h1 className="pet-details-name">{pet.name}</h1>
                        <div className="pet-details-species">{pet.species}</div>
                        <div className="pet-details-age">Age: {pet.age}</div>
                        <div className="pet-details-desc">{pet.description}</div>
                        <button className="pet-details-btn" onClick={() => setShowForm(true)}>
                            Book Viewing Session
                        </button>
                    </div>
                </div>
                {showForm && <AdoptionForm pet={pet} onClose={() => setShowForm(false)} />}
            </div>
        </div>

    );
};

export default PetDetails;
