import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminPackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageDescription, setPackageDescription] = useState('');

  const handleAddPackage = (e) => {
    e.preventDefault();

    if (!packageName || !packagePrice || !packageDescription) return;

    const newPackage = {
      name: packageName,
      price: packagePrice,
      description: packageDescription,
    };

    setPackages([...packages, newPackage]);

    setPackageName('');
    setPackagePrice('');
    setPackageDescription('');

    alert('Package added successfully!');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <AdminNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Manage Packages</h1>

        <form onSubmit={handleAddPackage} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-1">Package Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter package name"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-1">Package Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Enter package price"
              value={packagePrice}
              onChange={(e) => setPackagePrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-1">Package Description</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Enter package description"
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
          >
            Add Package
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Existing Packages</h2>
          {packages.length === 0 ? (
            <p className="text-gray-500">No packages available.</p>
          ) : (
            <ul className="space-y-3">
              {packages.map((pkg, index) => (
                <li
                  key={index}
                  className="p-4 border rounded shadow-sm bg-gray-50"
                >
                  <p className="font-bold text-lg">{pkg.name} - ${pkg.price}</p>
                  <p className="text-gray-700">{pkg.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPackageManager;
