import React from 'react';
import MemberNavbar from './MemberNavbar';

const MemberDashboard = () => {
  const promotion = 'Get 20% off on yearly packages!';
  const announcement = 'New Zumba class every Monday at 6 PM.';

  return (
    <div
      style={{
        backgroundImage: `url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="min-h-screen bg-gray-100 bg-opacity-0 w-full">
        <MemberNavbar />
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Welcome, Member!</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded shadow bg-white text-zinc-800">
              <h3 className="text-xl font-semibold mb-2">Current Promotions</h3>
              <p>{promotion}</p>
            </div>

            <div className="p-4 border rounded shadow bg-white text-zinc-800">
              <h3 className="text-xl font-semibold mb-2">Gym Announcements</h3>
              <p>{announcement}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
