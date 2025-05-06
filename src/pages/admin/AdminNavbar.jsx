import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 hover:text-red-700'  // Active link
      : 'text-blue-500 hover:text-red-600'; // Inactive link
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">Admin Portal</div>
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className={getButtonClass('/admin/dashboard')}
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate('/admin/trainers')}
          className={getButtonClass('/admin/trainers')}
        >
          Trainers
        </button>
        <button
          onClick={() => navigate('/admin/trainer-booking-list')}
          className={getButtonClass('/admin/trainer-booking-list')}
        >
          Book Trainer
        </button>
        <button
          onClick={() => navigate('/admin/bookings')}
          className={getButtonClass('/admin/bookings')}
        >
          Manage Bookings
        </button>
        <button
          onClick={() => navigate('/admin/products')}
          className={getButtonClass('/admin/products')}
        >
          Products
        </button>
        <button
          onClick={() => navigate('/admin/packages')}
          className={getButtonClass('/admin/packages')}
        >
          Packages
        </button>
        <button
          onClick={() => navigate('/admin/announcements')}
          className={getButtonClass('/admin/announcements')}
        >
          Announcements
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
