import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResultsPage.css';

const SearchResultsPage = ({ state, city }) => {
  const [centers, setCenters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        console.log(response.data);  // Log the API response
        setCenters(response.data);
      } catch (error) {
        console.error('Error fetching medical centers:', error);
      }
    };
    fetchCenters();
  }, [state, city]);

  const handleBook = (center) => {
    navigate('/booking', { state: { center } });
  };

  return (
    <div className="search-results-page">
      <h2>Available Medical Centers in {city}, {state}</h2>
      <div className="centers-list">
        {centers.map((center, index) => (
          <div key={center['Provider ID'] || index} className="center-card">
            <div className="center-info">
              <h3>{center['Hospital Name']}</h3>
              <p>{center['Address']}</p>
              <p>{center['City']}, {center['State']}, {center['ZIP Code']}</p>
              <p>Rating: {center['Rating']}</p>
              <button onClick={() => handleBook(center)}>Book FREE Center Visit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
