import React, { useState } from 'react';
import { login } from '../api'; // Import the login function from api.js
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' }); // State for form data
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Initialize navigation

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await login(formData); // Call the login API
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      navigate('/users'); // Navigate to the users page after successful login
    } catch (err) {
      setError('Login failed. Please check your credentials.'); // Set error message if login fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-teal-700">
      <div className="w-full max-w-md bg-[#1e1b4b] p-8 rounded-lg shadow-md relative">
        {/* Sign Up Button Positioned at the Top */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 mb-4">
          <button
            onClick={() => navigate('/signup')} // Navigate to the signup page
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-1 px-4 rounded-lg hover:from-teal-400 hover:to-teal-500 "
          >
            Sign Up
          </button>
        </div>

        {/* Person Outline Image */}
        <div className="flex justify-center mb-4 mt-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/034/098/053/non_2x/login-illustration-design-free-png.png" // Replace this URL with your person outline image URL
            alt="Person Outline"
            className="w-20 h-20"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Display error message if any */}

        <form onSubmit={handleSubmit}> {/* Handle form submission */}
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

          <div className="flex justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-gray-300 ml-2">Remember Me</label>
            </div>
            <div>
              <button
                type="button"
                onClick={() => alert('Forgot Password Clicked')} // Add functionality as needed
                className="text-teal-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg hover:from-teal-400 hover:to-teal-500 mb-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
