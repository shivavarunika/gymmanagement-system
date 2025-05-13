import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const MemberNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    navigate('/');
  };

  const getButtonClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 hover:text-red-700'
      : 'text-zinc-500 hover:text-red-600';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-bold text-zinc-600 mb-4 md:mb-0">Gym Member Portal</div>
      
      <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
        <button onClick={() => navigate('/member/dashboard')} className={getButtonClass('/member/dashboard')}>Home</button>
        <button onClick={() => navigate('/member/trainers')} className={getButtonClass('/member/trainers')}>Trainers</button>
        <button onClick={() => navigate('/member/book-trainer')} className={getButtonClass('/member/book-trainer')}>Book Trainer</button>
        <button onClick={() => navigate('/member/packages')} className={getButtonClass('/member/packages')}>Packages</button>
        <button onClick={() => navigate('/member/products')} className={getButtonClass('/member/products')}>Products</button>
        <button onClick={() => navigate('/member/scheduled-training')} className={getButtonClass('/member/scheduled-training')}>My Schedule</button>
        <button onClick={() => navigate('/member/bmi')} className={getButtonClass('/member/bmi')}>BMI Checker</button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-zinc-500 hover:text-red-600 text-2xl">
            <FaUserCircle />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
              <button onClick={() => { setDropdownOpen(false); navigate('/member/view-profile'); }} className="w-full text-left px-4 py-2 hover:bg-zinc-100">
                view Profile
              </button>
              <button onClick={() => { setDropdownOpen(false); navigate('/member/edit-profile'); }} className="w-full text-left px-4 py-2 hover:bg-zinc-100">
                Update Profile
              </button>
              <button onClick={() => { setDropdownOpen(false); handleLogout(); }} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MemberNavbar;
