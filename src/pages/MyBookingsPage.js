import React, { useState, useEffect } from 'react';
import './MyBookingsPage.css';

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div className="my-bookings-page">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>{booking.name}</h3>
              <p>{booking.address}</p>
              <p>{booking.city}, {booking.state}, {booking.zipCode}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
