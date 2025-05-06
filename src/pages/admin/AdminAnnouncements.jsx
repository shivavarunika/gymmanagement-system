import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminAnnouncements = () => {
  const [promotion, setPromotion] = useState('');
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setPromotion('50% off on annual memberships!');
      setAnnouncement('Gym will be closed on public holidays.');
    };
    fetchData();
  }, []);

  const handleSave = () => {
    console.log('Saving:', { promotion, announcement });
    alert('Updates saved!');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Manage Announcements</h1>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1">Current Promotion</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="2"
            value={promotion}
            onChange={(e) => setPromotion(e.target.value)}
            placeholder="Enter promotional message"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-1">Gym Announcement</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Enter general announcements"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminAnnouncements;
