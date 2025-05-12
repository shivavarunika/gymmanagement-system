// // import React, { useEffect, useState } from 'react';
// // import MemberNavbar from './MemberNavbar';

// // const TrainerBooking = () => {
// //   const [trainers, setTrainers] = useState([]);
// //   const [bookedTrainer, setBookedTrainer] = useState(null);
// //   const memberUsername = 'member123'; // Replace with actual logic if needed

// //   useEffect(() => {
// //     const dummyTrainers = [
// //       { name: 'John Doe', expertise: 'Yoga' },
// //       { name: 'Jane Smith', expertise: 'Strength Training' },
// //       { name: 'Emily Davis', expertise: 'Pilates' },
// //     ];
// //     setTrainers(dummyTrainers);

// //     const dummyBookings = [
// //       { trainerName: 'John Doe', member: 'member123' },
// //     ];

// //     const myBooking = dummyBookings.find(b => b.member === memberUsername);
// //     if (myBooking) {
// //       const trainer = dummyTrainers.find(t => t.name === myBooking.trainerName);
// //       if (trainer) setBookedTrainer(trainer);
// //     }
// //   }, [memberUsername]);

// //   const handleBook = (trainer) => {
// //     if (bookedTrainer) return;
// //     const newBooking = { trainerName: trainer.name, member: memberUsername };
// //     console.log('Booking trainer:', newBooking);
// //     setBookedTrainer(trainer);
// //   };

// //   const handleCancel = () => {
// //     console.log('Canceling booking for trainer:', bookedTrainer.name);
// //     setBookedTrainer(null);
// //   };

// //   return (
// //     <div
// //       className="p-6 min-h-screen bg-cover bg-center"
// //       style={{
// //         backgroundImage:
// //           "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
// //       }}
// //     >
// //       <MemberNavbar />
// //       <div className="mt-8 max-w-4xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
// //         <h1 className="text-2xl font-bold mb-4">Book a Trainer</h1>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {trainers.map((t, i) => (
// //             <div key={i} className="border p-4 rounded shadow bg-white bg-opacity-80">
// //               <h2 className="text-lg font-semibold">{t.name}</h2>
// //               <p className="text-sm text-gray-600">{t.expertise}</p>
// //               {bookedTrainer?.name === t.name ? (
// //                 <button
// //                   className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
// //                   onClick={handleCancel}
// //                 >
// //                   Cancel Booking
// //                 </button>
// //               ) : (
// //                 <button
// //                   className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
// //                   onClick={() => handleBook(t)}
// //                   disabled={!!bookedTrainer}
// //                 >
// //                   {bookedTrainer ? "Already Booked" : "Book Trainer"}
// //                 </button>
// //               )}
// //             </div>
// //           ))}
// //         </div>

// //         {bookedTrainer && (
// //           <p className="mt-4 text-green-700 font-medium">
// //             You have booked <strong>{bookedTrainer.name}</strong> for {bookedTrainer.expertise}.
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrainerBooking;
// import React, { useEffect, useState } from 'react';
// import MemberNavbar from './MemberNavbar';

// const TrainerBooking = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [bookedTrainer, setBookedTrainer] = useState(null);
//   const memberUsername = 'member123';

//   useEffect(() => {
//     const dummyTrainers = [
//       {
//         name: 'John Doe',
//         expertise: 'Yoga',
//         image: 'https://unsplash.it/100/100?image=100',
//       },
//       {
//         name: 'Jane Smith',
//         expertise: 'Strength Training',
//         image: 'https://unsplash.it/100/100?image=101',
//       },
//       {
//         name: 'Emily Davis',
//         expertise: 'Pilates',
//         image: 'https://unsplash.it/100/100?image=102',
//       },
//     ];
//     setTrainers(dummyTrainers);

//     const dummyBookings = [
//       { trainerName: 'John Doe', member: 'member123' },
//     ];

