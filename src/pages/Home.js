import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <h1 className="text-5xl text-white font-bold mb-8">Welcome to MERN Auth</h1>
      <div className="space-x-4">
        <Link to="/signup" className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-200">Sign Up</Link>
        <Link to="/login" className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-200">Log In</Link>
      </div>
    </div>
  );
};

export default Home;
