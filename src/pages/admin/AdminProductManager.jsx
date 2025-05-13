
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const AdminProductManager = () => {
  const [products, setProducts] = useState([
    { name: 'Dumbbell Set', price: 49.99, image: 'https://img.freepik.com/free-photo/still-life-yoga-equipment_23-2151725313.jpg' },
    { name: 'Yoga Mat', price: 19.99, image: 'https://img.freepik.com/free-photo/still-life-yoga-equipment_23-2151725313.jpg' },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...products];
      updated[editingIndex] = form;
      setProducts(updated);
      setEditingIndex(null);
    } else {
      setProducts([...products, form]);
    }

    setForm({ name: '', price: '', image: '' });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    if (editingIndex === index) {
      setEditingIndex(null);
      setForm({ name: '', price: '', image: '' });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Admin: Manage Products</h1>

        <form onSubmit={handleAddOrUpdate} className="mb-6">
          <input
            className="w-full border p-2 mb-2 rounded"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-2 mb-2 rounded"
            name="price"
            type="number"
            placeholder="Product Price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-2 mb-2 rounded"
            name="image"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {editingIndex !== null ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border rounded shadow p-4 bg-white relative">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProductManager;
