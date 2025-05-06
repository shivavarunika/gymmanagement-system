// import React, { useState } from 'react';

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
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Trainers</h2>
//       <div className="space-y-2 mb-4">
//         <input
//           className="border p-2 w-full"
//           placeholder="Trainer name"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//         />
//         <input
//           className="border p-2 w-full"
//           placeholder="Specialization"
//           value={newSpec}
//           onChange={(e) => setNewSpec(e.target.value)}
//         />
//         <button
//           onClick={addTrainer}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Trainer
//         </button>
//       </div>

//       <ul className="mt-4 space-y-2">
//         {trainers.map((t, i) => (
//           <li key={i} className="flex justify-between p-2 border-b">
//             <div>
//               <p className="font-semibold">{t.name}</p>
//               <p className="text-sm text-gray-600">{t.specialization}</p>
//             </div>
//             <button
//               onClick={() => removeTrainer(i)}
//               className="text-red-500"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminTrainerManager;
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminTrainerManager = () => {
  const [trainers, setTrainers] = useState([
    { name: 'John Doe', specialization: 'Weight Training' },
    { name: 'Jane Smith', specialization: 'Yoga' },
  ]);
  const [newName, setNewName] = useState('');
  const [newSpec, setNewSpec] = useState('');

  const addTrainer = () => {
    if (!newName.trim() || !newSpec.trim()) return;
    const newTrainer = { name: newName.trim(), specialization: newSpec.trim() };
    setTrainers([...trainers, newTrainer]);
    setNewName('');
    setNewSpec('');
  };

  const removeTrainer = (index) => {
    const updated = [...trainers];
    updated.splice(index, 1);
    setTrainers(updated);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold mb-4">Manage Trainers</h2>

        <div className="mb-6 space-y-3">
          <input
            className="border p-2 w-full rounded shadow-sm"
            placeholder="Trainer name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className="border p-2 w-full rounded shadow-sm"
            placeholder="Specialization"
            value={newSpec}
            onChange={(e) => setNewSpec(e.target.value)}
          />
          <button
            onClick={addTrainer}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow"
          >
            Add Trainer
          </button>
        </div>

        <ul className="space-y-3">
          {trainers.map((t, i) => (
            <li key={i} className="flex justify-between items-center p-3 border rounded shadow-sm">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.specialization}</p>
              </div>
              <button
                onClick={() => removeTrainer(i)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminTrainerManager;
