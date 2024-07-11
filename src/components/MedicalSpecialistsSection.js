import React from 'react';
import './MedicalSpecialistsSection.css';
import JohnDoeImage from '../images/john-doe.jpg';
import JaneSmithImage from '../images/jane-smith.avif';

const MedicalSpecialistsSection = () => (
  <div className="medical-specialists-section">
    <h2>Our Medical Specialists</h2>
    <div className="specialists">
      <div className="specialist-card">
        <img src={JohnDoeImage} alt="Dr. John Doe" />
        <h3>Dr. John Doe</h3>
        <p>Cardiologist</p>
      </div>
      <div className="specialist-card">
        <img src={JaneSmithImage} alt="Dr. Jane Smith" />
        <h3>Dr. Jane Smith</h3>
        <p>Neurologist</p>
      </div>
    </div>
  </div>
);

export default MedicalSpecialistsSection;
