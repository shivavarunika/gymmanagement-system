// import React, { useEffect, useState } from 'react';

// const TrainerDashboard = () => {
//   const trainerName = 'john_doe'; // Dummy logged-in trainer name

//   // Dummy data: all bookings
//   const dummyBookings = [
//     { trainerName: 'john_doe', member: 'Alice' },
//     { trainerName: 'john_doe', member: 'Bob' },
//     { trainerName: 'jane_smith', member: 'Charlie' }, // Won't show up
//   ];

//   // Dummy initial schedule
//   const dummyInitialSchedule = {
//     Alice: 'Monday 10am',
//     Bob: 'Wednesday 3pm',
//   };

//   const [bookings, setBookings] = useState([]);
//   const [schedule, setSchedule] = useState({});

//   useEffect(() => {
//     // Filter bookings where the trainerName matches the logged-in trainer
//     const myBookings = dummyBookings.filter(b => b.trainerName === trainerName);
//     setBookings(myBookings);

//     // Set dummy schedule
//     setSchedule(dummyInitialSchedule);
//   }, [trainerName]);

//   const handleSchedule = (member, timing) => {
//     // Update local schedule state only
//     setSchedule(prev => ({
//       ...prev,
//       [member]: timing,
//     }));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Trainer Dashboard</h1>
//       <h2 className="text-xl mb-2">Your Booked Members</h2>

//       {bookings.length === 0 ? (
//         <p className="text-gray-600">No members have booked you yet.</p>
//       ) : (
//         bookings.map((b, i) => (
//           <div key={i} className="mb-4 border p-3 rounded shadow">
//             <p className="font-semibold">Member: {b.member}</p>
//             <input
//               className="border px-2 py-1 mt-2 mr-2 rounded"
//               placeholder="Add schedule"
//               defaultValue={schedule[b.member] || ''}
//               onBlur={(e) => handleSchedule(b.member, e.target.value)}
//             />
//             <p className="text-sm mt-1 text-green-600">
//               Scheduled: {schedule[b.member] || 'Not scheduled'}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TrainerDashboard;
// TrainerDashboard.jsx
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
    setSchedule(trainerSchedule);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trainer Dashboard</h1>
      <h2 className="text-xl mb-2">Your Booked Members</h2>

      {bookings.length === 0 ? (
        <p>No members have booked you yet.</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="mb-4 p-4 border rounded">
            <p><strong>Member:</strong> {b.member}</p>
            <input
              className="border px-2 py-1 mt-2 rounded"
              placeholder="Add schedule"
              defaultValue={schedule[b.member] || ''}
              onBlur={(e) => handleSchedule(b.member, e.target.value)}
            />
            <p className="text-sm text-green-600 mt-1">
              Scheduled: {schedule[b.member] || 'Not scheduled'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default TrainerDashboard;
