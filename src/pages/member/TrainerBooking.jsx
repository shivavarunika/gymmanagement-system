// import React, { useEffect, useState } from 'react';

// const TrainerBooking = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [bookedTrainer, setBookedTrainer] = useState(null);
//   const memberUsername = localStorage.getItem('username');

//   useEffect(() => {
//     // Load trainers from localStorage (from the admin side)
//     const storedTrainers = JSON.parse(localStorage.getItem('trainers')) || [];
//     setTrainers(storedTrainers);

//     // Check if member already has a booking
//     const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
//     const myBooking = bookings.find(b => b.member === memberUsername);
//     if (myBooking) {
//       const trainer = storedTrainers.find(t => t.name === myBooking.trainerName);
//       if (trainer) setBookedTrainer(trainer);
//     }
//   }, [memberUsername]);

//   const handleBook = (trainer) => {
//     if (bookedTrainer) return; // Prevent multiple bookings

//     const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
//     bookings.push({ trainerName: trainer.name, member: memberUsername });
//     localStorage.setItem('trainerBookings', JSON.stringify(bookings));
//     setBookedTrainer(trainer);
//   };

//   const handleCancel = () => {
//     let bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
//     bookings = bookings.filter(b => b.member !== memberUsername);
//     localStorage.setItem('trainerBookings', JSON.stringify(bookings));
//     setBookedTrainer(null);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Book a Trainer</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {trainers.map((t, i) => (
//           <div key={i} className="border p-4 rounded shadow">
//             <h2 className="text-lg font-semibold">{t.name}</h2>
//             {bookedTrainer?.name === t.name ? (
//               <button
//                 className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//                 onClick={handleCancel}
//               >
//                 Cancel Booking
//               </button>
//             ) : (
//               <button
//                 className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
//                 onClick={() => handleBook(t)}
//                 disabled={!!bookedTrainer}
//               >
//                 {bookedTrainer ? "Already Booked" : "Book Trainer"}
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {bookedTrainer && (
//         <p className="mt-4 text-green-600">
//           You have booked <strong>{bookedTrainer.name}</strong>.
//         </p>
//       )}
//     </div>
//   );
// };

// export default TrainerBooking;
import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const TrainerBooking = () => {
  const [trainers, setTrainers] = useState([]);
  const [bookedTrainer, setBookedTrainer] = useState(null);
  const memberUsername = 'member123'; // Replace with the actual username logic if necessary

  useEffect(() => {
    // Simulating fetching trainers from a dummy source
    const dummyTrainers = [
      { name: 'John Doe', expertise: 'Yoga' },
      { name: 'Jane Smith', expertise: 'Strength Training' },
      { name: 'Emily Davis', expertise: 'Pilates' },
    ];
    setTrainers(dummyTrainers);

    // Simulating fetching member's booking (dummy value)
    const dummyBookings = [
      { trainerName: 'John Doe', member: 'member123' }, // Example booking
    ];

    const myBooking = dummyBookings.find(b => b.member === memberUsername);
    if (myBooking) {
      const trainer = dummyTrainers.find(t => t.name === myBooking.trainerName);
      if (trainer) setBookedTrainer(trainer);
    }
  }, [memberUsername]);

  const handleBook = (trainer) => {
    if (bookedTrainer) return; // Prevent multiple bookings

    // Simulating booking a trainer (add booking to dummy bookings)
    const newBooking = { trainerName: trainer.name, member: memberUsername };
    console.log('Booking trainer:', newBooking);
    setBookedTrainer(trainer);
  };

  const handleCancel = () => {
    // Simulating canceling the booking
    console.log('Canceling booking for trainer:', bookedTrainer.name);
    setBookedTrainer(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Book a Trainer</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainers.map((t, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{t.name}</h2>
              <p className="text-sm text-gray-500">{t.expertise}</p>
              {bookedTrainer?.name === t.name ? (
                <button
                  className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={handleCancel}
                >
                  Cancel Booking
                </button>
              ) : (
                <button
                  className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleBook(t)}
                  disabled={!!bookedTrainer}
                >
                  {bookedTrainer ? "Already Booked" : "Book Trainer"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {bookedTrainer && (
        <p className="mt-4 text-green-600">
          You have booked <strong>{bookedTrainer.name}</strong> for {bookedTrainer.expertise}.
        </p>
      )}
    </div>
  );
};

export default TrainerBooking;



