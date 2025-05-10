import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const TrainerBookingList = () => {
  const [trainerName, setTrainerName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [trainers, setTrainers] = useState([
    { name: 'John Doe', image: 'https://unsplash.it/100/100?image=100' },
    { name: 'Jane Smith', image: 'https://unsplash.it/100/100?image=101' },
    { name: 'Mike Johnson', image: 'https://unsplash.it/100/100?image=103' },
  ]);

  const handleAddTrainer = () => {
    if (!trainerName.trim()) return;
    const newTrainer = {
      name: trainerName.trim(),
      image: imageUrl.trim() || 'https://unsplash.it/100/100?image=999', // default image if empty
    };
    setTrainers([...trainers, newTrainer]);
    setTrainerName('');
    setImageUrl('');
  };

  const handleRemoveTrainer = (name) => {
    const updatedTrainers = trainers.filter(trainer => trainer.name !== name);
    setTrainers(updatedTrainers);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Trainer Booking Management</h1>

        <div className="mb-6 space-y-3">
          <input
            type="text"
            className="w-full p-2 border rounded shadow-sm"
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
            placeholder="Enter trainer name"
          />
          <input
            type="text"
            className="w-full p-2 border rounded shadow-sm"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL (optional)"
          />
          <button
            onClick={handleAddTrainer}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow"
          >
            Add Trainer
          </button>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold mb-2">Available Trainers</h2>
          <ul className="space-y-2">
            {trainers.map((trainer, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border rounded shadow-sm bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{trainer.name}</span>
                </div>
                <button
                  onClick={() => handleRemoveTrainer(trainer.name)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainerBookingList;
