import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MemberDashboard from './pages/member/MemberDashboard';
import TrainerList from './pages/member/TrainerList';
import PackageList from './pages/member/PackageList';
import ProductList from './pages/member/ProductList';
import BMICalculator from './pages/member/BMICalculator';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AdminTrainerManager from './pages/admin/AdminTrainerManager';
import AdminPackageManager from './pages/admin/AdminPackageManager';
import AdminProductManager from './pages/admin/AdminProductManager';
import AdminAnnouncements from './pages/admin/AdminAnnouncements';
import ScheduledTraining from './pages/member/ScheduledTraining';
import TrainerBooking from './pages/member/TrainerBooking';
import TrainerBookingList from './pages/admin/TrainerBookingList';
import TrainerDashboard from './pages/trainer/TrainerDashboard';
import ManageBookings from './pages/admin/ManageBookings';
import AdminReport from './pages/admin/AdminReport';
import ViewProfile from './pages/member/ViewProfile';
import EditProfile from './pages/member/EditProfile';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/member/dashboard" element={<MemberDashboard />} />
      <Route path="/member/trainers" element={<TrainerList />} />
      <Route path="/member/packages" element={<PackageList />} />
      <Route path="/member/products" element={<ProductList />} />
      <Route path="/member/bmi" element={<BMICalculator />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/trainers" element={<AdminTrainerManager />} />
      <Route path="/admin/packages" element={<AdminPackageManager />} />
      <Route path="/admin/products" element={<AdminProductManager />} />
      <Route path="/admin/announcements" element={<AdminAnnouncements />} />
      <Route path="/member/scheduled-training" element={<ScheduledTraining />} />
      <Route path="/member/book-trainer" element={<TrainerBooking />} />
      <Route path="/admin/trainer-booking-list" element={<TrainerBookingList />} />
      <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
      <Route path="/admin/bookings" element={<ManageBookings />} />
      <Route path="/admin/reports" element={<AdminReport />} />
      <Route path="/member/dashboard" element={<MemberDashboard />} />
<Route path="/member/view-profile" element={<ViewProfile />} />
<Route path="/member/edit-profile" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
