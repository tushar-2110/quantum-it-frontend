import React, { useState } from 'react';
import { signup } from '../api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', dob: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      navigate('/login');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-teal-700">
      <div className="w-full max-w-md bg-[#1e1b4b] p-8 rounded-lg shadow-md relative">
        
        {/* Person Outline Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/034/098/053/non_2x/login-illustration-design-free-png.png" // Replace this URL with your person outline image URL
            alt="Person Outline"
            className="w-20 h-20"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-gray-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 bg-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg hover:from-teal-400 hover:to-teal-500 mb-4"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center">
          <p className="text-gray-300">Already have an account?</p>
          <button
            onClick={() => navigate('/login')} // Navigate to the login page
            className="text-teal-400 hover:underline ml-2"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
