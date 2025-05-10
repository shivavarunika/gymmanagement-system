// // // import React, { useState, useEffect } from 'react';
// // // import MemberNavbar from './MemberNavbar';

// // // const TrainerList = () => {
// // //   const [trainers, setTrainers] = useState([]);

// // //   useEffect(() => {
// // //     const fetchTrainers = async () => {
// // //       const dummyTrainers = [
// // //         { name: 'John Doe', specialization: 'Weight Training' },
// // //         { name: 'Jane Smith', specialization: 'Yoga' },
// // //         { name: 'Mike Johnson', specialization: 'Cardio' },
// // //       ];
// // //       setTrainers(dummyTrainers);
// // //     };

// // //     fetchTrainers();
// // //   }, []);

// // //   return (
// // //     <div
// // //       className="min-h-screen p-6 bg-cover bg-center"
// // //       style={{
// // //         backgroundImage:
// // //           "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
// // //       }}
// // //     >
// // //       <MemberNavbar />
// // //       <div className="mt-8 max-w-4xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
// // //         <h1 className="text-2xl font-bold mb-4">Available Trainers</h1>
// // //         {trainers.length === 0 ? (
// // //           <p>No trainers available. Check back later!</p>
// // //         ) : (
// // //           <ul className="space-y-2">
// // //             {trainers.map((trainer, index) => (
// // //               <li
// // //                 key={index}
// // //                 className="p-3 bg-white bg-opacity-80 rounded shadow"
// // //               >
// // //                 <p className="font-semibold">{trainer.name}</p>
// // //                 <p className="text-sm text-gray-600">{trainer.specialization}</p>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrainerList;
// // import React, { useState, useEffect } from 'react';
// // import MemberNavbar from './MemberNavbar';

// // const TrainerList = () => {
// //   const [trainers, setTrainers] = useState([]);
// //   const [expandedIndex, setExpandedIndex] = useState(null);

// //   useEffect(() => {
// //     const dummyTrainers = [
// //       {
// //         name: 'John Doe',
// //         specialization: 'Weight Training',
// //         experience: '5 years',
// //         achievements: 'Certified Personal Trainer, Winner of National Bodybuilding Championship',
// //         photo: 'https://randomuser.me/api/portraits/men/32.jpg',
// //       },
// //       {
// //         name: 'Jane Smith',
// //         specialization: 'Yoga',
// //         experience: '3 years',
// //         achievements: 'Yoga Alliance Certified, Led 200+ sessions globally',
// //         photo: 'https://randomuser.me/api/portraits/women/44.jpg',
// //       },
// //       {
// //         name: 'Mike Johnson',
// //         specialization: 'Cardio',
// //         experience: '4 years',
// //         achievements: 'Cardio Specialist, Designed corporate fitness programs',
// //         photo: 'https://randomuser.me/api/portraits/men/65.jpg',
// //       },
// //       {
// //         name: 'Emily Clark',
// //         specialization: 'Pilates',
// //         experience: '6 years',
// //         achievements: 'Certified Pilates Instructor, Trained professional dancers',
// //         photo: 'https://randomuser.me/api/portraits/women/65.jpg',
// //       },
// //       {
// //         name: 'Robert Brown',
// //         specialization: 'CrossFit',
// //         experience: '7 years',
// //         achievements: 'CrossFit Level 2 Coach, Host of regional games',
// //         photo: 'https://randomuser.me/api/portraits/men/12.jpg',
// //       },
// //       {
// //         name: 'Sarah Davis',
// //         specialization: 'Zumba',
// //         experience: '2 years',
// //         achievements: 'Licensed Zumba Trainer, Taught at international workshops',
// //         photo: 'https://randomuser.me/api/portraits/women/24.jpg',
// //       },
// //       {
// //         name: 'David Wilson',
// //         specialization: 'Strength Training',
// //         experience: '8 years',
// //         achievements: 'Strength Coach at Pro Athletics, Multiple client transformations',
// //         photo: 'https://randomuser.me/api/portraits/men/18.jpg',
// //       },
// //       {
// //         name: 'Laura Taylor',
// //         specialization: 'Aerobics',
// //         experience: '5 years',
// //         achievements: 'Certified Aerobics Trainer, Community Fitness Leader',
// //         photo: 'https://randomuser.me/api/portraits/women/30.jpg',
// //       },
// //     ];
// //     setTrainers(dummyTrainers);
// //   }, []);

// //   const toggleExpand = (index) => {
// //     setExpandedIndex(expandedIndex === index ? null : index);
// //   };

