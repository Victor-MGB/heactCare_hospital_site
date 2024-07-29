import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Login = () => {
  const [medicalRecordNumber, setMedicalRecordNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPrice, setPendingPrice] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('https://hospital-website-backend.onrender.com/api/login', {
        medicalRecordNumber,
        password,
      });

      setLoading(false);
      if (response.data.success) {
        if (response.data.status === 'pending') {
          setPendingPrice(response.data.price);
          setIsModalOpen(true);
        } else {
          navigate('/profile', { state: { user: response.data.user } }); // Navigate to profile with user data
        }
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || 'Error logging in');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
        <p className="text-gray-700 text-center">
          Access our comprehensive healthcare management system. Please enter your medical record number and password to continue.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Medical Record Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={medicalRecordNumber}
              onChange={(e) => setMedicalRecordNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? <Skeleton width={20} /> : 'Login'}
          </button>
        </form>
        {message && <p className="text-center text-red-500">{message}</p>}
        <div className="text-center">
          <p>Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register here</a></p>
          <a href="/" className="text-indigo-600 hover:underline">Back to Home</a>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      >
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Account Pending</h2>
          <p className="mb-4">
            Your account is currently pending approval. Before our hospital administration can begin attending to you, a payment of <strong>${pendingPrice}</strong> is required. This amount covers the initial administrative and medical assessment fees.
          </p>
          <p className="mb-4">
            To proceed with your registration and receive medical attention, please visit our billing department or contact our support team for further assistance. We appreciate your understanding and cooperation.
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
