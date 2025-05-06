import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const ScheduledTraining = () => {
  const username = localStorage.getItem('username'); // logged-in member
  const [schedule, setSchedule] = useState(null);
  const [trainerName, setTrainerName] = useState(null);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
    const trainerSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};

    const myBooking = bookings.find(b => b.member === username);
    if (myBooking) {
      setTrainerName(myBooking.trainerName);

      const trainerSchedule = trainerSchedules[myBooking.trainerName] || {};
      setSchedule(trainerSchedule[username] || null);
    }
  }, [username]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">My Training Schedule</h1>
      {trainerName ? (
        <div className="bg-white p-4 rounded shadow">
          <p className="mb-2">Trainer: <strong>{trainerName}</strong></p>
          <p className="text-green-600">
            Scheduled Time: <strong>{schedule || 'Not yet scheduled'}</strong>
          </p>
        </div>
      ) : (
        <p className="text-gray-600">You have not booked any trainer yet.</p>
      )}
    </div>
    </div>
  );
};

export default ScheduledTraining;