//     const myBooking = dummyBookings.find(b => b.member === memberUsername);
//     if (myBooking) {
//       const trainer = dummyTrainers.find(t => t.name === myBooking.trainerName);
//       if (trainer) setBookedTrainer(trainer);
//     }
//   }, [memberUsername]);

//   const handleBook = (trainer) => {
//     if (bookedTrainer) return;
//     setBookedTrainer(trainer);
//   };

//   const handleCancel = () => {
//     setBookedTrainer(null);
//   };

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
//         <h1 className="text-2xl font-bold mb-4">Book a Trainer</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {trainers.map((t, i) => (
//             <div key={i} className="border p-4 rounded shadow bg-white bg-opacity-80 flex items-center gap-4">
//               <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
//               <div>
//                 <h2 className="text-lg font-semibold">{t.name}</h2>
//                 <p className="text-sm text-gray-600">{t.expertise}</p>
//                 {bookedTrainer?.name === t.name ? (
//                   <button
//                     className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//                     onClick={handleCancel}
//                   >
//                     Cancel Booking
//                   </button>
//                 ) : (
//                   <button
//                     className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
//                     onClick={() => handleBook(t)}
//                     disabled={!!bookedTrainer}
//                   >
//                     {bookedTrainer ? "Already Booked" : "Book Trainer"}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {bookedTrainer && (
//           <p className="mt-4 text-green-700 font-medium">
//             You have booked <strong>{bookedTrainer.name}</strong> for {bookedTrainer.expertise}.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrainerBooking;

import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const TrainerBooking = () => {
  const memberUsername = localStorage.getItem('username') || 'member123';
  const [trainers, setTrainers] = useState([]);
  const [bookedTrainer, setBookedTrainer] = useState(null);

  useEffect(() => {
    const defaultTrainers = [
      { name: 'John Doe', expertise: 'Yoga', image: 'https://unsplash.it/100/100?image=100' },
      { name: 'Jane Smith', expertise: 'Strength Training', image: 'https://unsplash.it/100/100?image=101' },
      { name: 'Emily Davis', expertise: 'Pilates', image: 'https://unsplash.it/100/100?image=102' },
    ];

    if (!localStorage.getItem('trainers')) {
      localStorage.setItem('trainers', JSON.stringify(defaultTrainers));
    }

    const savedTrainers = JSON.parse(localStorage.getItem('trainers')) || [];
    setTrainers(savedTrainers);

    const bookings = JSON.parse(localStorage.getItem('trainerBookings')) || [];
    const found = bookings.find(b => b.member === memberUsername);
    if (found) {
      setBookedTrainer(savedTrainers.find(t => t.name === found.trainerName));
    }
  }, [memberUsername]);

  const handleBook = (trainer) => {
    if (bookedTrainer) return;

    const newBooking = { trainerName: trainer.name, member: memberUsername };
    const updatedBookings = [...(JSON.parse(localStorage.getItem('trainerBookings')) || []), newBooking];
    localStorage.setItem('trainerBookings', JSON.stringify(updatedBookings));
    setBookedTrainer(trainer);
  };

  const handleCancel = () => {
    const updatedBookings = (JSON.parse(localStorage.getItem('trainerBookings')) || []).filter(
      b => b.member !== memberUsername
    );
    localStorage.setItem('trainerBookings', JSON.stringify(updatedBookings));
    setBookedTrainer(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Book a Trainer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainers.map((t, i) => (
            <div key={i} className="border p-4 rounded shadow bg-white flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h2 className="text-lg font-semibold">{t.name}</h2>
                <p className="text-sm text-gray-600">{t.expertise}</p>
                {bookedTrainer?.name === t.name ? (
                  <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded" onClick={handleCancel}>
                    Cancel Booking
                  </button>
                ) : (
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={() => handleBook(t)}
                    disabled={!!bookedTrainer}
                  >
                    {bookedTrainer ? "Already Booked" : "Book Trainer"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerBooking;
