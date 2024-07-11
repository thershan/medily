import React from 'react';
import './SpecializationSection.css';

const SpecializationSection = () => (
  <div className="specialization-section">
    <h2>Find By Specialization</h2>
    <div className="specializations">
      <div className="specialization-card">Cardiology</div>
      <div className="specialization-card">Neurology</div>
      <div className="specialization-card">Orthopedics</div>
      <div className="specialization-card">Pediatrics</div>
      <div className="specialization-card">Radiology</div>
    </div>
    <button className="primary-button">View All</button>
  </div>
);

export default SpecializationSection;
