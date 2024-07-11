import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchSection from '../components/SearchSection';
import SpecializationSection from '../components/SpecializationSection';
import MedicalSpecialistsSection from '../components/MedicalSpecialistsSection';
import NewsSection from '../components/NewsSection';
import FAQSection from '../components/FAQSection';
import DownloadAppSection from '../components/DownloadAppSection';
import './LandingPage.css';

const LandingPage = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (state, city) => {
    onSearch(state, city);
    navigate('/search');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-section-content">
          
          
      
        </div>
      </div>
      <SearchSection onSearch={handleSearch} />
      <SpecializationSection />
      <MedicalSpecialistsSection />
      <NewsSection />
      <FAQSection />
      <DownloadAppSection />
    </div>
  );
};

export default LandingPage;
