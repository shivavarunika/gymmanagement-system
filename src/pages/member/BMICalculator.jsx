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
    <div className="p-6 bg-gray-100 min-h-screen">
      <MemberNavbar />
      <div className="mt-8 max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
      <input type="number" placeholder="Weight (kg)" className="border p-2 mr-2" onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" className="border p-2 mr-2" onChange={e => setHeight(e.target.value)} />
      <button onClick={calculateBMI} className="bg-green-500 text-white px-4 py-2">Calculate</button>
      {bmi && <p className="mt-4">BMI: {bmi} ({category})</p>}
    </div>
    </div>
  );
};

export default BMICalculator;
