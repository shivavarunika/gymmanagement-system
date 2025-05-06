import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';

const TrainerBookingList = () => {
  const [trainerName, setTrainerName] = useState('');
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const savedTrainers = JSON.parse(localStorage.getItem('trainers')) || [];
    setTrainers(savedTrainers);
  }, []);

  const handleAddTrainer = () => {
    if (!trainerName.trim()) return;
    const newTrainer = { name: trainerName.trim() };
    const updatedTrainers = [...trainers, newTrainer];
    setTrainers(updatedTrainers);
    localStorage.setItem('trainers', JSON.stringify(updatedTrainers));
    setTrainerName('');
  };

  const handleRemoveTrainer = (name) => {
    const updatedTrainers = trainers.filter(trainer => trainer.name !== name);
    setTrainers(updatedTrainers);
    localStorage.setItem('trainers', JSON.stringify(updatedTrainers));
  };

  return (
    <>
    
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
                className="flex justify-between items-center p-3 border rounded shadow-sm"
              >
                <span className="font-medium">{trainer.name}</span>
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
    </>
  );
};

export default TrainerBookingList;
