import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BookingPage from './pages/BookingPage';
import MyBookingsPage from './pages/MyBookingsPage';
import './styles/App.css';

const App = () => {
  const [searchParams, setSearchParams] = useState({ state: '', city: '' });

  const handleSearch = (state, city) => {
    setSearchParams({ state, city });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage onSearch={handleSearch} />} />
        <Route path="/search" element={<SearchResultsPage state={searchParams.state} city={searchParams.city} />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
