import React, { useState } from 'react';
import MemberNavbar from './MemberNavbar';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const result = (w / (h * h)).toFixed(2);
      setBmi(result);
      if (result < 18.5) setCategory('Underweight');
      else if (result < 25) setCategory('Normal');
      else if (result < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
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
      <div className="mt-8 max-w-2xl mx-auto bg-white bg-opacity-90 p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            className="border p-2 flex-1"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            className="border p-2 flex-1"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBMI}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Calculate
        </button>
        {bmi && (
          <p className="mt-4 text-lg">
            <strong>BMI:</strong> {bmi} ({category})
          </p>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
