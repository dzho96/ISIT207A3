import React, { useState } from "react";
import "./ReleaseInfo.css";
import ReleaseForm from "./ReleaseForm";

const ReleaseInfo = () => {
  const [showForm, setShowForm] = useState(false);
  // Get user from localStorage (to match App logic)
  const user = (() => {
    const u = localStorage.getItem("currentUser");
    return u ? JSON.parse(u) : null;
  })();
  return (
    <div className="release-info-page">
      <div className="release-info-content">
        <div className="release-info-text">
          <h1 className="release-info-title">Rehoming Noticeboard</h1>
          <p className="release-info-desc">
            This page is for personal rehoming requests by caregivers who need to find new families for their pets. We provide a service to help you start the rehoming process and arrange a meeting session for checks and next steps. Please ensure you are ready for the responsibilities and requirements of rehoming. Animals for sale are strictly prohibited. If you are ready to proceed, click below to book a meeting session with our team.
          </p>
          <button className="release-info-btn" onClick={() => setShowForm((prev) => !prev)}>
            Book Meeting Session <span style={{marginLeft: 8, fontSize: '1.1em', verticalAlign: 'middle'}}>&#9660;</span>
          </button>
        </div>
        <div className="release-info-img-wrap">
          <img src="/cat.jpg" alt="Rehoming" className="release-info-img" />
        </div>
      </div>
      {showForm && <ReleaseForm onClose={() => setShowForm(false)} user={user} />}
    </div>
  );
};

export default ReleaseInfo;
