// import React, { useState } from 'react';
// import AdminNavbar from './AdminNavbar';

// const AdminTrainerManager = () => {
//   const [trainers, setTrainers] = useState([
//     { name: 'John Doe', specialization: 'Weight Training' },
//     { name: 'Jane Smith', specialization: 'Yoga' },
//   ]);
//   const [newName, setNewName] = useState('');
//   const [newSpec, setNewSpec] = useState('');

//   const addTrainer = () => {
//     if (!newName.trim() || !newSpec.trim()) return;
//     const newTrainer = { name: newName.trim(), specialization: newSpec.trim() };
//     setTrainers([...trainers, newTrainer]);
//     setNewName('');
//     setNewSpec('');
//   };

//   const removeTrainer = (index) => {
//     const updated = [...trainers];
//     updated.splice(index, 1);
//     setTrainers(updated);
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <AdminNavbar />
//       <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-3xl font-bold mb-4">Manage Trainers</h2>

//         <div className="mb-6 space-y-3">
//           <input
//             className="border p-2 w-full rounded shadow-sm"
//             placeholder="Trainer name"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//           />
//           <input
//             className="border p-2 w-full rounded shadow-sm"
//             placeholder="Specialization"
//             value={newSpec}
//             onChange={(e) => setNewSpec(e.target.value)}
//           />
//           <button
//             onClick={addTrainer}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow"
//           >
//             Add Trainer
//           </button>
//         </div>

//         <ul className="space-y-3">
//           {trainers.map((t, i) => (
//             <li key={i} className="flex justify-between items-center p-3 border rounded shadow-sm">
//               <div>
//                 <p className="font-semibold">{t.name}</p>
//                 <p className="text-sm text-gray-600">{t.specialization}</p>
//               </div>
//               <button
//                 onClick={() => removeTrainer(i)}
//                 className="text-red-500 hover:underline"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminTrainerManager;
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminTrainerManager = () => {
  const [trainers, setTrainers] = useState([
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
      specialization: 'Pilates',
      experience: '6 years',
      achievements: 'Certified Pilates Instructor, Trained professional dancers',
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
  ]);

  const [newTrainer, setNewTrainer] = useState({
    name: '',
    specialization: '',
    experience: '',
    achievements: '',
    photo: '',
  });

  const handleChange = (e) => {
    setNewTrainer({ ...newTrainer, [e.target.name]: e.target.value });
  };

  const addTrainer = () => {
    const { name, specialization, experience, achievements, photo } = newTrainer;
    if (!name || !specialization || !experience || !achievements || !photo) return;

    setTrainers([...trainers, newTrainer]);
    setNewTrainer({ name: '', specialization: '', experience: '', achievements: '', photo: '' });
  };

  const removeTrainer = (index) => {
    const updated = [...trainers];
    updated.splice(index, 1);
    setTrainers(updated);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold mb-4">Manage Trainers</h2>

        {/* Add Trainer Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            className="border p-2 rounded shadow-sm"
            name="name"
            placeholder="Name"
            value={newTrainer.name}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded shadow-sm"
            name="specialization"
            placeholder="Specialization"
            value={newTrainer.specialization}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded shadow-sm"
            name="experience"
            placeholder="Experience"
            value={newTrainer.experience}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded shadow-sm"
            name="achievements"
            placeholder="Achievements"
            value={newTrainer.achievements}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded shadow-sm col-span-1 sm:col-span-2"
            name="photo"
            placeholder="Photo URL"
            value={newTrainer.photo}
            onChange={handleChange}
          />
          <button
            onClick={addTrainer}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow col-span-1 sm:col-span-2"
          >
            Add Trainer
          </button>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={i}
              className="border p-4 rounded shadow-sm bg-gray-50 text-center"
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg">{trainer.name}</h3>
              <p className="text-sm text-gray-600">{trainer.specialization}</p>
              <p className="text-sm mt-1">Experience: {trainer.experience}</p>
              <p className="text-sm mt-1">Achievements: {trainer.achievements}</p>
              <button
                onClick={() => removeTrainer(i)}
                className="mt-3 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTrainerManager;
