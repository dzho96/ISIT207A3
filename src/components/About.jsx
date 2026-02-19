import React from "react";
import "./About.css";

const services = [
    { icon: "/emergency.svg", text: "24/7 Emergency Animal Rescues" },
    { icon: "/education.svg", text: "Education and Outreach Programmes" },
    { icon: "/shelter.svg", text: "Shelter for Sick, Injured, Abused, Abandoned and Unwanted Pets and Community Animals" },
    { icon: "/adoptionprogramme.svg", text: "Adoption Programme that Includes Project Adore Scheme" },
    { icon: "/sterilize.svg", text: "Sterilisation for Community Animals" },
    { icon: "/reunite.svg", text: "Reuniting Lost Pets with Owners" },
];

const About = () => {
    return (
        <div className="about-page">
            <h1 className="about-title">Overview of Pet Haven</h1>
            <div className="overview-section">
                <img className="overview-img" src="/siamese.jpg" alt="Pet Haven Overview" />
                <div className="overview-content">
                    <div className="overview-heading">Who <span style={{color:'#1a3557'}}>We Are</span></div>
                    <div className="overview-desc">
                        Pet Haven is a registered charity focused on animal welfare, working independently to improve the lives of animals in our community. Our work is made possible by the generosity of donors and supporters who share our passion for animal protection.<br /><br />
                        Every year, we dedicate resources to a wide range of services: from round-the-clock animal rescues and welfare checks, to running a community clinic, adoption and education programs, helping reunite lost pets with their families, providing sterilisation for community animals, and offering a safe haven for animals in need.
                    </div>
                </div>
            </div>

            <div className="mission-vision-section">
                <div className="mission-vision-title">Mission & Vision</div>
                <div className="mission-vision-cards">
                    <div className="mission-card">
                        <img className="mission-icon" src="/mission.svg" alt="Mission Icon" />
                        <div className="mission-title">MISSION</div>
                        <div className="mission-desc">To inspire compassion and prevent harm to animals through education, advocacy, and hands-on support.</div>
                    </div>
                    <div className="vision-card">
                        <img className="vision-icon" src="/vision.svg" alt="Vision Icon" />
                        <div className="vision-title">VISION</div>
                        <div className="vision-desc">A caring society where every animal is valued and treated with dignity and respect.</div>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <div className="services-title">Our Services</div>
                <div className="services-list">
                    {services.map((service, idx) => (
                        <div className="service-item" key={idx}>
                            <img className="service-icon" src={service.icon} alt="Service Icon" />
                            {service.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;