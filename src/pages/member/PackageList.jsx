
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
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      },
      {
        name: 'Accountability',
        price: 49.99,
        description:
          'If you strive for real results and want to receive the guidance you need to set yourself up for success, then this is the package for you.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
      },
      {
        name: 'Ultimate Result',
        price: 74.99,
        description:
          'Do you want to accelerate your results? Do you want a new lifestyle that you can sustain that will give you the healthy benefits you crave?',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      },
    ];

    setPackages(dummyPackages);
  }, []);

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://theironoffice.com/cdn/shop/files/Gym_12.23-19.jpg?v=1701994187&width=3840')",
      }}
    >
      <MemberNavbar />
      <div className="mt-8 max-w-6xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Available Packages</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 rounded shadow-md p-4 hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-bold mb-1">{pkg.name}</h2>
              <p className="text-blue-600 font-semibold mb-2">₹{pkg.price}/week</p>
              <p className="text-gray-700 text-sm">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
