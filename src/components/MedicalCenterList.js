import React from 'react';

const MedicalCenterList = ({ centers }) => (
  <div>
    {centers.map((center) => (
      <div key={center.id}>
        <h2>{center.name}</h2>
        <p>{center.address}</p>
        <p>{center.city}, {center.state}, {center.zipCode}</p>
        <p>Rating: {center.rating}</p>
      </div>
    ))}
  </div>
);

export default MedicalCenterList;
