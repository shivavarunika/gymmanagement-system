import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminReport = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Exclude trainers and admin (assuming admin username is "varun")
    const trainers = JSON.parse(localStorage.getItem('trainers')) || [];
    const trainerNames = trainers.map(t => t.name);
    const filtered = registeredUsers.filter(
      user => user.username !== 'varun' && !trainerNames.includes(user.username)
    );

    setMembers(filtered);
  }, []);

  const handleRemove = (usernameToRemove) => {
    const updatedMembers = members.filter(member => member.username !== usernameToRemove);
    setMembers(updatedMembers);

    // Update localStorage
    const allUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const updatedUsers = allUsers.filter(user => user.username !== usernameToRemove);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    // Optional: remove from trainerBookings if needed
    const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
    const updatedBookings = bookings.filter(b => b.member !== usernameToRemove);
    localStorage.setItem('trainerBookings', JSON.stringify(updatedBookings));
  };

  return (
    <div className="p-6">
      <AdminNavbar />
      <h1 className="text-2xl font-bold mb-4">Registered Members</h1>
      {members.length === 0 ? (
        <p className="text-gray-500">No registered members found.</p>
      ) : (
        <div className="space-y-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p><strong>Username:</strong> {member.username}</p>
                <p><strong>Phone:</strong> {member.phone}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                onClick={() => handleRemove(member.username)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminReport;