// //   return (
// //     <div
// //       className="min-h-screen p-6 bg-cover bg-center"
// //       style={{
// //         backgroundImage:
// //           "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
// //       }}
// //     >
// //       <MemberNavbar />
// //       <div className="mt-8 max-w-6xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
// //         <h1 className="text-2xl font-bold mb-4">Available Trainers</h1>
// //         {trainers.length === 0 ? (
// //           <p>No trainers available. Check back later!</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {trainers.map((trainer, index) => (
// //               <div
// //                 key={index}
// //                 onClick={() => toggleExpand(index)}
// //                 className="cursor-pointer bg-white bg-opacity-80 p-4 rounded shadow text-center transition-transform hover:scale-105"
// //               >
// //                 <img
// //                   src={trainer.photo}
// //                   alt={trainer.name}
// //                   className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
// //                 />
// //                 <h3 className="font-semibold">{trainer.name}</h3>

// //                 {expandedIndex === index && (
// //                   <div className="mt-3 text-sm text-left">
// //                     <p><span className="font-semibold">Specialization:</span> {trainer.specialization}</p>
// //                     <p><span className="font-semibold">Experience:</span> {trainer.experience}</p>
// //                     <p><span className="font-semibold">Achievements:</span> {trainer.achievements}</p>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrainerList;
// import React, { useState, useEffect } from 'react';
// import MemberNavbar from './MemberNavbar';

// const TrainerList = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [selectedTrainer, setSelectedTrainer] = useState(null);

//   useEffect(() => {
//     const dummyTrainers = [
//       {
//         name: 'John Doe',
//         specialization: 'Weight Training',
//         experience: '5 years',
//         achievements: 'Certified Personal Trainer, Winner of National Bodybuilding Championship',
//         photo: 'https://randomuser.me/api/portraits/men/32.jpg',
//       },
//       {
//         name: 'Jane Smith',
//         specialization: 'Yoga',
//         experience: '3 years',
//         achievements: 'Yoga Alliance Certified, Led 200+ sessions globally',
//         photo: 'https://randomuser.me/api/portraits/women/44.jpg',
//       },
//       {
//         name: 'Mike Johnson',
//         specialization: 'Cardio',
//         experience: '4 years',
//         achievements: 'Cardio Specialist, Designed corporate fitness programs',
//         photo: 'https://randomuser.me/api/portraits/men/65.jpg',
//       },
//       {
//         name: 'Emily Clark',
//         specialization: 'Pilates',
//         experience: '6 years',
//         achievements: 'Certified Pilates Instructor, Trained professional dancers',
//         photo: 'https://randomuser.me/api/portraits/women/65.jpg',
//       },
//       {
//         name: 'Robert Brown',
//         specialization: 'CrossFit',
//         experience: '7 years',
//         achievements: 'CrossFit Level 2 Coach, Host of regional games',
//         photo: 'https://randomuser.me/api/portraits/men/12.jpg',
//       },
//       {
//         name: 'Sarah Davis',
//         specialization: 'Zumba',
//         experience: '2 years',
//         achievements: 'Licensed Zumba Trainer, Taught at international workshops',
//         photo: 'https://randomuser.me/api/portraits/women/24.jpg',
//       },
//       {
//         name: 'David Wilson',
//         specialization: 'Strength Training',
//         experience: '8 years',
//         achievements: 'Strength Coach at Pro Athletics, Multiple client transformations',
//         photo: 'https://randomuser.me/api/portraits/men/18.jpg',
//       },
//       {
//         name: 'Laura Taylor',
//         specialization: 'Aerobics',
//         experience: '5 years',
//         achievements: 'Certified Aerobics Trainer, Community Fitness Leader',
//         photo: 'https://randomuser.me/api/portraits/women/30.jpg',
//       },
//     ];
//     setTrainers(dummyTrainers);
//   }, []);

