import React from "react";

function PetCare() {
  return (
    <div className="pet-care">
      <h2>Pet Care Tips</h2>
      <ul>
        <li>Provide fresh water and food daily.</li>
        <li>Regular vet checkups are important.</li>
        <li>Give your pet plenty of exercise and affection.</li>
        <li>Watch videos on proper grooming and training.</li>
      </ul>
      <div>
        <h3>Helpful Video</h3>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/1qkAupZMfPA" title="Pet Care Tips" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default PetCare;
