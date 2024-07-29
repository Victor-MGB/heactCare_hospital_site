import React, { useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SideNavbar from '../comonents/SideNavbar';

const ApprovePayment = () => {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState('');

  const handleApprove = async () => {
    setLoading(true);
    setMessage('');
    setUserData(null);
    setToken('');

    try {
      const response = await axios.patch(`https://hospital-website-backend.onrender.com/api/approve-payment/${userId}`);

      setLoading(false);
      if (response.data.success) {
        setUserData(response.data.user);
        setToken(response.data.token);
        setMessage(response.data.message);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || 'Error approving payment');
    }
  };

  const user = { name: 'Admin User', role: 'Admin' };
  const links = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    { name: 'Approve Payment', path: '/approve-payment' },
    { name: 'Manage Users', path: '/manage-users' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="flex">
      <SideNavbar links={links} user={user} />
      <div className="flex flex-1 items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-center text-indigo-600">Approve Payment</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">User ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <button
              onClick={handleApprove}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-150"
            >
              {loading ? <Skeleton width={20} /> : 'Approve Payment'}
            </button>
          </div>
          {message && <p className="text-center text-red-500">{message}</p>}
          {token && (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h3 className="text-xl font-bold text-green-700">JWT Token</h3>
              <p className="text-green-600">{token}</p>
            </div>
          )}
          {userData && (
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-700">User Details</h3>
              <p className="text-gray-600">Name: {userData.firstName} {userData.middleName} {userData.surname}</p>
              <p className="text-gray-600">Email: {userData.email}</p>
              <p className="text-gray-600">Contact Number: {userData.contactNumber}</p>
              <p className="text-gray-600">Date of Birth: {new Date(userData.dateOfBirth).toLocaleDateString()}</p>
              <p className="text-gray-600">Gender: {userData.gender}</p>
              <p className="text-gray-600">Emergency Contact Number: {userData.emergencyContactNumber}</p>
              {userData.address && (
                <p className="text-gray-600">Address: {`${userData.address.house_number} ${userData.address.street}, ${userData.address.city}, ${userData.address.state}, ${userData.address.country}`}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovePayment;
