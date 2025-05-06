// src/components/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'; 

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow mt-6">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Existing Cards */}
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Trainers</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/trainers')}
            >
              Add or Edit Trainers
            </button>
          </div>

          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Trainer Booking List</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/trainer-booking-list')}
            >
              Add or Remove Trainers
            </button>
          </div>

          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Bookings</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/bookings')}
            >
              View & Manage Bookings
            </button>
          </div>

          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/products')}
            >
              Add or Edit Products
            </button>
          </div>

          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Packages</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/packages')}
            >
              View & Edit Packages
            </button>
          </div>

          {/* New Card: Edit Announcements */}
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Edit Announcements</h2>
            <button
              className="text-blue-500 underline"
              onClick={() => navigate('/admin/announcements')}
            >
              Promotions & Gym Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
