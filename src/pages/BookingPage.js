import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const { center } = location.state || {};

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!center || !center['Hospital Name']) {
    return <p>No center selected. Please go back and select a center.</p>;
  }

  const handleBook = () => {
    const booking = {
      name: center['Hospital Name'],
      address: center['Address'],
      city: center['City'],
      state: center['State'],
      zipCode: center['ZIP Code'],
      date,
      time,
    };

    console.log(`Booked at ${booking.name} on ${date} at ${time}`);

    // Save booking to localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
  };

  return (
    <div className="booking-page">
      <h2>Book an Appointment at {center['Hospital Name']}</h2>
      <p>{center['Address']}</p>
      <p>{center['City']}, {center['State']}, {center['ZIP Code']}</p>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleBook} className="primary-button">Book Appointment</button>
    </div>
  );
};

export default BookingPage;