//   return (
//     <div
//       className="min-h-screen p-6 bg-cover bg-center relative"
//       style={{
//         backgroundImage:
//           "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
//       }}
//     >
//       <MemberNavbar />
//       <div className="mt-8 max-w-6xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
//         <h1 className="text-2xl font-bold mb-6 text-center">Available Trainers</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {trainers.map((trainer, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedTrainer(trainer)}
//               className="cursor-pointer bg-white bg-opacity-90 rounded shadow-md p-4 text-center transition-transform hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={trainer.photo}
//                 alt={trainer.name}
//                 className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
//               />
//               <h3 className="font-semibold text-lg">{trainer.name}</h3>
//               <p className="text-gray-600 text-sm">{trainer.specialization}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Centered Popup Card */}
//       {selectedTrainer && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md text-center relative">
//             <button
//               className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl"
//               onClick={() => setSelectedTrainer(null)}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedTrainer.photo}
//               alt={selectedTrainer.name}
//               className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
//             />
//             <h2 className="text-xl font-bold mb-1">{selectedTrainer.name}</h2>
//             <p className="text-gray-500 text-sm mb-4">{selectedTrainer.specialization}</p>
//             <div className="text-sm text-gray-700 space-y-3">
//               <p>
//                 <span className="font-semibold">Experience:</span><br />
//                 {selectedTrainer.experience}
//               </p>
//               <p>
//                 <span className="font-semibold">Achievements:</span><br />
//                 {selectedTrainer.achievements}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrainerList;
import React, { useState, useEffect } from 'react';
import MemberNavbar from './MemberNavbar';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const dummyTrainers = [
      {
        name: 'John Doe',
        specialization: 'Weight Training',
        experience: '5 years',
        achievements: 'Certified Personal Trainer, Winner of National Bodybuilding Championship',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        name: 'Jane Smith',
        specialization: 'Yoga',
        experience: '3 years',
        achievements: 'Yoga Alliance Certified, Led 200+ sessions globally',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Mike Johnson',
        specialization: 'Cardio',
        experience: '4 years',
        achievements: 'Cardio Specialist, Designed corporate fitness programs',
        photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      },
      {
        name: 'Emily Clark',
        specialization: 'Yoga',
        experience: '6 years',
        achievements: 'International Yoga Instructor, Conducted 500+ classes',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      {
        name: 'Robert Brown',
        specialization: 'CrossFit',
        experience: '7 years',
        achievements: 'CrossFit Level 2 Coach, Host of regional games',
        photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      },
      {
        name: 'Sarah Davis',
        specialization: 'Zumba',
        experience: '2 years',
        achievements: 'Licensed Zumba Trainer, Taught at international workshops',
        photo: 'https://randomuser.me/api/portraits/women/24.jpg',
      },
      {
        name: 'David Wilson',
        specialization: 'Strength Training',
        experience: '8 years',
        achievements: 'Strength Coach at Pro Athletics, Multiple client transformations',
        photo: 'https://randomuser.me/api/portraits/men/18.jpg',
      },
      {
        name: 'Laura Taylor',
        specialization: 'Aerobics',
        experience: '5 years',
        achievements: 'Certified Aerobics Trainer, Community Fitness Leader',
        photo: 'https://randomuser.me/api/portraits/women/30.jpg',
      },
      {
        name: 'Kevin Patel',
        specialization: 'Cardio',
        experience: '6 years',
        achievements: 'Cardio Bootcamp Founder, Worked with marathon runners',
        photo: 'https://randomuser.me/api/portraits/men/50.jpg',
      },
      {
        name: 'Priya Mehta',
        specialization: 'Weight Training',
        experience: '4 years',
        achievements: 'Women’s Strength Coach, National Fitness Influencer',
        photo: 'https://randomuser.me/api/portraits/women/50.jpg',
      },
      {
        name: 'Amit Verma',
        specialization: 'Zumba',
        experience: '3 years',
        achievements: 'Zumba Gold Certified, Popular dance fitness YouTuber',
        photo: 'https://randomuser.me/api/portraits/men/90.jpg',
      },
      {
        name: 'Nina Kapoor',
        specialization: 'CrossFit',
        experience: '5 years',
        achievements: 'CrossFit Games Qualifier, Nutrition Expert',
        photo: 'https://randomuser.me/api/portraits/women/90.jpg',
      },
    ];
    
    setTrainers(dummyTrainers);
  }, []);

  // Filter trainers by specialization
  const filteredTrainers = trainers.filter((trainer) =>
    trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
      }}
    >
      <MemberNavbar />
      <div className="mt-8 max-w-6xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Available Trainers</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by specialization (e.g. Yoga, Cardio)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer, index) => (
              <div
                key={index}
                onClick={() => setSelectedTrainer(trainer)}
                className="cursor-pointer bg-white bg-opacity-90 rounded shadow-md p-4 text-center transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h3 className="font-semibold text-lg">{trainer.name}</h3>
                <p className="text-gray-600 text-sm">{trainer.specialization}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No trainers found.</p>
          )}
        </div>
      </div>

      {/* Centered Trainer Detail Popup */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md text-center relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedTrainer(null)}
            >
              &times;
            </button>
            <img
              src={selectedTrainer.photo}
              alt={selectedTrainer.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
            />
            <h2 className="text-xl font-bold mb-1">{selectedTrainer.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{selectedTrainer.specialization}</p>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                <span className="font-semibold">Experience:</span><br />
                {selectedTrainer.experience}
              </p>
              <p>
                <span className="font-semibold">Achievements:</span><br />
                {selectedTrainer.achievements}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerList;
