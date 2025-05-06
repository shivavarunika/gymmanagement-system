import React, { useEffect, useState } from 'react';
import MemberNavbar from './MemberNavbar';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { name: 'Dumbbell Set', price: 49.99, image: 'https://via.placeholder.com/150?text=Dumbbell' },
      { name: 'Yoga Mat', price: 19.99, image: 'https://via.placeholder.com/150?text=Yoga+Mat' },
      { name: 'Protein Powder', price: 29.99, image: 'https://via.placeholder.com/150?text=Protein' },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded shadow p-4 hover:shadow-lg transition"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductList;
