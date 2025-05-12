// import React, { useEffect, useState } from 'react';
// import MemberNavbar from './MemberNavbar';

// const ScheduledTraining = () => {
//   const username = localStorage.getItem('username'); // logged-in member
//   const [schedule, setSchedule] = useState(null);
//   const [trainerName, setTrainerName] = useState(null);

//   useEffect(() => {
//     const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
//     const trainerSchedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};

//     const myBooking = bookings.find(b => b.member === username);
//     if (myBooking) {
//       setTrainerName(myBooking.trainerName);
//       const trainerSchedule = trainerSchedules[myBooking.trainerName] || {};
//       setSchedule(trainerSchedule[username] || null);
//     }
//   }, [username]);

//   return (
//     <div
//       className="p-6 min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
//       }}
//     >
//       <MemberNavbar />
//       <div className="mt-8 max-w-4xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
//         <h1 className="text-2xl font-bold mb-4">My Training Schedule</h1>
//         {trainerName ? (
//           <div className="bg-white bg-opacity-80 p-4 rounded shadow">
//             <p className="mb-2">
//               Trainer: <strong>{trainerName}</strong>
//             </p>
//             <p className="text-green-600">
//               Scheduled Time: <strong>{schedule || 'Not yet scheduled'}</strong>
//             </p>
//           </div>
//         ) : (
//           <p className="text-gray-700">You have not booked any trainer yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScheduledTraining;
// Member - ScheduledTraining.jsx
import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const ScheduledTraining = () => {
  const username = localStorage.getItem('username') || 'member123';
  const [trainerName, setTrainerName] = useState(null);
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
    const myBooking = bookings.find(b => b.member === username);
    if (myBooking) {
      setTrainerName(myBooking.trainerName);
      const schedules = JSON.parse(localStorage.getItem('trainerSchedules')) || {};
      setSchedule(schedules[myBooking.trainerName]?.[username] || null);
    }
  }, [username]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">My Training Schedule</h1>
        {trainerName ? (
          <div className="bg-white p-4 rounded shadow">
            <p>Trainer: <strong>{trainerName}</strong></p>
            <p className="text-green-600 mt-2">Scheduled Time: <strong>{schedule || 'Not yet scheduled'}</strong></p>
          </div>
        ) : (
          <p>You have not booked any trainer yet.</p>
        )}
      </div>
    </div>
  );
};

export default ScheduledTraining;
