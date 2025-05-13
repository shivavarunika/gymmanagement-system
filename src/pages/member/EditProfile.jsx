// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const EditProfile = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '123-456-7890',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit updated data to backend here
//     console.log('Updated profile:', formData);
//     navigate('/member/view-profile');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberNavbar from './MemberNavbar';

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated data to backend here
    console.log('Updated profile:', formData);
    navigate('/member/view-profile');
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
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
