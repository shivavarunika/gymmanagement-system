// import React, { useEffect, useState } from 'react';

// const TrainerDashboard = () => {
//   const trainerName = localStorage.getItem('username'); // Logged-in trainer
//   const [bookings, setBookings] = useState([]);
//   const [schedule, setSchedule] = useState({});

//   useEffect(() => {
//     // Get all bookings from localStorage
//     const allBookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];

//     // Filter bookings where the trainerName matches the logged-in trainer
//     const myBookings = allBookings.filter(b => b.trainerName === trainerName);

//     // Ensure that each booking has the correct member name
//     setBookings(myBookings);

//     // Get the trainer schedules from localStorage
//     const allSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};
//     setSchedule(allSchedules[trainerName] || {});
//   }, [trainerName]);

//   const handleSchedule = (member, timing) => {
//     // Get the current schedules from localStorage
//     const allSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};
    
//     // Update the schedule for the current trainer and member
//     allSchedules[trainerName] = { ...allSchedules[trainerName], [member]: timing };

//     // Save the updated schedules to localStorage
//     localStorage.setItem('trainerSchedules', JSON.stringify(allSchedules));
//     setSchedule(allSchedules[trainerName]);
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
//             <p className="font-semibold">Member: {b.member}</p> {/* Display member's name */}
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
import React, { useEffect, useState } from 'react';

const TrainerDashboard = () => {
  const trainerName = 'john_doe'; // Dummy logged-in trainer name

  // Dummy data: all bookings
  const dummyBookings = [
    { trainerName: 'john_doe', member: 'Alice' },
    { trainerName: 'john_doe', member: 'Bob' },
    { trainerName: 'jane_smith', member: 'Charlie' }, // Won't show up
  ];

  // Dummy initial schedule
  const dummyInitialSchedule = {
    Alice: 'Monday 10am',
    Bob: 'Wednesday 3pm',
  };

  const [bookings, setBookings] = useState([]);
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    // Filter bookings where the trainerName matches the logged-in trainer
    const myBookings = dummyBookings.filter(b => b.trainerName === trainerName);
    setBookings(myBookings);

    // Set dummy schedule
    setSchedule(dummyInitialSchedule);
  }, [trainerName]);

  const handleSchedule = (member, timing) => {
    // Update local schedule state only
    setSchedule(prev => ({
      ...prev,
      [member]: timing,
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trainer Dashboard</h1>
      <h2 className="text-xl mb-2">Your Booked Members</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No members have booked you yet.</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="mb-4 border p-3 rounded shadow">
            <p className="font-semibold">Member: {b.member}</p>
            <input
              className="border px-2 py-1 mt-2 mr-2 rounded"
              placeholder="Add schedule"
              defaultValue={schedule[b.member] || ''}
              onBlur={(e) => handleSchedule(b.member, e.target.value)}
            />
            <p className="text-sm mt-1 text-green-600">
              Scheduled: {schedule[b.member] || 'Not scheduled'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default TrainerDashboard;
