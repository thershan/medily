// src/components/BookingInterface.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingInterface.css'; // Import the custom styles

const BookingInterface = ({ center, onBook }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const handleBooking = () => {
    if (time) {
      onBook({ center, date, time });
    } else {
      alert('Please select a time for your appointment.');
    }
  };

  return (
    <div className="booking-interface">
      <h2>Book Appointment at {center.name}</h2>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>
        <label>Select Time:</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default BookingInterface;
