// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ViewProfile = () => {
//   const navigate = useNavigate();

//   // Dummy user data (you should replace with actual fetched data)
//   const member = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '123-456-7890',
//     membershipType: 'Yearly',
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//         <p><strong>Name:</strong> {member.name}</p>
//         <p><strong>Email:</strong> {member.email}</p>
//         <p><strong>Phone:</strong> {member.phone}</p>
//         <p><strong>Membership Type:</strong> {member.membershipType}</p>

//         <button
//           onClick={() => navigate('/member/edit-profile')}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MemberNavbar from './MemberNavbar';

const ViewProfile = () => {
  const navigate = useNavigate();

  // Dummy user data (you should replace with actual fetched data)
  const member = {
    name: 'alice',
    email: 'alice@example.com',
    phone: '123-456-7890'
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
      }}
    >
      <MemberNavbar />
      <div className="mt-8 max-w-xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <p><strong>Name:</strong> {member.name}</p>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phone}</p>

        <button
          onClick={() => navigate('/member/edit-profile')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ViewProfile;
