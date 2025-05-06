import React, { useState, useEffect } from 'react';
import MemberNavbar from './MemberNavbar';

const PackageList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const dummyPackages = [
      {
        name: 'Basic Plan',
        description: 'Access to gym equipment and locker rooms.',
        price: 29.99,
      },
      {
        name: 'Premium Plan',
        description: 'Includes all classes and personal trainer access.',
        price: 59.99,
      },
      {
        name: 'Elite Plan',
        description: 'All benefits of Premium + nutrition consultation.',
        price: 89.99,
      },
    ];
    setPackages(dummyPackages);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Available Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.length > 0 ? (
            packages.map((pkg, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
                <p className="text-gray-600 mb-2">{pkg.description}</p>
                <p className="font-semibold text-lg">${pkg.price}</p>
              </div>
            ))
          ) : (
            <p>No packages available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
