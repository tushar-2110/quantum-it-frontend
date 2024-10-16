import React from 'react';

const ProtectedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold">Protected Page</h2>
      <p className="mt-4">You are logged in and can view this page.</p>
    </div>
  );
};

export default ProtectedPage;
