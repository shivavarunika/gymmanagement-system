import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';

const ManageBookings = () => {
  const [groupedBookings, setGroupedBookings] = useState({});

  useEffect(() => {
    // Simulated fetched data — replace this with an API call later
    const bookings = [
      { trainerName: 'John Doe', member: 'Alice' },
      { trainerName: 'John Doe', member: 'Bob' },
      { trainerName: 'Jane Smith', member: 'Charlie' },
    ];

    const grouped = {};
    bookings.forEach(({ trainerName, member }) => {
      if (!grouped[trainerName]) {
        grouped[trainerName] = [];
      }
      grouped[trainerName].push(member);
    });

    setGroupedBookings(grouped);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Manage Trainer Bookings</h1>

        {Object.keys(groupedBookings).length > 0 ? (
          Object.entries(groupedBookings).map(([trainer, members], index) => (
            <div key={index} className="mb-6 p-4 border rounded bg-gray-50 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Trainer: {trainer}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;
