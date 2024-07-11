import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchSection.css';

const SearchSection = ({ onSearch }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      const response = await axios.get('https://meddata-backend.onrender.com/states');
      setStates(response.data);
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        setCities(response.data);
      };
      fetchCities();
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      onSearch(selectedState, selectedCity);
    } else {
      alert("Please select both state and city.");
    }
  };

  return (
    <div className="search-section">
      <select onChange={(e) => setSelectedState(e.target.value)} className="dropdown">
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCity(e.target.value)} className="dropdown">
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <button onClick={handleSearch} className="primary-button">Search</button>
    </div>
  );
};

export default SearchSection;
