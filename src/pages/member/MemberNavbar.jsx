import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MemberNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleLogout = () => {
    navigate('/');
  };

  const getButtonClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 hover:text-red-700'  // Active button style
      : 'text-blue-500 hover:text-red-600'; // Default button style
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">Gym Member Portal</div>
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <button
          onClick={() => navigate('/member/trainers')}
          className={getButtonClass('/member/trainers')}
        >
          Browse Trainers
        </button>
        <button
          onClick={() => navigate('/member/book-trainer')}
          className={getButtonClass('/member/book-trainer')}
        >
          Book a Trainer
        </button>
        <button
          onClick={() => navigate('/member/packages')}
          className={getButtonClass('/member/packages')}
        >
          View Packages
        </button>
        <button
          onClick={() => navigate('/member/products')}
          className={getButtonClass('/member/products')}
        >
          Explore Products
        </button>
        <button
          onClick={() => navigate('/member/scheduled-training')}
          className={getButtonClass('/member/scheduled-training')}
        >
          My Schedule
        </button>
        <button
          onClick={() => navigate('/member/bmi')}
          className={getButtonClass('/member/bmi')}
        >
          BMI Calculator
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default MemberNavbar;
