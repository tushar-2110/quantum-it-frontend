import React, { useEffect, useState } from 'react';
import { getUsers } from '../api';
import { useNavigate } from 'react-router-dom';
import { FaCog, FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await getUsers(token);
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users. Please log in again.');
      }
    };
    fetchUsers();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Registered Users</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto w-full max-w-4xl mb-6 shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg border border-gray-200">
          <thead className="bg-indigo-600 text-white rounded-t-lg">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold">Name</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Date of Birth</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Email</th>
              <th className="py-4 px-6 text-left text-lg font-semibold">Actions</th> {/* New Actions Column */}
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No users found</td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{new Date(user.dob).toLocaleDateString()}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <button
                      onClick={() => alert(`Edit user: ${user.name}`)} // Placeholder functionality
                      className="text-blue-500 hover:text-blue-600 transition duration-200"
                      title="Edit User"
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => alert(`Delete user: ${user.name}`)} // Placeholder functionality
                      className="text-red-500 hover:text-red-600 transition duration-200"
                      title="Delete User"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate('/settings')}
                      className="text-gray-600 hover:text-gray-800 transition duration-200"
                      title="Settings"
                    >
                      <FaCog className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
        className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200 mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Users;
