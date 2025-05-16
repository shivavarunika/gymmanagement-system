import React, { useEffect, useState } from 'react';

const TrainerDashboard = () => {
  const trainerName = localStorage.getItem('trainerName') || 'john_doe';
  const [bookings, setBookings] = useState([]);
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
    const myBookings = allBookings.filter(b => b.trainerName === trainerName);
    setBookings(myBookings);

    const allSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};
    setSchedule(allSchedules[trainerName] || {});
  }, [trainerName]);

  const handleSchedule = (member, time) => {
    const allSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};
    const trainerSchedule = allSchedules[trainerName] || {};
    trainerSchedule[member] = time;
    allSchedules[trainerName] = trainerSchedule;
    localStorage.setItem('trainerSchedules', JSON.stringify(allSchedules));
    setSchedule({ ...trainerSchedule });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/33/91/97/360_F_333919715_R1mDUWPgwB2CRvSCNnvnmtn64gPY40ZL.jpg')`
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Trainer Dashboard</h1>
        <h2 className="text-xl font-semibold mb-4">Your Booked Members</h2>

        {bookings.length === 0 ? (
          <p className="text-gray-700">No members have booked you yet.</p>
        ) : (
          bookings.map((b, i) => (
            <div key={i} className="mb-4 p-4 border rounded bg-gray-100">
              <p className="font-semibold">Member: {b.member}</p>
              <input
                type="time"
                value={schedule[b.member] || ''}
                onChange={(e) => handleSchedule(b.member, e.target.value)}
                className="w-full mt-2 p-2 border rounded"
              />
              <p className="text-sm text-green-600 mt-1">
                Scheduled: {schedule[b.member] || 'Not scheduled'}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrainerDashboard;
