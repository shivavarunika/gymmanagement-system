import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      {
        name: 'Dumbbell Set',
        price: 49.99,
        image: 'https://img.freepik.com/free-photo/dumbbells-yoga-mat-floor_1150-4292.jpg'
      },
      {
        name: 'Yoga Mat',
        price: 19.99,
        image: 'https://img.freepik.com/free-photo/still-life-yoga-equipment_23-2151725313.jpg'
      },
      {
        name: 'Protein Powder',
        price: 29.99,
        image: 'https://img.freepik.com/free-photo/protein-powder-scoop-powder-background_1150-4219.jpg'
      },
    ];
    setProducts(dummyProducts);
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
        <h1 className="text-2xl font-bold mb-6 text-center">Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 rounded shadow-md p-4 hover:shadow-lg transition-transform hover:scale-105 min-h-[320px]"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-lg font-bold mb-1 text-center">{product.name}</h2>
              <p className="text-blue-600 font-semibold text-center">₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
