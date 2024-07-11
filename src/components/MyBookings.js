import React from 'react';

const MyBookings = ({ bookings }) => (
  <div>
    {bookings.map((booking) => (
      <div key={booking.id}>
        <h2>{booking.centerName}</h2>
        <p>{booking.date} at {booking.time}</p>
      </div>
    ))}
  </div>
);

export default MyBookings;
