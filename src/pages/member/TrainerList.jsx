// import React, { useEffect, useState } from 'react';

// const TrainerList = () => {
//   const [trainers, setTrainers] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('trainers')) || [];
//     setTrainers(stored);
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Available Trainers</h2>
//       {trainers.length === 0 ? (
//         <p>No trainers available. Check back later!</p>
//       ) : (
//         <ul className="space-y-2">
//           {trainers.map((t, i) => (
//             <li key={i} className="p-3 bg-gray-100 rounded shadow">{t.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TrainerList;

import React, { useState, useEffect } from 'react';
import MemberNavbar from './MemberNavbar';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Simulated fetch of trainer data — replace with an actual API call later
    const fetchTrainers = async () => {
      const dummyTrainers = [
        { name: 'John Doe', specialization: 'Weight Training' },
        { name: 'Jane Smith', specialization: 'Yoga' },
        { name: 'Mike Johnson', specialization: 'Cardio' },
      ];
      setTrainers(dummyTrainers);
    };

    fetchTrainers();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Available Trainers</h1>
        {trainers.length === 0 ? (
          <p>No trainers available. Check back later!</p>
        ) : (
          <ul className="space-y-2">
            {trainers.map((trainer, index) => (
              <li key={index} className="p-3 bg-gray-100 rounded shadow">
                <p className="font-semibold">{trainer.name}</p>
                <p className="text-sm text-gray-600">{trainer.specialization}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrainerList;
