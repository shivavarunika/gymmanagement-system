import React, { useState, useEffect } from 'react';
import MemberNavbar from './MemberNavbar';

const PackageList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const dummyPackages = [
      {
        name: 'Flying Solo',
        price: 7.49,
        description:
          'If you are confident in the hows and whys of training and have a pretty solid knowledge of nutrition and training, this package is for you.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b', // New image URL for Flying Solo
      },
      {
        name: 'Accountability',
        price: 49.99,
        description:
          'If you strive for real results and want to receive the guidance you need to set yourself up for success, then this is the package for you.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1', // personal training/coaching
      },
      {
        name: 'Ultimate Result',
        price: 74.99,
        description:
          'Do you want to accelerate your results? Do you want a new lifestyle that you can sustain that will give you the healthy benefits you crave?',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b', // intense transformation/workout
      },
    ];
    

    setPackages(dummyPackages);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <MemberNavbar />
      <div className="mt-8 max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6">Available Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white border rounded shadow p-4">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold">{pkg.name}</h2>
              <p className="text-lg font-semibold">₹{pkg.price}/week</p>
              <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
