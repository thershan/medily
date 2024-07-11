import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Medify</div>
    <div className="navbar-links">
      <Link to="/">Find Doctors</Link>
      <Link to="/hospitals">Hospitals</Link>
      <Link to="/medicines">Medicines</Link>
      <Link to="/surgeries">Surgeries</Link>
      <Link to="/software">Software for Provider</Link>
      <Link to="/facilities">Facilities</Link>
      <Link to="/my-bookings">My Bookings</Link>
    </div>
  </nav>
);

export default NavBar;
